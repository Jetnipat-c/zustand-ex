import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface DogState {
  dogs: number;
  setDog: (dog: number) => void;
  addADog: () => void;
  removeADog: () => void;
}

const useDogStore = create<DogState>()(
  devtools((set, get) => ({
    dogs: 0,
    setDog: (dog) => set({ dogs: dog }),
    addADog: () => {
      set((state) => ({ dogs: state.dogs + 1 }));
      localStorage.setItem("dogs", get().dogs.toString());
    },
    removeADog: () => {
      set((state) => ({ dogs: 0 }));
      localStorage.setItem("dogs", get().dogs.toString());
    },
  }))
);

export default useDogStore;
