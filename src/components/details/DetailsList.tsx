import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LoadComponent from "./LoadComponent";
import { NoFount } from "./styles";

const DetailsList: React.FC = () => {
  const { oneSpot, error } = useSelector((state: RootState) => state.map);

  return (
    <>
      {!error ? (
        oneSpot ? (
          <List
            sx={{
              width: "100%",
              maxWidth: 1200,
              bgcolor: "#fff",
              margin: "auto",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Name"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.name}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Metros Cuadrados"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.square_space}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Descripción"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Estado"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.state?.name}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Estado"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.state?.name}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Municipio"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.zip_code?.municipality}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Ciudad"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.zip_code.city}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Zona"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.zip_code.zone}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Calle"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {oneSpot?.street}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ) : (
          <LoadComponent />
        )
      ) : (
        <NoFount>No sean encontrado spots</NoFount>
      )}
    </>
  );
};

export default DetailsList;
