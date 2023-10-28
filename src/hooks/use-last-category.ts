import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TStorageType = {
  lastCategory?: string;
  setLastCategory: (category?: string) => void;
};

const persistStorage = createJSONStorage<TStorageType>(() => localStorage);

const useStore = create(
  persist<TStorageType>(
    (set, get) => ({
      lastCategory: undefined,
      setLastCategory: (category?: string) =>
        set(() => ({
          lastCategory: category,
        })),
    }),
    {
      name: "last-category-storage",
      storage: persistStorage,
    }
  )
);

export const useLastCategory = () => {
  const [lastCategory, setLastCategory] = useStore((state) => [
    state.lastCategory,
    state.setLastCategory,
  ]);

  return {
    lastCategory,
    setLastCategory,
  };
};
