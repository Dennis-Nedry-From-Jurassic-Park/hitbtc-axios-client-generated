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
import { HiddenMarginOrder } from './hidden-margin-order';
import { MarginOrder } from './margin-order';
import { MarginOrderTrades } from './margin-order-trades';
/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 extends HiddenMarginOrder {
    /**
     * Unique order identifier as assigned by the exchange.
     * @type {number}
     * @memberof InlineResponse2004
     */
    id: number;
    /**
     * Unique order identifier as assigned by a trader. Uniqueness must be guaranteed within a single trading day, including all active orders.
     * @type {string}
     * @memberof InlineResponse2004
     */
    clientOrderId?: string;
    /**
     * Order list identifier. Returned only for an order list request.
     * @type {string}
     * @memberof InlineResponse2004
     */
    orderListId?: string;
    /**
     * Order list type. Returned only for an order list request.
     * @type {string}
     * @memberof InlineResponse2004
     */
    contingencyType?: InlineResponse2004ContingencyTypeEnum;
    /**
     * Symbol code.
     * @type {string}
     * @memberof InlineResponse2004
     */
    symbol: string;
    /**
     * Trade side.
     * @type {string}
     * @memberof InlineResponse2004
     */
    side: InlineResponse2004SideEnum;
    /**
     * Order state:   * *new* — an order is placed in the order book.   * *suspended* — a `stopLimit`, `stopMarket`, `takeProfitLimit` or `takeProfitMarket` order is parked until it meets the conditions for placement in the order book.   * *partiallyFilled* — an order is executed, but a part of its quantity is not filled yet.   * *filled* — order quantity filled completely.   * *canceled* — an order is canceled. It can either be done by a user through a cancel/replace request or by the system under specific circumstances.   * *expired* — an order is deactivated after it no longer satisfies Time in Force (IOC, FOK) or Post Only requirements.   * *rejected* — an order has been rejected. 
     * @type {string}
     * @memberof InlineResponse2004
     */
    status: InlineResponse2004StatusEnum;
    /**
     * Order type.
     * @type {string}
     * @memberof InlineResponse2004
     */
    type: InlineResponse2004TypeEnum;
    /**
     * Order expiration mode:   * *GTC* (\"Good-Till-Canceled\") — order will not be closed until it is filled.   * *IOC* (\"Immediate-Or-Cancel\") — order must be executed immediately. Any part of an IOC order that cannot be filled immediately will be canceled.   * *FOK* (\"Fill-Or-Kill\") — order must be executed immediately and completely or not executed at all.   * *Day* — keeps the order active until the end of the trading day (UTC).   * *GTD* (\"Good-Till-Date\") — order will be canceled on the specified date. 
     * @type {string}
     * @memberof InlineResponse2004
     */
    timeInForce?: InlineResponse2004TimeInForceEnum;
    /**
     * Order quantity.
     * @type {string}
     * @memberof InlineResponse2004
     */
    quantity: string;
    /**
     * Executed order quantity.
     * @type {string}
     * @memberof InlineResponse2004
     */
    quantityCumulative: string;
    /**
     * Order price.
     * @type {string}
     * @memberof InlineResponse2004
     */
    price: string;
    /**
     * The price level that triggers order activation. Specified if `type` is `stopLimit`, `stopMarket`, `takeProfitLimit`, or `takeProfitMarket`.
     * @type {string}
     * @memberof InlineResponse2004
     */
    stopPrice?: string;
    /**
     * Date of order expiration. Specified if `time_in_force` is `GTD`.
     * @type {string}
     * @memberof InlineResponse2004
     */
    expireTime?: string;
    /**
     * A post-only order is an order that does not remove liquidity. If the post-only order would cause a match with a pre-existing order as a taker, then order will be canceled. 
     * @type {boolean}
     * @memberof InlineResponse2004
     */
    postOnly: boolean;
    /**
     * Reduce-only order, being filled, guarantees not to put the position quantity to the point when the position flips.
     * @type {boolean}
     * @memberof InlineResponse2004
     */
    reduceOnly: boolean;
    /**
     * Date of order's creation.
     * @type {Date}
     * @memberof InlineResponse2004
     */
    createdAt: Date;
    /**
     * Date of order's last update.
     * @type {Date}
     * @memberof InlineResponse2004
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<MarginOrderTrades>}
     * @memberof InlineResponse2004
     */
    trades?: Array<MarginOrderTrades>;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2004ContingencyTypeEnum {
    OneCancelOther = 'oneCancelOther',
    OneTriggerOther = 'oneTriggerOther',
    OneTriggerOneCancelOther = 'oneTriggerOneCancelOther'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2004SideEnum {
    Sell = 'sell',
    Buy = 'buy'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2004StatusEnum {
    New = 'new',
    Suspended = 'suspended',
    PartiallyFilled = 'partiallyFilled',
    Filled = 'filled',
    Canceled = 'canceled',
    Expired = 'expired',
    Rejected = 'rejected'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2004TypeEnum {
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
export enum InlineResponse2004TimeInForceEnum {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
    Day = 'Day',
    GTD = 'GTD'
}

