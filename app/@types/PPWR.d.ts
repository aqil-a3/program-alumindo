export interface TableCellProps {
    type: "text" | "number";
    name: keyof DetailTableProps;
    index: number;
    value: string;
  }

  export interface DetailTableProps {
    spectrogram: string;
    weighing: string;
    partNumber: string;
    description: string;
    ls: string;
    qty: string;
    um: string;
    umConv: string;
    qtyReal: string;
    qtyPack: string;
    pack: string;
    location: string;
    accountCode: string;
    account: string;
    remarks: string;
  }
  
  export interface DetailLotProps{
    ls:string;
    qty: number;
    expireDate: string;
    location: string;
  }