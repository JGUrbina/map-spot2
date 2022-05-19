import React from "react";
import { useDispatch } from "react-redux";
import { Select } from "./stylesSidebar";
import * as actions from "../../pages/home/_redux/mapActions";
import { termOptions } from "../../utils/constantsSelect";
import { AppDispatch } from "../../redux/store";

// import { Container } from './styles';

const SelectTrm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onChangeTerm = ({ value }: any) => {
    dispatch(actions.changeTerm({ term: value }));
  };
  return <Select options={termOptions} onChange={onChangeTerm} />;
};

export default SelectTrm;
