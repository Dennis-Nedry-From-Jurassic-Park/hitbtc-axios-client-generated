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
 * @interface IsolatedSymbolBody2
 */
export interface IsolatedSymbolBody2 {
    /**
     * Amount of currency. \"0\" to close the futures margin account.
     * @type {string}
     * @memberof IsolatedSymbolBody2
     */
    marginBalance: string;
    /**
     * User leverage. Integer in the range from 1 to 1000. Required if the balance of the isolated margin account is equal to zero.
     * @type {string}
     * @memberof IsolatedSymbolBody2
     */
    leverage?: string;
    /**
     * Price and quantity will be checked for incrementation within the symbol's tick size and quantity step. See the symbol's `tick_size` and `quantity_increment`. 
     * @type {boolean}
     * @memberof IsolatedSymbolBody2
     */
    strictValidate?: boolean;
}
