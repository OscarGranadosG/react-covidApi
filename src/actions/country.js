
import axios from 'axios';

export const DataCountry = async (country) => {

    console.log(country);

    const url = `https://api.covid19api.com/total/country/${country}`;

    try {
        const response = await axios.get(url);
        return response;   
    } catch (error) {
        console.log("error desde country.js")
        return ("Error desde country");
    }


  
}