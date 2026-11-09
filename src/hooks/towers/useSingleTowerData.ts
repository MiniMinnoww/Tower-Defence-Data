import {useGameData} from "../../data/DataProvider.tsx";
import type {TowerData} from "../../types/TowerTypes";


export const useSingleTowerData = (towerName: string): TowerData | undefined => {
  const data = useGameData();

  if (!data) return undefined;

  const allTowerData: TowerData[] = data["towers"] as unknown as TowerData[];

  for (const tower of allTowerData)
    if (tower.towerName === towerName)
      return tower;

  return undefined;
}