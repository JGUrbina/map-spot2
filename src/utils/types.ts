import React from "react";
// Type to children TopSidebar
export type PropsChildren = {
  SelectTypeSpot: React.ReactNode;
  SelectTrm: React.ReactNode;
  Range: React.ReactNode;
  Search: React.ReactNode;
};

type TypeZipCode = {
  id: number;
  code: string;
  settlement: string;
  settlement_type: string;
  municipality: string;
  city: string;
  zone: string;
}

//Type One Spot
export type TypeSpotOne = {
  id: number;
  name: string;
  square_space: string;
  description: string;
  pdf_description: string | null;
  alias: string | null;
  endorsement: string | null;
  guarantee_deposit: string | number | null;
  rent_in_advance: string | number | null;
  grace_time: string | number | null;
  is_public: number;
  term: number;
  level: number;
  zip_code_id: number;
  latitude: number;
  longitude: number;
  zip_code: TypeZipCode;
  front: number;
  height: number;
  photos: Array<string>;
  status: boolean;
}

// Type Spots


export type TypeSpots = {
  id: number;
  is_public: number;
  spot_type_id: number;
  term: number;
  latitude: number;
  longitude: number;
  square_space: string;
  zip_code: TypeZipCode;
  created_at: string;
  updated_at: string;
}

export type TypeSliceMap = {
    spots: TypeSpots[],
    spotsFiltered: TypeSpots[],
    totalSpots: number,
    oneSpot: null | any,
    range: number,
    maxRange: number,
    minRange: number,
    typeSpot: null | number,
    term: null | number,
    polygonOptions: Array<any>,
    next: null | string,
    listLoading: boolean,
    actionsLoading: boolean,
    alert: boolean,
    error: string | null
}


// Type Selects

export type TypeSelect = {
  value: number;
  label: string;
}
