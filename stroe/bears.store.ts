import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BearState {
  bears: number;
  fishes: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  addFishes: (count: number) => void;
}

const useBearStore = create<BearState>()(
  devtools(
    (set, get) => ({
      bears: 0,
      fishes: 0,
      increasePopulation: () =>
        set(
          (state) => ({ bears: state.bears + 1 }),
          // below is optional
          false,
          "bears/increasePopulation"
        ),
      removeAllBears: () => set({ bears: 0 }),
      addFishes: (count) =>
        set(
          (prev) => ({ fishes: prev.fishes + count }),
          // below is optional
          false,
          {
            type: "bear/addFishes", // action type (optional)
            count, // custom payload (optional)
          }
        ),
    }),
    // optional
    { name: "BearStore" }
  )
);

export default useBearStore;
