import styled from 'styled-components';
import alert from '@mui/material/Alert';


export const ContainerWidth = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
  min-width: 360px;
  background-color: #DCB575;
`;

export const Header = styled.header`
  min-width: 360px;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: 75px;
  margin: 0 auto;
  padding: 0 10px;
`;


export const AlertOne = styled(alert)`
    width: 100%;
    font-size: 0.8rem!important;
    min-width: 360px;
    max-width: 360px;
    left: 50%;
    margin-left: -195px;
    padding: 0 16px;
    background-color: #FFFFFF;
    z-index: 2;
    border-radius: 10px;
    position: absolute;
    top: 50px;
    text-align: center;

    @media(min-width: 800px) {
      top: 10px;
    }
`;
