import styled from 'styled-components';
import slider from "@mui/material/Slider";
import select from "react-select";
import button from '@mui/material/Button';


export const ContainerTop = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  @media(min-width: 760px) {
      justify-content: space-between;
      flex-direction: row;
      padding-bottom: 0;
  }
`;

export const Slider = styled(slider)`
  width: 100%;
  max-width: 200px;

`;

export const Select = styled(select)`
  width: 100%;
  max-width: 200px;
  margin: 5px;
`;

export const Button = styled(button)``;
//Container Left



export const ContainerLeft = styled.div``;
