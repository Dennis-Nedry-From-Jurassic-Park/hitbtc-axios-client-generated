/* tslint:disable */
/* eslint-disable */
/**
 * API
 * Create API keys in your profile and use public API key as username and secret API key as password to authorize.
 *
 * 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface SpotTradeHistory
 */
export interface SpotTradeHistory {
    /**
     * Trade unique identifier as assigned by the exchange.
     * @type {number}
     * @memberof SpotTradeHistory
     */
    id: number;
    /**
     * Unique order identifier as assigned by the exchange.
     * @type {number}
     * @memberof SpotTradeHistory
     */
    orderId: number;
    /**
     * Unique order identifier as assigned by a trader.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    clientOrderId?: string;
    /**
     * Symbol code.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    symbol: string;
    /**
     * Trade side.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    side: SpotTradeHistorySideEnum;
    /**
     * Trade quantity.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    quantity: string;
    /**
     * Trade price.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    price: string;
    /**
     * Trade commission. Can be negative (\"rebate\" — reward paid to a trader).
     * @type {string}
     * @memberof SpotTradeHistory
     */
    fee: string;
    /**
     * Trade timestamp.
     * @type {string}
     * @memberof SpotTradeHistory
     */
    timestamp: string;
    /**
     * Liquidity indicator.
     * @type {boolean}
     * @memberof SpotTradeHistory
     */
    taker: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum SpotTradeHistorySideEnum {
    Sell = 'sell',
    Buy = 'buy'
}

