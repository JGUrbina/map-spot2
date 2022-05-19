import React, { useEffect } from "react";

import TopSidebar from "../../components/sidebar/TopSidebar";
import Map from "../../components/map/Map";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./_redux/mapActions";
import { AddIcon, Fab } from "../../components/map/stylesMap";
import { AppDispatch, RootState } from "../../redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { next } = useSelector((state: RootState) => state.map);

  useEffect(() => {
    dispatch(actions.fetchSpots());

    return () => {
      dispatch(actions.clearTypeSpotAndTerm());
    };
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(actions.fetchNextPage({ nextPage: next }));
  };

  return (
    <>
      <TopSidebar />
      <Map />
      <Fab
        color="primary"
        aria-label="add"
        disabled={!next}
        onClick={handleNextPage}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Home;
