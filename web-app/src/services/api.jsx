import axios from 'axios';
//import https from 'https';

const instance = axios.create({
    baseURL: `https://localhost:44327/api`,
    timeout: 180000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
    },
    //   httpsAgent: new https.Agent({  
    //      rejectUnauthorized: false
    //   })
});

export default instance;