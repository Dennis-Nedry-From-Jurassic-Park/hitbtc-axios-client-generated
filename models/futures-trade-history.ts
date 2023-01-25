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
import { SpotTradeHistory } from './spot-trade-history';
/**
 * 
 * @export
 * @interface FuturesTradeHistory
 */
export interface FuturesTradeHistory extends SpotTradeHistory {
    /**
     * Position identifier of the order.
     * @type {number}
     * @memberof FuturesTradeHistory
     */
    positionId?: number;
    /**
     * Realized Profit and Loss on this trade.
     * @type {string}
     * @memberof FuturesTradeHistory
     */
    pnl?: string;
    /**
     * An indication of whether it is a liquidation trade.
     * @type {boolean}
     * @memberof FuturesTradeHistory
     */
    liquidation?: boolean | null;
}

