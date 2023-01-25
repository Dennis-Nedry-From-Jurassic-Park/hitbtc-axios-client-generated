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
 * @interface ModelNative
 */
export interface ModelNative {
    /**
     * Transaction bank identifier.
     * @type {string}
     * @memberof ModelNative
     */
    txId: string;
    /**
     * Last update sequence identifier.
     * @type {number}
     * @memberof ModelNative
     */
    index: number;
    /**
     * Currency code.
     * @type {string}
     * @memberof ModelNative
     */
    currency: string;
    /**
     * Amount of funds.
     * @type {string}
     * @memberof ModelNative
     */
    amount: string;
    /**
     * Payment commission value.
     * @type {string}
     * @memberof ModelNative
     */
    fee?: string;
    /**
     * Transaction blockchain hash.
     * @type {string}
     * @memberof ModelNative
     */
    hash?: string | null;
    /**
     * Address used by both blockchain and offchain payouts.
     * @type {string}
     * @memberof ModelNative
     */
    address?: string | null;
    /**
     * Payment identifier used by both blockchain and offchain payouts.
     * @type {string}
     * @memberof ModelNative
     */
    paymentId?: string | null;
    /**
     * Transaction identifier of an external system.
     * @type {string}
     * @memberof ModelNative
     */
    offchainId?: string | null;
    /**
     * Current count of confirmations for transaction.
     * @type {number}
     * @memberof ModelNative
     */
    confirmations?: number | null;
    /**
     * A text comment for the transaction.
     * @type {string}
     * @memberof ModelNative
     */
    publicComment?: string;
    /**
     * Error reason.
     * @type {string}
     * @memberof ModelNative
     */
    errorCode?: ModelNativeErrorCodeEnum;
    /**
     * A list of senders' blockchain addresses.
     * @type {Array<string>}
     * @memberof ModelNative
     */
    senders?: Array<string>;
}

/**
    * @export
    * @enum {string}
    */
export enum ModelNativeErrorCodeEnum {
    INVALIDADDRESS = 'INVALID_ADDRESS',
    INVALIDPAYMENTID = 'INVALID_PAYMENT_ID',
    BADPRECISION = 'BAD_PRECISION'
}
