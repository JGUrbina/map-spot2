import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "./stylesSidebar";
import * as actions from "../../pages/home/_redux/mapActions";
import { AppDispatch, RootState } from "../../redux/store";

const Range: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { minRange, maxRange } = useSelector((state: RootState) => state.map);

  const onChangeRange = (e: any) => {
    dispatch(actions.changeRange({ range: e.target.value }));
  };

  return (
    <Slider
      defaultValue={0}
      aria-label="Default"
      valueLabelDisplay="auto"
      max={maxRange}
      min={minRange}
      onChange={onChangeRange}
      size="small"
    />
  );
};

export default memo(Range);
