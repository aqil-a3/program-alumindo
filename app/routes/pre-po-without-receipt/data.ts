import { DetailTableProps } from "~/@types/PPWR";

export const lotNumber: string[] = [
  "L/S (e)",
  "Qty (e)",
  "Expire Date (e)",
  "Location (...)"
]

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

export const defaultHeaderData: DetailTableProps = {
  account: "",
  accountCode: "",
  description: "",
  location: "",
  ls: "",
  pack: "",
  partNumber: "",
  qty: "0",
  qtyPack: "0",
  qtyReal: "0",
  remarks: "",
  spectrogram: "",
  um: "",
  umConv: "1",
  weighing: "",
};