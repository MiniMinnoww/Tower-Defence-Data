import {useGameData} from "../../data/DataProvider.tsx";

export const useTowerNames = (): string[] => {
  const data = useGameData();

  if (!data) return [];

  const names = [];
  for (const tower of data["towers"])
    names.push(tower["towerName"] as string);

  return names;
}