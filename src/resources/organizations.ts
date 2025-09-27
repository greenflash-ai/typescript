// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Organizations extends APIResource {
  /**
   * Update an organization by providing either the Greenflash organization ID or
   * your external organization ID.
   *
   * **Identification:** You must provide exactly one identifier:
   *
   * - `organizationId`: The Greenflash-generated organization ID
   * - `externalOrganizationId`: Your external organization ID
   *
   * **Note:** The organization must already exist. Use the identify endpoint to
   * create new organizations.
   *
   * @example
   * ```ts
   * const updateOrganizationResponse =
   *   await client.organizations.update({
   *     name: 'Updated Organization Name',
   *     organizationId: 'org-greenflash-123',
   *   });
   * ```
   */
  update(body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<UpdateOrganizationResponse> {
    return this._client.post('/organizations', { body, ...options });
  }
}

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

export interface OrganizationUpdateParams {
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

export declare namespace Organizations {
  export {
    type UpdateOrganizationParams as UpdateOrganizationParams,
    type UpdateOrganizationResponse as UpdateOrganizationResponse,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };
}
