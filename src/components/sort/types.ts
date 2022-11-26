import { SortPropertyEnum } from "store/filter/types";

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};
