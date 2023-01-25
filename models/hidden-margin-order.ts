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
import { MarginOrder } from './margin-order';
import { MarginOrderTrades } from './margin-order-trades';
/**
 * 
 * @export
 * @interface HiddenMarginOrder
 */
export interface HiddenMarginOrder extends MarginOrder {
    /**
     * The visible part of the hidden order quantity. The only valid value is '0'.
     * @type {string}
     * @memberof HiddenMarginOrder
     */
    displayQuantity?: string;
}

