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
 * @interface ExternalFiatTransaction
 */
export interface ExternalFiatTransaction {
    /**
     * Provider transaction identifier.
     * @type {string}
     * @memberof ExternalFiatTransaction
     */
    requestId: string;
    /**
     * Transaction status.
     * @type {string}
     * @memberof ExternalFiatTransaction
     */
    status: ExternalFiatTransactionStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalFiatTransactionStatusEnum {
    PENDING = 'PENDING'
}

