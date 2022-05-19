import { mapSlice, callTypes } from "./mapSlice";
import * as requestFromServer from "./mapCrud";


const { actions } = mapSlice;


export const fetchSpots = () => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .fetchSpots()
    .then((response: any) => {
      const { data } = response;
      dispatch(actions.fetchSpots(data));
    })
    .catch((error: any) => {
      error.clientMessage = "Can't find Billings";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchNextPage = (queryParms: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .fetchNextPage(queryParms)
    .then((response: any) => {
      const { data } = response;

      dispatch(actions.fetchNextPage(data));
    })
    .catch((error: any) => {

      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchOneSpot = (queryParms: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .fetchOneSpot(queryParms)
    .then((response: any) => {
      const { data } = response;

      dispatch(actions.fetchOneSpot(data));
    })
    .catch((error: any) => {
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};



export const changeTypeSpot = (queryParams: any) => (dispatch: any) => {
    dispatch(actions.changeTypeSpot(queryParams));
};

 export const changeTerm = (queryParams: any) => (dispatch: any) => {
    dispatch(actions.changeTerm(queryParams));
};

export const changeRange = (queryParams: any) => (dispatch: any) => {
    dispatch(actions.changeRange(queryParams));
};

export const filterSpots = (queryParams: any) => (dispatch: any) => {

    dispatch(actions.filterSpots(queryParams));
};


export const clearTypeSpotAndTerm = () => (dispatch: any) => {
  dispatch(actions.clearTypeSpotAndTerm());
}

export const closeAlert = () => (dispatch: any) => {
  dispatch(actions.closeAlert());
}


