import axios from "axios";
import { AppSettings } from '../../../utils/app.settings';

const { apiUrl } = AppSettings;
const fields = 'fields=is_public,spot_type_id,term,latitude,longitude,square_space';

type TypeNextPage = {
  nextPage: string
}
type FetchSpot = {
  id: number;
}

export const  fetchSpots = () => {
  return axios.get(`${apiUrl}?${fields}`);
}

export const  fetchNextPage = ({nextPage}: TypeNextPage) => {
  return axios.get(`${nextPage}&${fields}`);
}

export const fetchOneSpot = ({ id }: FetchSpot) => {
  return axios.get(`${apiUrl}/${id}`);
}
