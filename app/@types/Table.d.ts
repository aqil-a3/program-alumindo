import { DLN_ContextState } from "./Provider";

export interface NavigationFunctions {
  goDown: (
    rows: NodeListOf<HTMLTableRowElement>,
    config: DLN_ContextState
  ) => void;
  goUp: (
    rows: NodeListOf<HTMLTableRowElement>,
    config: DLN_ContextState
  ) => void;
}
