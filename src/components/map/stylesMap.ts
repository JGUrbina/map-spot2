import styled from 'styled-components';
import { Fab as fab } from "@mui/material";
import addIcon from "@mui/icons-material/Add";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

export const Fab = styled(fab)`
  position: absolute!important;
  bottom: 100px;
  right: 100px;
`;

export const AddIcon = styled(addIcon)`

`;
