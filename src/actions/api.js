import axios from 'axios';

const URL = 'https://api.covid19api.com';

//url apis 
const dataCountryByDate = async ({ country, dateInitial, dateFinal }) => {
    return await axios.get(`${URL}/total/country/${country}?from=${dateInitial}&to=${dateFinal}`);
}

const summaryGlobal = async() => {
    return await axios.get(`${URL}/summary`,
    {
        headers:{"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}
    });
}





export {
    dataCountryByDate,
    summaryGlobal
}