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
import { TransactionFeeFees } from './transaction-fee-fees';
/**
 * 
 * @export
 * @interface TransactionFee
 */
export interface TransactionFee {
    /**
     * Source currency code.
     * @type {string}
     * @memberof TransactionFee
     */
    sourceCode: string;
    /**
     * Target currency code.
     * @type {string}
     * @memberof TransactionFee
     */
    targetCode: string;
    /**
     * 
     * @type {Array<TransactionFeeFees>}
     * @memberof TransactionFee
     */
    fees: Array<TransactionFeeFees>;
}