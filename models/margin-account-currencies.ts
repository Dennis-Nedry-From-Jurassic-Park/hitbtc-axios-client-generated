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
 * @interface MarginAccountCurrencies
 */
export interface MarginAccountCurrencies {
    /**
     * Currency code.
     * @type {string}
     * @memberof MarginAccountCurrencies
     */
    code: string;
    /**
     * The total value of funds reserved for the position.
     * @type {string}
     * @memberof MarginAccountCurrencies
     */
    marginBalance: string;
    /**
     * The value reserved for active orders in the position.
     * @type {string}
     * @memberof MarginAccountCurrencies
     */
    reservedOrders: string;
    /**
     * The minimum value reserved for position's executed quantity that cannot be reduced.
     * @type {string}
     * @memberof MarginAccountCurrencies
     */
    reservedPositions: string;
}
