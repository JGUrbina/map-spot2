import React from "react";
import { typeSpotOptions } from "../../utils/constantsSelect";
import { Select } from "./stylesSidebar";
import { useDispatch } from "react-redux";
import * as actions from "../../pages/home/_redux/mapActions";
import { AppDispatch } from "../../redux/store";

// import { Container } from './styles';

const SelectTypeSpot: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onChangeTypeSpot = ({ value }: any) => {
    dispatch(actions.changeTypeSpot({ typeSpot: value }));
  };
  return <Select options={typeSpotOptions} onChange={onChangeTypeSpot} />;
};

export default SelectTypeSpot;
