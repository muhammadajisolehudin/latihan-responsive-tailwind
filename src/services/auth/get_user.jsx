import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { http3 } from "../../utils/http3";


export const reduxGetMe= async () => {
  // console.log(query)
  return await http3.get(API_ENDPOINTS.GET_ME);
  // const { data } = await http3.get(`${API_ENDPOINTS.GET_ME}?query=${query}`);
  
}




