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
 * @interface TransferRequest
 */
export interface TransferRequest {
    /**
     * Currency code.
     * @type {string}
     * @memberof TransferRequest
     */
    currency: string;
    /**
     * The amount that will be transferred between accounts.
     * @type {string}
     * @memberof TransferRequest
     */
    amount: string;
    /**
     * Transfer source account type. Mutually exclusive with `destination`.
     * @type {string}
     * @memberof TransferRequest
     */
    source: TransferRequestSourceEnum;
    /**
     * Transfer destination accounts type. Mutually exclusive with `source`.
     * @type {string}
     * @memberof TransferRequest
     */
    destination: TransferRequestDestinationEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TransferRequestSourceEnum {
    Wallet = 'wallet',
    Spot = 'spot',
    Derivatives = 'derivatives'
}
/**
    * @export
    * @enum {string}
    */
export enum TransferRequestDestinationEnum {
    Wallet = 'wallet',
    Spot = 'spot',
    Derivatives = 'derivatives'
}
