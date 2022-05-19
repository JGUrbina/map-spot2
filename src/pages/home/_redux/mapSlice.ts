import { createSlice } from "@reduxjs/toolkit";
import { TypeSliceMap, TypeSpots } from '../../../utils/types';

export const callTypes = {
  list: "list",
  action: "action"
};

const initialState: TypeSliceMap = {

    spots: [],
    spotsFiltered: [],
    totalSpots: 0,
    oneSpot: null,
    range: 0,
    maxRange: 0,
    minRange: 0,
    typeSpot: null,
    term: null,
    polygonOptions: [],
    next: null,
    listLoading: false,
    actionsLoading: false,
  alert: false,
    error: null
  }

export const mapSlice = createSlice({
  name: 'map',
  initialState: initialState,
  reducers: {
    catchError: (state: TypeSliceMap, action: any) => {

      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state: TypeSliceMap, action: any) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;

      }
      else {

        state.actionsLoading = true;

      }
    },
    //Spots
    fetchSpots: (state: TypeSliceMap, action: any) => {
      const { payload: { data: { spots }, links: { next } } } = action;
      const spotsFilterd = spots.filter((spot: TypeSpots) => spot.is_public > 0);
      const spotsOrderd = spotsFilterd.sort((a: TypeSpots, b: TypeSpots) => Number(b.square_space) - Number(a.square_space));

      state.spots = spotsOrderd;
      state.totalSpots = spots.length;
      state.spotsFiltered = spotsOrderd;
      state.next = next;
      state.maxRange = Number(spotsOrderd[0]?.square_space);
      state.minRange = Number(spotsOrderd[spotsOrderd.length - 1]?.square_space);
      state.range = Number(spotsOrderd[spotsOrderd.length - 1]?.square_space);
      state.listLoading = false;
      state.alert = true;
    },
    //Next Page
    fetchNextPage: (state: TypeSliceMap, action: any) => {
      const { payload: { data: { spots }, links: { next } } } = action;

      const spotsFilterd = spots.filter((spot: TypeSpots) => spot.is_public > 0);
      const spotsOrderd = spotsFilterd.sort((a: TypeSpots, b: TypeSpots) => Number(b.square_space) - Number(a.square_space));

      const maxRange = Number(spotsOrderd[0]?.square_space);
      const minRange = Number(spotsOrderd[spotsOrderd.length - 1]?.square_space);
      const newSpots = [...state.spots, ...spotsOrderd];
      state.spots = newSpots;
      state.spotsFiltered = newSpots;
      state.totalSpots = newSpots.length;
      state.next = next;
      state.maxRange = maxRange > state.maxRange ? maxRange : state.maxRange;
      state.minRange = minRange < state.minRange ? minRange : state.minRange;
      state.range = state.minRange;
      state.listLoading = false;
      state.alert = true;
    },

    // One Spot
    fetchOneSpot: (state: TypeSliceMap, action: any) => {
      const { payload: { data } } = action;
      state.oneSpot = data;
      state.listLoading = false;
    },


    //Type Spot
    changeTypeSpot: (state: TypeSliceMap, action: any) => {
      const { payload: { typeSpot } } = action;
      state.typeSpot = typeSpot;
    },
    // Term
    changeTerm: (state: TypeSliceMap, action: any) => {
      const { payload: { term } } = action;
      state.term = term;
    },
    // Range
    changeRange: (state: TypeSliceMap, action: any) => {
      const { payload: { range } } = action;
      state.range = range;
    },
    // Filter
    filterSpots: (state: TypeSliceMap, action: any) => {
      const { payload: { filterSpots } } = action;
      state.spotsFiltered = filterSpots;
      state.alert = true;
    },
    clearTypeSpotAndTerm: (state: TypeSliceMap)  => {
      state.typeSpot = null;
      state.typeSpot = null;
      state.alert = false;
    },
    closeAlert: (state: TypeSliceMap) => {
      state.alert = false;
    }
  }
})
export const mapReducer = mapSlice.reducer


