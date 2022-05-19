import { Divider, Skeleton, Typography } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const LoadComponent: React.FC = () => {
  return (
    <Typography
      component="div"
      variant={"h1"}
      style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
      <Divider variant="inset" component="div" />

      <Skeleton />
    </Typography>
  );
};

export default LoadComponent;
