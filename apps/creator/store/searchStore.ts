import { create } from "zustand";

interface ScriptStore {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the store with types
const scriptStore = create<ScriptStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default scriptStore;
