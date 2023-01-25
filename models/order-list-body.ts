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
import { HiddenSpotOrderRequest } from './hidden-spot-order-request';
import { SpotOrderRequest } from './spot-order-request';
/**
 * 
 * @export
 * @interface OrderListBody
 */
export interface OrderListBody {
    /**
     * Order list identifier.
     * @type {string}
     * @memberof OrderListBody
     */
    orderListId?: string;
    /**
     * Order list type.
     * @type {string}
     * @memberof OrderListBody
     */
    contingencyType: OrderListBodyContingencyTypeEnum;
    /**
     * 
     * @type {Array<HiddenSpotOrderRequest & SpotOrderRequest>}
     * @memberof OrderListBody
     */
    orders: Array<HiddenSpotOrderRequest & SpotOrderRequest>;
}

/**
    * @export
    * @enum {string}
    */
export enum OrderListBodyContingencyTypeEnum {
    AllOrNone = 'allOrNone',
    OneCancelOther = 'oneCancelOther',
    OneTriggerOther = 'oneTriggerOther',
    OneTriggerOneCancelOther = 'oneTriggerOneCancelOther'
}

