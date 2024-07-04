import { NavigationFunctions } from "~/@types/Table";
import { addHandler } from "~/routes/pre-po-without-receipt/utils";

export const navigation: NavigationFunctions = {
  goDown(rows, config) {
    const {
      setIndexRow,
      indexRow,
      prefix,
      location,
      lotData,
      setLotData,
      indexCol,
    } = config;
    setIndexRow((prevIndex) => prevIndex + 1);
    const nextRowIndex = indexRow + 1;
    const nextRow = rows[nextRowIndex - 1] as HTMLTableRowElement;

    if (!nextRow) {
      addHandler(prefix, location, lotData, setLotData);
    }

    const tdCol = nextRow.children;
    const selectedCol = Array.from(tdCol).find((d) => {
      const inputIndexCol = Number(d.getAttribute("data-index-col"));
      return inputIndexCol === indexCol;
    }) as HTMLTableColElement | null;

    if (selectedCol) {
      const inputForm = selectedCol.firstChild as HTMLInputElement;
      inputForm.focus();
    } else {
      console.warn("Kolom tidak ada");
    }
  },
  goUp(rows, config) {
    const {
      setIndexRow,
      indexRow,
      prefix,
      location,
      lotData,
      setLotData,
      indexCol,
    } = config;

    // Adjust how indexRow is updated
    const newRowIndex = indexRow - 1;

    // Ensure indexRow stays within valid range
    if (newRowIndex < 0) {
      addHandler(prefix, location, lotData, setLotData);
      return;
    }

    // Update indexRow state
    setIndexRow(newRowIndex);

    // Access the previous row
    const prevRow = rows[newRowIndex] as HTMLTableRowElement;

    if (!prevRow) {
      addHandler(prefix, location, lotData, setLotData);
      return;
    }

    const tdCol = prevRow.children;
    const selectedCol = Array.from(tdCol).find((d) => {
      const inputIndexCol = Number(d.getAttribute("data-index-col"));
      return inputIndexCol === indexCol;
    }) as HTMLTableColElement | null;

    if (selectedCol) {
      const inputForm = selectedCol.firstChild as HTMLInputElement;
      inputForm.focus();
    } else {
      console.warn("Kolom tidak ada");
    }
  },
};
