import { Property, ChildProperty } from '@syncfusion/ej2-base';
import { SelectionMode, CellSelectionMode, SelectionType } from '@syncfusion/ej2-grids';

/**
 * Configures the selection behavior of the TreeGrid.
 */
export class SelectionSettings extends ChildProperty<SelectionSettings> {
    /**
     * TreeGrid supports row, cell, and both (row and cell) selection mode. 
     * @default Row
     * @aspDefaultValueIgnore
     * @isEnumeration true
     * @aspType Syncfusion.EJ2.Grids.SelectionMode
     */
    @Property('Row')
    public mode: SelectionMode;

    /**
     * The cell selection modes are flow and box. It requires the selection 
     * [`mode`](./api-selectionSettings.html#mode-selectionmode) to be either cell or both.
     * * `Flow`: Selects the range of cells between start index and end index that also includes the other cells of the selected rows.
     * * `Box`: Selects the range of cells within the start and end column indexes that includes in between cells of rows within the range.
     * @default Flow
     * @aspDefaultValueIgnore
     * @isEnumeration true
     * @aspType Syncfusion.EJ2.Grids.CellSelectionMode
     */
    @Property('Flow')
    public cellSelectionMode: CellSelectionMode;

    /**
     * Defines options for selection type. They are
     * * `Single`: Allows selection of only a row or a cell.
     * * `Multiple`: Allows selection of multiple rows or cells.
     * @default Single
     * @aspDefaultValueIgnore
     * @isEnumeration true
     * @aspType Syncfusion.EJ2.Grids.SelectionType
     */
    @Property('Single')
    public type: SelectionType;

    /**
     * If 'persistSelection' set to true, then the TreeGrid selection is persisted on all operations.
     * For persisting selection in the TreeGrid, any one of the column should be enabled as a primary key.
     * @default false
     */
    @Property(false)
    public persistSelection: boolean;
}