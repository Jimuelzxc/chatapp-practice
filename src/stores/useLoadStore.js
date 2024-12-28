import { create } from "zustand";

const useLoadStore = create((set) => ({
  loading: false,
  loadingToggle: () => set((state) => ({loading: !state.loading}))
}));
export default useLoadStore;
