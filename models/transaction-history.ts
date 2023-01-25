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
import { AirdropTransactionSubtypes } from './airdrop-transaction-subtypes';
import { FuturesTransactionSubtypes } from './futures-transaction-subtypes';
import { Meta } from './meta';
import { ModelNative } from './model-native';
import { SubaccountsTransactionSubtypes } from './subaccounts-transaction-subtypes';
import { TransactionSubtypes } from './transaction-subtypes';
import { TransactionTypes } from './transaction-types';
/**
 * 
 * @export
 * @interface TransactionHistory
 */
export interface TransactionHistory {
    /**
     * Transaction identifier.
     * @type {number}
     * @memberof TransactionHistory
     */
    id: number;
    /**
     * Date and time of the transaction creation.
     * @type {Date}
     * @memberof TransactionHistory
     */
    createdAt: Date;
    /**
     * Date and time of the last transaction update.
     * @type {Date}
     * @memberof TransactionHistory
     */
    updatedAt: Date;
    /**
     * Transaction status:   * *CREATED* — the transaction has been created and needs to be approved. It remains in this status until manually validated or moved to a blockchain.   * *PENDING* — the transaction has been created and is queued until the fees are paid and it can be processed further. Blockchain confirmations have not yet been gathered.   * *FAILED* — the transaction could not be committed.   * *SUCCESS* — the transaction has been approved and fully processed.   * *ROLLED_BACK* — the transaction has been canceled. 
     * @type {string}
     * @memberof TransactionHistory
     */
    status: TransactionHistoryStatusEnum;
    /**
     * Transaction type.
     * @type {TransactionTypes}
     * @memberof TransactionHistory
     */
    type: TransactionTypes;
    /**
     * Transaction subtype.
     * @type {FuturesTransactionSubtypes & TransactionSubtypes & AirdropTransactionSubtypes & SubaccountsTransactionSubtypes}
     * @memberof TransactionHistory
     */
    subtype?: FuturesTransactionSubtypes & TransactionSubtypes & AirdropTransactionSubtypes & SubaccountsTransactionSubtypes;
    /**
     * 
     * @type {ModelNative}
     * @memberof TransactionHistory
     */
    _native?: ModelNative;
    /**
     * 
     * @type {Meta}
     * @memberof TransactionHistory
     */
    meta?: Meta;
}

/**
    * @export
    * @enum {string}
    */
export enum TransactionHistoryStatusEnum {
    CREATED = 'CREATED',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
    SUCCESS = 'SUCCESS',
    ROLLEDBACK = 'ROLLED_BACK'
}

