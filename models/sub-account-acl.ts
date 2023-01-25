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
 * @interface SubAccountAcl
 */
export interface SubAccountAcl {
    /**
     * Sub-account identifier.
     * @type {string}
     * @memberof SubAccountAcl
     */
    subAccountId: string;
    /**
     * Value indicating the desired state of deposits.
     * @type {boolean}
     * @memberof SubAccountAcl
     */
    depositAddressGenerationEnabled: boolean;
    /**
     * Value indicating the desired state of withdrawals.
     * @type {boolean}
     * @memberof SubAccountAcl
     */
    withdrawEnabled: boolean;
    /**
     * Text description for the ACL setting.
     * @type {string}
     * @memberof SubAccountAcl
     */
    description?: string;
    /**
     * Date and time of the ACL creation.
     * @type {Date}
     * @memberof SubAccountAcl
     */
    createdAt: Date;
    /**
     * Date and time of the ACL last update.
     * @type {Date}
     * @memberof SubAccountAcl
     */
    updatedAt: Date;
}
