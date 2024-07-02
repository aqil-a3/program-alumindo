export interface LocationState{
    entity: "Alumindo";
    branch: "Pabrik 1" | "Pabrik 2" | "Pabrik 3" | "Pabrik 4";
    warehouse?: string;
    code: string;
    customer?: string | string[];
    description: string;
    type?: string;
    isConsignment?: boolean;
    isTransit?: boolean;
    isWIP?: boolean;
    category?: string;
    inventory?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    phone?: number;
    fax?: number;
    contactPerson?: string;
    contactPersonPhone?: number;
    isDefault?: boolean;
    isGIT?: boolean;
    isActive?: boolean;
    userCreate?: string;
    dateCreate?: Date;
    userUpdate?: string;
}