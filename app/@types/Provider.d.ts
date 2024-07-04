export interface DLN_ContextState {
    prefix: string;
    setPrefix: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    lotData: DetailLotProps[];
    setLotData: React.Dispatch<React.SetStateAction<DetailLotProps[]>>;
    isDeleteMode: boolean;
    setIsDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
    indexRow: number;
    setIndexRow: React.Dispatch<React.SetStateAction<number>>;
    indexCol: number;
    setIndexCol: React.Dispatch<React.SetStateAction<number>>;
  }