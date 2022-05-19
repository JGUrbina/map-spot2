import { AppSettings } from "../utils/app.settings";

export default function setupAxios(axios: any, store: any) {
  axios.interceptors.request.use(
    (config: any) => {

        config.headers = {
          'Authorization': `Bearer ${AppSettings.apiSpot2}`,
          'Accept': 'application/json',
      }
      return config;
    },
    (err: any) =>{

            Promise.reject(err)
        }
  );
}
