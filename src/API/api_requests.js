import d3all from 'd3';
import {instance,countriesUrl} from './config.js';

//Return total covid cases per param type request.
const getTotalCases = async (latest_data, case_type) => {

    return await instance.get(countriesUrl).then((res) => {
        let totalCases = d3all.sum(res.data.data, d => d[latest_data][case_type]);
        return totalCases;

    }).catch(err => {
        console.error('Err:', err);
    })
}

export default function apiUtils() {
    return {
        getTotalCases,
    };
}