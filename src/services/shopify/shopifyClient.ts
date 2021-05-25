import fetch from 'node-fetch';
import Client from 'shopify-buy';

const client = Client.buildClient({
	storefrontAccessToken: 'd211a9fd07388f92a174e8638c7043ae',
    domain: 'delyhatest.myshopify.com',
    apiVersion: '2021-04'
}, fetch);

export default client;
