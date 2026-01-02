import { useEffect, useState } from "react";

/* ===================== TYPES ===================== */

export type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  dismiss: () => void;
};

type ToastState = {
  toasts: ToastProps[];
};

type ToastListener = (state: ToastState) => void;

/* ===================== CONSTANTS ===================== */

const TOAST_LIMIT = 1;

let count = 0;
function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

/* ===================== STORE ===================== */

const toastStore = {
  state: {
    toasts: [],
  } as ToastState,

  listeners: [] as ToastListener[],

  getState(): ToastState {
    return this.state;
  },

  setState(
    nextState:
      | ToastState
      | ((state: ToastState) => ToastState)
  ) {
    this.state =
      typeof nextState === "function"
        ? nextState(this.state)
        : { ...this.state, ...nextState };

    this.listeners.forEach((listener) =>
      listener(this.state)
    );
  },

  subscribe(listener: ToastListener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(
        (l) => l !== listener
      );
    };
  },
};

/* ===================== TOAST FUNCTION ===================== */

type ToastInput = Omit<ToastProps, "id" | "dismiss">;

export const toast = (props: ToastInput) => {
  const id = generateId();

  const update = (updatedProps: Partial<ToastProps>) =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === id ? { ...t, ...updatedProps } : t
      ),
    }));

  const dismiss = () =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));

  toastStore.setState((state) => ({
    ...state,
    toasts: [
      { ...props, id, dismiss },
      ...state.toasts,
    ].slice(0, TOAST_LIMIT),
  }));

  return {
    id,
    dismiss,
    update,
  };
};

/* ===================== HOOK ===================== */

export function useToast() {
  const [state, setState] = useState<ToastState>(
    toastStore.getState()
  );

  useEffect(() => {
    const unsubscribe = toastStore.subscribe(setState);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: number[] = [];

    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) return;

      const timeout = window.setTimeout(() => {
        toast.dismiss();
      }, toast.duration ?? 5000);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
// end
