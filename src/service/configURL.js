import axios from "axios";
import { userLocalService } from "./localSevice";
import { store_toolkit } from "./../index";
import { setLoadingOff, setLoadingOn } from "../redux_toolkit/spinnerSlice";

export const https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNSIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTc1MDQwMDAwMCIsIm5iZiI6MTY1NzczMTYwMCwiZXhwIjoxNjg1ODk4MDAwfQ.KXn1XtehbphvfW3OSUFlLIzSrEtSLDtDQG4BgF38Cus",
    Authorization: "bearer " + userLocalService.get()?.accessToken,
  },
});
// //khi goi api
// // Add a request interceptor
// https.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log("x");
//     // store_toolkit.dispatch(setLoadingOn());
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// //khi api tu sever ve
// // Add a response interceptor
// https.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log("y");
//     // store_toolkit.dispatch(setLoadingOff());
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// // Add a request interceptor
// https.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log("start");
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// https.interceptors.response.use(
//   function (response) {
//     console.log("end");
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
