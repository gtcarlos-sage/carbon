import * as React from "react";

export interface FlatTableBodyProps {
  /** Array of FlatTableRow. */
  children: React.ReactNode;
}

declare function FlatTableBody(props: FlatTableBodyProps): JSX.Element;

export default FlatTableBody;
