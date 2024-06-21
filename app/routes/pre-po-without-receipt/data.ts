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

export const detailTableHeaders: string[] = [
  "Spectrogram (...)",
  "Weighing (...)",
  "Part Number (...)",
  "Description",
  "L/S",
  "Qty (e)",
  "UM",
  "UM Conv (e)",
  "Qty Real",
  "Qty Pack (e)",
  "Pack (...)",
  "Location (...)",
  "Account Code (...)",
  "Account",
  "Remarks (e)",
];
