import axios from 'axios'
import { userLocalService } from './localSevice';

export const https = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn',
    headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNSIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTc1MDQwMDAwMCIsIm5iZiI6MTY1NzczMTYwMCwiZXhwIjoxNjg1ODk4MDAwfQ.KXn1XtehbphvfW3OSUFlLIzSrEtSLDtDQG4BgF38Cus",
        Authorization: "bearer " + userLocalService.get()?.accessToken,

    }
});