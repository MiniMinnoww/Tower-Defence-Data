import type {ReactNode} from "react";

export const GenericTableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="table-container">
      {children}
    </div>
  )
}