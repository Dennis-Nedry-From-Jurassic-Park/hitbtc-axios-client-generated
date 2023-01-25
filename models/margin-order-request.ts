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
import { SpotOrderRequest } from './spot-order-request';
/**
 * 
 * @export
 * @interface MarginOrderRequest
 */
export interface MarginOrderRequest extends SpotOrderRequest {
    /**
     * Reduce-only order, being filled, guarantees not to put the position quantity to the point when the position flips.
     * @type {boolean}
     * @memberof MarginOrderRequest
     */
    reduceOnly?: boolean;
}

