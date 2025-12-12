import { create } from "zustand";

export const useAppStore = create((set) => ({
  //auth slice
  user: "",
  login: () => set({ user: "Somnath" }),
  logout: () => set({ user: "" }),

  //ui slice
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
