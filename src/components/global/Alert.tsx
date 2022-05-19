import { Collapse, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { AlertOne } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import * as actions from "../../pages/home/_redux/mapActions";

const Alert: React.FC = () => {
  const { alert, spotsFiltered } = useSelector((state: RootState) => state.map);

  const dispatch = useDispatch<AppDispatch>();
  const closedAlert = () => {
    dispatch(actions.closeAlert());
  };
  return (
    <Collapse in={alert}>
      <AlertOne
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closedAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {spotsFiltered.length} Desarrollos inmobiliarios en cuidad de México
      </AlertOne>
    </Collapse>
  );
};

export default Alert;
