import {useGameData} from "../../data/DataProvider.tsx";
import type {TowerData} from "../../types/TowerTypes";


export const useAllTowersData = (): TowerData[] | undefined => {
  const data = useGameData();

  if (!data) return undefined;

  return data["towers"] as unknown as TowerData[];
}