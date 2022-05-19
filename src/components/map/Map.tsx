import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  //Polygon,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../global/Alert";
import { Container } from "./stylesMap";
import { AppSettings } from "../../utils/app.settings";
import { RootState } from "../../redux/store";
import { TypeSpots } from "../../utils/types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 19.4978,
  lng: -99.1269,
};

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${AppSettings.apiGoogle}`,
  });

  const { spotsFiltered } = useSelector((state: RootState) => state.map);

  const navigate = useNavigate();
  const handleDetails = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <Container>
      <Alert />

      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
          {/* Child components, such as markers, info windows, etc. */}
          {spotsFiltered?.map((spot: TypeSpots, index) => {
            return (
              <Marker
                key={`${spot.id}`}
                onClick={() => handleDetails(spot.id)}
                //label={`${index}`}
                position={{
                  lat: spot.latitude,
                  lng: spot.longitude,
                }}
              ></Marker>
            );
          })}
          {/* {polygonOptions.length > 0 && (
            <Polygon paths={polygonOptions} options={options} />
          )} */}
        </GoogleMap>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Map;
