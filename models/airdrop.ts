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
 * @interface Airdrop
 */
export interface Airdrop {
    /**
     * Airdrop identifier.
     * @type {number}
     * @memberof Airdrop
     */
    id: number;
    /**
     * Date and time of the airdrop creation.
     * @type {Date}
     * @memberof Airdrop
     */
    createdAt: Date;
    /**
     * Date and time of the last airdrop update.
     * @type {Date}
     * @memberof Airdrop
     */
    updatedAt: Date;
    /**
     * Dropped currency code.
     * @type {string}
     * @memberof Airdrop
     */
    currency: string;
    /**
     * Base currency for dropped currency amount calculation.
     * @type {string}
     * @memberof Airdrop
     */
    baseCurrency: string;
    /**
     * Text description.
     * @type {string}
     * @memberof Airdrop
     */
    description: string;
    /**
     * The beginning of the period when the user can claim the airdrop.
     * @type {string}
     * @memberof Airdrop
     */
    startTime: string;
    /**
     * The end of the period when the user can claim the airdrop.
     * @type {string}
     * @memberof Airdrop
     */
    endTime: string;
    /**
     * Dropped currency amount.
     * @type {string}
     * @memberof Airdrop
     */
    amount: string;
    /**
     * Airdrop status:   * *available* – the user can claim an airdrop.   * *claimed* – an airdrop request is confirmed.   * *pending* – the user has claimed an airdrop. An airdrop request was sent.   * *committed* – an airdrop transaction was successfully committed. 
     * @type {string}
     * @memberof Airdrop
     */
    status: AirdropStatusEnum;
    /**
     * Airdrop transaction identifier.
     * @type {string}
     * @memberof Airdrop
     */
    transactionId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AirdropStatusEnum {
    Available = 'available',
    Claimed = 'claimed',
    Pending = 'pending',
    Committed = 'committed'
}

