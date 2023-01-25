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
import { FuturesSymbol } from './futures-symbol';
import { Symbol } from './symbol';
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 extends FuturesSymbol {
    /**
     * Symbol type.
     * @type {string}
     * @memberof InlineResponse2001
     */
    type: InlineResponse2001TypeEnum;
    /**
     * Name (code) of the base currency.
     * @type {string}
     * @memberof InlineResponse2001
     */
    baseCurrency: string;
    /**
     * Name (code) of the quote currency.
     * @type {string}
     * @memberof InlineResponse2001
     */
    quoteCurrency: string;
    /**
     * Exchange status.
     * @type {string}
     * @memberof InlineResponse2001
     */
    status: InlineResponse2001StatusEnum;
    /**
     * Symbol quantity should be divided by this value with no remainder.
     * @type {string}
     * @memberof InlineResponse2001
     */
    quantityIncrement: string;
    /**
     * Symbol price should be divided by this value with no remainder.
     * @type {string}
     * @memberof InlineResponse2001
     */
    tickSize: string;
    /**
     * Default fee rate.
     * @type {string}
     * @memberof InlineResponse2001
     */
    takeRate: string;
    /**
     * Default fee rate for the market making trades.
     * @type {string}
     * @memberof InlineResponse2001
     */
    makeRate: string;
    /**
     * Currency in which fees are determined.
     * @type {string}
     * @memberof InlineResponse2001
     */
    feeCurrency: string;
    /**
     * Determines whether the margin trading is available.
     * @type {boolean}
     * @memberof InlineResponse2001
     */
    marginTrading: boolean;
    /**
     * The maximum leverage available to the user for margin trading. Shown only if `margin_trading` is `true`.
     * @type {string}
     * @memberof InlineResponse2001
     */
    maxInitialLeverage?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2001TypeEnum {
    Spot = 'spot'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2001StatusEnum {
    Working = 'working',
    Suspended = 'suspended'
}

