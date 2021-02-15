import { ICell } from "./ICell";

export interface IGrid {
    cells: ICell[][];
    cellSize: number;
    showBorder: boolean;
}