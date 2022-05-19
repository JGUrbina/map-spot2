import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import * as actions from "../../pages/home/_redux/mapActions";

// import { Container } from './styles';
import { TypeSpots } from "../../utils/types";

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { typeSpot, term, spots, minRange, range } = useSelector(
    (state: RootState) => state.map
  );

  const onSearch = () => {
    let filterSpots = spots.filter(
      (spot: TypeSpots) =>
        typeSpot === spot.spot_type_id &&
        term === spot.term &&
        Number(spot.square_space) >= minRange &&
        Number(spot.square_space) <= range
    );

    dispatch(actions.filterSpots({ filterSpots }));
  };

  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onSearch}
      disabled={!typeSpot || !term}
    >
      Buscar
    </Button>
  );
};

export default Search;
