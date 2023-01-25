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
 * @interface MarginPosition
 */
export interface MarginPosition {
    /**
     * Position identifier.
     * @type {number}
     * @memberof MarginPosition
     */
    id: number;
    /**
     * Symbol code.
     * @type {string}
     * @memberof MarginPosition
     */
    symbol: string;
    /**
     * Position quantity.
     * @type {string}
     * @memberof MarginPosition
     */
    quantity: string;
    /**
     * Average weighted price of position open orders.
     * @type {string}
     * @memberof MarginPosition
     */
    priceEntry: string;
    /**
     * The mark price of margin call.
     * @type {string}
     * @memberof MarginPosition
     */
    priceMarginCall: string;
    /**
     * The mark price of force close.
     * @type {string}
     * @memberof MarginPosition
     */
    priceLiquidation: string;
    /**
     * Unrealized profit and loss.
     * @type {string}
     * @memberof MarginPosition
     */
    pnl: string;
    /**
     * Position creation date and time.
     * @type {Date}
     * @memberof MarginPosition
     */
    createdAt: Date;
    /**
     * Position last update date and time.
     * @type {Date}
     * @memberof MarginPosition
     */
    updatedAt: Date;
}
