const { URL } = require('url');

const baseUrl = new URL('https://bank.gov.ua/NBU_Exchange/exchange_site');

const currency = 'usd';         
const date_from = '20220707';   
const date_to = '20220719'; 
const sort = 'exchangedate';
const order = 'desc';

baseUrl.searchParams.append('start', date_from);
baseUrl.searchParams.append('end', date_to);
baseUrl.searchParams.append('valcode', currency);
baseUrl.searchParams.append('sort', sort);
baseUrl.searchParams.append('order', order);

baseUrl.searchParams.append('json', '');

console.log(baseUrl.toString());