import { TableCellProps } from "~/@types/PPWR";

const TableCell = ({ index, name, type, value }: TableCellProps) => {
    return (
      <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
        <input
          type={type}
          className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
          name={`${name}-${index}`}
          id={`${name}-${index}`}
          defaultValue={value}
        />
      </td>
    );
  };

  export default TableCell;