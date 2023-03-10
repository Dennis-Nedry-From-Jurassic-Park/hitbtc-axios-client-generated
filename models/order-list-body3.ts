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
import { HiddenMarginOrderRequest } from './hidden-margin-order-request';
import { MarginOrderRequest } from './margin-order-request';
/**
 * 
 * @export
 * @interface OrderListBody3
 */
export interface OrderListBody3 {
    /**
     * Order list identifier.
     * @type {string}
     * @memberof OrderListBody3
     */
    orderListId?: string;
    /**
     * Order list type.
     * @type {string}
     * @memberof OrderListBody3
     */
    contingencyType: OrderListBody3ContingencyTypeEnum;
    /**
     * 
     * @type {Array<HiddenMarginOrderRequest & MarginOrderRequest>}
     * @memberof OrderListBody3
     */
    orders: Array<HiddenMarginOrderRequest & MarginOrderRequest>;
}

/**
    * @export
    * @enum {string}
    */
export enum OrderListBody3ContingencyTypeEnum {
    OneCancelOther = 'oneCancelOther',
    OneTriggerOther = 'oneTriggerOther',
    OneTriggerOneCancelOther = 'oneTriggerOneCancelOther'
}

