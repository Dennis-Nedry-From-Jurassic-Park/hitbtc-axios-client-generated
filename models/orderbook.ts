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
 * @interface Orderbook
 */
export interface Orderbook {
    /**
     * Publication timestamp.
     * @type {string}
     * @memberof Orderbook
     */
    timestamp: string;
    /**
     * Ask side array of levels.
     * @type {Array<Array<string>>}
     * @memberof Orderbook
     */
    ask: Array<Array<string>>;
    /**
     * Bid side array of levels.
     * @type {Array<Array<string>>}
     * @memberof Orderbook
     */
    bid: Array<Array<string>>;
}
