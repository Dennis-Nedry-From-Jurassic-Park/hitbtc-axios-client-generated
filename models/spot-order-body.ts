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
import { HiddenSpotOrderRequest } from './hidden-spot-order-request';
import { SpotOrderRequest } from './spot-order-request';
/**
 * 
 * @export
 * @interface SpotOrderBody
 */
export interface SpotOrderBody extends HiddenSpotOrderRequest {
    /**
     * If omitted, an order will be created, and it will be generated by the server. Uniqueness must be guaranteed within a single trading day, including all active orders. If specified and corresponds to an existing order, a request will be rejected. 
     * @type {string}
     * @memberof SpotOrderBody
     */
    clientOrderId?: string;
    /**
     * Symbol code.
     * @type {string}
     * @memberof SpotOrderBody
     */
    symbol: string;
    /**
     * Trade side.
     * @type {string}
     * @memberof SpotOrderBody
     */
    side: SpotOrderBodySideEnum;
    /**
     * Order type.
     * @type {string}
     * @memberof SpotOrderBody
     */
    type?: SpotOrderBodyTypeEnum;
    /**
     * Order expiration mode:   * *GTC* (\"Good-Till-Canceled\") — an order will not be closed until it is filled.   * *IOC* (\"Immediate-Or-Cancel\") — an order must be executed immediately. Any part of an IOC order that cannot be filled immediately will be canceled.   * *FOK* (\"Fill-Or-Kill\") — an order must be executed immediately and completely or not executed at all.   * *Day* — keeps the order active until the end of the trading day (UTC).   * *GTD* (\"Good-Till-Date\") — an order will be canceled on the specified date. 
     * @type {string}
     * @memberof SpotOrderBody
     */
    timeInForce?: SpotOrderBodyTimeInForceEnum;
    /**
     * Order quantity.
     * @type {string}
     * @memberof SpotOrderBody
     */
    quantity: string;
    /**
     * Order price. Required if `type` is `limit`, `stopLimit`, or `takeProfitLimit`.
     * @type {string}
     * @memberof SpotOrderBody
     */
    price: string;
    /**
     * The price level that triggers order activation. Required if `type` is `stopLimit`, `stopMarket`, `takeProfitLimit`, or `takeProfitMarket`.
     * @type {string}
     * @memberof SpotOrderBody
     */
    stopPrice?: string;
    /**
     * Date of order expiration. Required if `time_in_force` is `GTD`.
     * @type {string}
     * @memberof SpotOrderBody
     */
    expireTime?: string;
    /**
     * Price and quantity will be checked for incrementation within the symbol's tick size and quantity step. See the symbol's `tick_size` and `quantity_increment`. 
     * @type {boolean}
     * @memberof SpotOrderBody
     */
    strictValidate?: boolean;
    /**
     * A post-only order is an order that does not remove liquidity. If the post-only order would cause a match with a pre-existing order as a taker, then order will be canceled. 
     * @type {boolean}
     * @memberof SpotOrderBody
     */
    postOnly?: boolean;
    /**
     * Optional liquidity taker fee, a fraction of order volume such as 0.001 (for 0.1% fee).
     * @type {string}
     * @memberof SpotOrderBody
     */
    takeRate?: string;
    /**
     * Optional liquidity provider fee, a fraction of order volume such as 0.001 (for 0.1% fee).
     * @type {string}
     * @memberof SpotOrderBody
     */
    makeRate?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SpotOrderBodySideEnum {
    Sell = 'sell',
    Buy = 'buy'
}
/**
    * @export
    * @enum {string}
    */
export enum SpotOrderBodyTypeEnum {
    Limit = 'limit',
    Market = 'market',
    StopLimit = 'stopLimit',
    StopMarket = 'stopMarket',
    TakeProfitLimit = 'takeProfitLimit',
    TakeProfitMarket = 'takeProfitMarket'
}
/**
    * @export
    * @enum {string}
    */
export enum SpotOrderBodyTimeInForceEnum {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
    Day = 'Day',
    GTD = 'GTD'
}
