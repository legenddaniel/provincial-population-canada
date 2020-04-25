import { btnNational, btnProvincial, getProvinceJSONIndex, getJSONPopulation } from './utils.js';

export const imgPreloadConfig = ['img/bc.jpg', 'img/mn.jpg', 'img/nb.jpg', 'img/nl.jpg', 'img/ns.jpg', 'img/on.jpg', 'img/pe.jpg', 'img/qc.jpg', 'img/sk.jpg'];

export const provinceConfig = [{
    name: 'Alberta',
    cellRotateDeg: [0],
    jsonIndex: 9,
    img: 'img-ab'
}, {
    name: 'British Columbia',
    cellRotateDeg: [36, -324],
    jsonIndex: 10,
    img: 'img-bc'
}, {
    name: 'Manitoba',
    cellRotateDeg: [72, -288],
    jsonIndex: 12,
    img: 'img-mn'
}, {
    name: 'New Brunswick',
    cellRotateDeg: [108, -252],
    jsonIndex: 13,
    img: 'img-nb'
}, {
    name: 'Newfoundland And Labrador',
    cellRotateDeg: [144, -216],
    jsonIndex: 14,
    img: 'img-nl'
}, {
    name: 'Nova Scotia',
    cellRotateDeg: [180, -180],
    jsonIndex: 15,
    img: 'img-ns'
}, {
    name: 'Ontario',
    cellRotateDeg: [216, -144],
    jsonIndex: 16,
    img: 'img-on'
}, {
    name: 'Prince Edward Island',
    cellRotateDeg: [252, -108],
    jsonIndex: 17,
    img: 'img-pe'
}, {
    name: 'Quebec',
    cellRotateDeg: [288, -72],
    jsonIndex: 18,
    img: 'img-qc'
}, {
    name: 'Saskatchewan',
    cellRotateDeg: [324, -36],
    jsonIndex: 19,
    img: 'img-sk'
}];

export const pageArrowConfig = [{
    page: 1,
    arrowClicked: 'arrow-bot',
    arrowHandled: 'arrow-top',
    method: 'show'
}, {
    page: 2,
    arrowClicked: 'arrow-top',
    arrowHandled: 'arrow-top',
    method: 'hide'
}, {
    page: 3,
    arrowClicked: 'arrow-bot',
    arrowHandled: 'arrow-bot',
    method: 'hide'
}, {
    page: 4,
    arrowClicked: 'arrow-top',
    arrowHandled: 'arrow-bot',
    method: 'show'
}];

export const ajaxConfig = {
    'national': {
        method: 'GET',
        url: 'data.json',
        async: true,
        fn() {
            const population = getJSONPopulation(this.responseText, 'national');
            const result = population[11] || 'Select a date';
            btnNational.textContent = result;
        }
    },
    'provincial': {
        method: 'GET',
        url: 'data.json',
        async: true,
        fn() {
            const population = getJSONPopulation(this.responseText, 'provincial');
            const getResult = () => {
                const index = getProvinceJSONIndex();
                const populationData = population[index] || 'Select a date';
                return populationData;
            };
            const result = getResult();
            btnProvincial.textContent = result;
        }
    }
};