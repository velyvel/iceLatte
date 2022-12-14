import axios from "axios";
import { useState } from "react";


    const ParkInfoApi = () => {

      const [park, setPark] = useState(null);
      
      const url = 'http://openAPI.seoul.go.kr:8088/4d514f786b79757337386270766a6d/json/SearchParkInfoService/1/5/';
      const response = axios.get(url);
      setPark(response.data);
      console.log(park);
      return(
        <div>
          {park}
        </div>
      );
    }

export default ParkInfoApi;