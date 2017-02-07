import {Injectable} from '@angular/core';

@Injectable()
export class Config{
    //Coherence
    coherenceMapApi = '../api/1.0/coherence';

    //Features
    featuresApi = '../api/1.0/features';

    //Instruments
    securityInstrument = '../instruments';
    allInstrumentsApi = '../api/1.0/instruments/all';
    //Markets
    marketsApi = '../api/1.0/markets';

    //Price
    priceStepsApi = '../api/1.0/pricesteps';
    pricesApi='../api/1.0/prices';
    priceStepsComparedApi = '../api/1.0/pricestepsCompared';
    tradesApi = '../api/1.0/direct/trades';

    //Kibana
    kibanaIframe = '/settings/kibanaIframe';

    //Enums
    exchangeEnumApi = '../api/1.0/enum/exchange';
    typesEnumApi = '../api/1.0/enum/instrumenttype';
    sessionStatesEnumApi = '../api/1.0/enum/sessionstate';

    //Order
    orderApi = '/order';
    buyDepthApi = '/order/depth/buy';
    sellDepthApi = '/order/depth/sell';
    detailedOrdersApi = '/api/1.0/direct/orders/detailed';

    //CrossReference
    crossReferenceApi = '/crossReference';
}