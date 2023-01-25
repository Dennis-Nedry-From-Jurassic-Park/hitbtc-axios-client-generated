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
 * @interface WalletAddress
 */
export interface WalletAddress {
    /**
     * Currency code.
     * @type {string}
     * @memberof WalletAddress
     */
    currency?: string;
    /**
     * Address for deposits.
     * @type {string}
     * @memberof WalletAddress
     */
    address: string;
    /**
     * An additional identifier required for specific currencies (for example, \"Memo\").
     * @type {string}
     * @memberof WalletAddress
     */
    paymentId?: string;
    /**
     * An additional identifier required for specific currencies.
     * @type {string}
     * @memberof WalletAddress
     */
    publicKey?: string;
}