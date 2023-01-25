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
import { MarginAccountCurrencies } from './margin-account-currencies';
import { MarginPosition } from './margin-position';
/**
 * 
 * @export
 * @interface MarginAccount
 */
export interface MarginAccount {
    /**
     * Trading symbol, where base currency is the currency of funds reserved on the trading account for positions and quote currency is the currency of funds reserved on a margin account (e.g., \"BTCUSDT\").
     * @type {string}
     * @memberof MarginAccount
     */
    symbol: string;
    /**
     * Type of margin.
     * @type {string}
     * @memberof MarginAccount
     */
    type: MarginAccountTypeEnum;
    /**
     * Margin leverage. The ratio of the trader's own funds to funds borrowed from the platform.
     * @type {string}
     * @memberof MarginAccount
     */
    leverage: string;
    /**
     * Account creation date and time.
     * @type {Date}
     * @memberof MarginAccount
     */
    createdAt: Date;
    /**
     * Account last update date and time.
     * @type {Date}
     * @memberof MarginAccount
     */
    updatedAt: Date;
    /**
     * Amount of funds on margin account.
     * @type {Array<MarginAccountCurrencies>}
     * @memberof MarginAccount
     */
    currencies: Array<MarginAccountCurrencies>;
    /**
     * Open positions of the margin account.
     * @type {Array<MarginPosition>}
     * @memberof MarginAccount
     */
    positions?: Array<MarginPosition>;
}

/**
    * @export
    * @enum {string}
    */
export enum MarginAccountTypeEnum {
    Isolated = 'isolated'
}

