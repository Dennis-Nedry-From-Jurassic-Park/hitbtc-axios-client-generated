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
 * @interface SpotOrderHistory
 */
export interface SpotOrderHistory {
    /**
     * Unique order identifier as assigned by the exchange.
     * @type {number}
     * @memberof SpotOrderHistory
     */
    id: number;
    /**
     * Unique order identifier as assigned by a trader. Uniqueness must be guaranteed within a single trading day, including all active orders.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    clientOrderId: string;
    /**
     * Symbol code.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    symbol: string;
    /**
     * Trade side.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    side: SpotOrderHistorySideEnum;
    /**
     * Order state:   * *new* — an order is placed in the order book.   * *suspended* — a `stopLimit`, `stopMarket`, `takeProfitLimit` or `takeProfitMarket` order is parked until it meets the conditions for placement in the order book.   * *partiallyFilled* — an order is executed, but a part of its quantity is not filled yet.   * *filled* — order quantity filled completely.   * *canceled* — an order is canceled. It can either be done by a user through a cancel/replace request or by the system under specific circumstances.   * *expired* — an order is deactivated after it no longer satisfies Time in Force (IOC, FOK) or Post Only requirements.   * *rejected* — an order has been rejected. 
     * @type {string}
     * @memberof SpotOrderHistory
     */
    status: SpotOrderHistoryStatusEnum;
    /**
     * Order type.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    type: SpotOrderHistoryTypeEnum;
    /**
     * Order expiration mode:   * *GTC* (\"Good-Till-Canceled\") — order will not be closed until it is filled.   * *IOC* (\"Immediate-Or-Cancel\") — order must be executed immediately. Any part of an IOC order that cannot be filled immediately will be canceled.   * *FOK* (\"Fill-Or-Kill\") — order must be executed immediately and completely or not executed at all.   * *Day* — keeps the order active until the end of the trading day (UTC).   * *GTD* (\"Good-Till-Date\") — order will be canceled on the specified date. 
     * @type {string}
     * @memberof SpotOrderHistory
     */
    timeInForce: SpotOrderHistoryTimeInForceEnum;
    /**
     * Order quantity.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    quantity: string;
    /**
     * Executed order quantity.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    quantityCumulative: string;
    /**
     * Order price.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    price: string;
    /**
     * The price level that triggers order activation. Specified if `type` is `stopLimit`, `stopMarket`, `takeProfitLimit`, or `takeProfitMarket`.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    stopPrice?: string;
    /**
     * Date of order expiration. Specified if `time_in_force` is `GTD`.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    expireTime?: string;
    /**
     * Date of order's creation.
     * @type {Date}
     * @memberof SpotOrderHistory
     */
    createdAt: Date;
    /**
     * Date of order's last update.
     * @type {Date}
     * @memberof SpotOrderHistory
     */
    updatedAt: Date;
    /**
     * Order list identifier. Returned only for an order list request.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    orderListId?: string;
    /**
     * Order list type. Returned only for an order list request.
     * @type {string}
     * @memberof SpotOrderHistory
     */
    contingencyType?: SpotOrderHistoryContingencyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SpotOrderHistorySideEnum {
    Sell = 'sell',
    Buy = 'buy'
}
/**
    * @export
    * @enum {string}
    */
export enum SpotOrderHistoryStatusEnum {
    New = 'new',
    Suspended = 'suspended',
    PartiallyFilled = 'partiallyFilled',
    Filled = 'filled',
    Canceled = 'canceled',
    Expired = 'expired'
}
/**
    * @export
    * @enum {string}
    */
export enum SpotOrderHistoryTypeEnum {
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
export enum SpotOrderHistoryTimeInForceEnum {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
    Day = 'Day',
    GTD = 'GTD'
}
/**
    * @export
    * @enum {string}
    */
export enum SpotOrderHistoryContingencyTypeEnum {
    AllOrNone = 'allOrNone',
    OneCancelOther = 'oneCancelOther',
    OneTriggerOther = 'oneTriggerOther',
    OneTriggerOneCancelOther = 'oneTriggerOneCancelOther'
}

