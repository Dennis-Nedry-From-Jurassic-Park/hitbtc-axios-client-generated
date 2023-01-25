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
 * @interface SpotBalance
 */
export interface SpotBalance {
    /**
     * Currency code.
     * @type {string}
     * @memberof SpotBalance
     */
    currency?: string;
    /**
     * Amount available for trading or transfer to wallet.
     * @type {string}
     * @memberof SpotBalance
     */
    available: string;
    /**
     * Total amount reserved for active orders and incomplete transfers to wallet.
     * @type {string}
     * @memberof SpotBalance
     */
    reserved: string;
}
