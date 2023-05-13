"use client";
import useBearStore from "@/stroe/bears.store";
import useDogStore from "@/stroe/dogs.store";
import { useEffect, useState } from "react";

export default function Home() {
  const { bears, increasePopulation, removeAllBears, fishes, addFishes } =
    useBearStore();
  const { dogs, addADog, setDog, removeADog } = useDogStore();
  const [countFish, setCountFish] = useState(0);

  useEffect(() => {
    const dog = localStorage.getItem("dogs");
    if (dog) {
      setDog(+dog);
    }
  }, []);
  return (
    <div className="p-4 flex flex-col gap-4 divide-y">
      {/* Bear */}
      <div>
        <div>Example 1 bears</div>
        <div className="text-xl">Bear : {bears}</div>
        <div className="flex gap-2">
          <button
            onClick={increasePopulation}
            className="bg-gray-200 p-1 rounded"
          >
            Add
          </button>
          <button onClick={removeAllBears} className="bg-gray-200 p-1 rounded">
            Remove
          </button>
        </div>
      </div>

      {/* Fish */}
      <div>
        <div>Example 2 fish</div>
        <div className="text-xl">Fish : {fishes}</div>
        <div className="flex gap-2">
          <input
            type="number"
            onChange={(e) => setCountFish(+e.target.value)}
            className="border"
          />
          <button
            onClick={() => addFishes(countFish)}
            className="bg-gray-200 p-1 rounded"
          >
            Add Fish
          </button>
        </div>
      </div>

      {/* Local storage */}
      <div>
        <div>Example 2 fish</div>
        <div className="text-xl">Dog : {dogs}</div>
        <div className="flex gap-2">
          <button onClick={addADog} className="bg-gray-200 p-1 rounded">
            Add
          </button>
          <button onClick={removeADog} className="bg-gray-200 p-1 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
