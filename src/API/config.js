import axios from 'axios';

export const instance = axios.create({ baseURL: `https://corona-api.com` });
export const countriesUrl = `/countries`;