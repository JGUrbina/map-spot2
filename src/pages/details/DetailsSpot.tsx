import { IconButton } from "@mui/material";
import React, { useEffect } from "react";

// import { Container } from './styles';
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ContainerHeader, Header } from "../../components/global/styles";
import DetailsList from "../../components/details/DetailsList";
import * as actions from "../home/_redux/mapActions";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

const DetailsSpot: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(actions.fetchOneSpot({ id }));
  });

  const handleBack = () => {
    navigate(`/`);
  };
  return (
    <>
      <ContainerHeader>
        <Header>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>
        </Header>
      </ContainerHeader>
      <DetailsList />
    </>
  );
};

export default DetailsSpot;
