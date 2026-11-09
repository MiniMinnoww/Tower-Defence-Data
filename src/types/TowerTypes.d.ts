export interface TowerUpgradeTreeNode {
  id: number;
  nodeName: string;
  description: string;
  cost: number;
  // TODO fill in
  upgrades: TowerUpgradeEffect[];
  children: TowerUpgradeTreeNode[];
}

export interface TowerData {
  towerName: string;
  towerDescription: string;
  cost: number;
  baseSize: {x: number, y: number};
  baseRange: number;
  upgradeTree: {root: TowerUpgradeTreeNode}
}

export interface TowerUpgradeEffect {
  type: string;
  data: Record<string, unknown>;
}