// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Organizations extends APIResource {}

/**
 * Request payload for updating an organization name.
 */
export interface UpdateOrganizationParams {
  /**
   * The organization's name to update.
   */
  name: string;

  /**
   * Your external organization ID. Either organizationId or externalOrganizationId
   * must be provided.
   */
  externalOrganizationId?: string;

  /**
   * The Greenflash organization ID.
   */
  organizationId?: string;
}

/**
 * Success response for organization update operations.
 */
export interface UpdateOrganizationResponse {
  /**
   * The organization that was updated.
   */
  organization: UpdateOrganizationResponse.Organization;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export namespace UpdateOrganizationResponse {
  /**
   * The organization that was updated.
   */
  export interface Organization {
    /**
     * The Greenflash organization ID.
     */
    id: string;

    /**
     * Your external organization ID.
     */
    externalId?: string;

    /**
     * The organization name.
     */
    name?: string;
  }
}

export declare namespace Organizations {
  export {
    type UpdateOrganizationParams as UpdateOrganizationParams,
    type UpdateOrganizationResponse as UpdateOrganizationResponse,
  };
}
