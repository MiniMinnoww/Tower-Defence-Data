
import {
  tableFeatures,
  useTable
} from "@tanstack/react-table";
import type {ColumnDef} from "@tanstack/react-table";
import type {TowerData} from "../types/TowerTypes";
import {useAllTowersData} from "../hooks/towers/useAllTowersData.ts";
import {GenericTableContainer} from "./GenericTableContainer.tsx";


const features = tableFeatures({});

export const TowerTable = () => {
  const towers = useAllTowersData();

  const columns: ColumnDef<typeof features, TowerData>[] = [
    {
      accessorKey: "towerName",
      header: "Tower Name"
    },
    {
      accessorKey: "towerDescription",
      header: "Description"
    },
    {
      accessorKey: "cost",
      header: "Cost"
    },
    {
      id: "baseSize",
      accessorFn: (tower) => `${tower.baseSize.x} × ${tower.baseSize.y}`,
      header: "Base Size"
    },
    {
      accessorKey: "baseRange",
      header: "Range"
    }
  ];

  const table = useTable({
    features,
    data: towers ?? [],
    columns
  });

  if (!towers) return (<>No towers found</>);

  return (
    <GenericTableContainer>
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  table.FlexRender({header: header})
                )}
              </th>
            ))}
          </tr>
        ))}
        </thead>

        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getAllCells().map(cell => (
              <td key={cell.id}>
                {table.FlexRender({cell: cell})}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </GenericTableContainer>
  );
};
