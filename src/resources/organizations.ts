// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Create or update an organization with a unique external identifier.
   *
   * Provide an `externalOrganizationId` to identify the organization. If the
   * organization doesn't exist, it'll be created. If it already exists, its
   * information will be updated with what you provide. This makes it easy to keep
   * organization data in sync without worrying about whether the organization exists
   * yet.
   *
   * You can reference this organization in other API calls (like user creation with
   * `/users` or in the `/messages` endpoint) using the same
   * `externalOrganizationId`.
   *
   * @example
   * ```ts
   * const createOrganizationResponse =
   *   await client.organizations.create({
   *     externalOrganizationId: 'org-456',
   *     metadata: {
   *       industry: 'technology',
   *       size: 'enterprise',
   *     },
   *     name: 'Acme Corporation',
   *   });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<CreateOrganizationResponse> {
    return this._client.post('/organizations', { body, ...options });
  }

  /**
   * Update an existing organization with new information.
   *
   * The `organizationId` in the URL path should be your `externalOrganizationId`.
   * Only the fields you provide will be updated - all other fields will remain
   * unchanged. This is useful when you want to update specific fields without
   * providing the full organization profile.
   *
   * If you prefer a simpler approach where you always provide the complete
   * organization information, use `POST /organizations` instead - it will create or
   * update the organization automatically.
   *
   * @example
   * ```ts
   * const updateOrganizationResponse =
   *   await client.organizations.update('organizationId', {
   *     metadata: { industry: 'fintech', size: 'enterprise' },
   *     name: 'Updated Organization Name',
   *   });
   * ```
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateOrganizationResponse> {
    return this._client.put(path`/organizations/${organizationID}`, { body, ...options });
  }
}

/**
 * Request payload for creating a new organization.
 */
export interface CreateOrganizationParams {
  /**
   * Your unique identifier for the organization. Use this same ID in other API calls
   * to reference this organization.
   */
  externalOrganizationId: string;

  /**
   * Custom metadata for the organization.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The organization's name.
   */
  name?: string;
}

/**
 * Success response for organization creation.
 */
export interface CreateOrganizationResponse {
  /**
   * The organization that was created or updated.
   */
  organization: TenantOrganization;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

/**
 * The organization that was created or updated.
 */
export interface TenantOrganization {
  /**
   * The Greenflash organization ID.
   */
  id: string;

  /**
   * Custom metadata for the organization.
   */
  metadata: { [key: string]: unknown };

  /**
   * The tenant this organization belongs to.
   */
  tenantId: string;

  /**
   * When the organization was first created.
   */
  createdAt?: string;

  /**
   * Your external organization ID.
   */
  externalId?: string;

  /**
   * The organization name.
   */
  name?: string;

  /**
   * When the organization was last updated.
   */
  updatedAt?: string;
}

/**
 * Request payload for updating an organization.
 */
export interface UpdateOrganizationParams {
  /**
   * Custom metadata for the organization.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The organization's name.
   */
  name?: string;
}

/**
 * Success response for organization update.
 */
export interface UpdateOrganizationResponse {
  /**
   * The organization that was created or updated.
   */
  organization: TenantOrganization;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export interface OrganizationCreateParams {
  /**
   * Your unique identifier for the organization. Use this same ID in other API calls
   * to reference this organization.
   */
  externalOrganizationId: string;

  /**
   * Custom metadata for the organization.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The organization's name.
   */
  name?: string;
}

export interface OrganizationUpdateParams {
  /**
   * Custom metadata for the organization.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The organization's name.
   */
  name?: string;
}

export declare namespace Organizations {
  export {
    type CreateOrganizationParams as CreateOrganizationParams,
    type CreateOrganizationResponse as CreateOrganizationResponse,
    type TenantOrganization as TenantOrganization,
    type UpdateOrganizationParams as UpdateOrganizationParams,
    type UpdateOrganizationResponse as UpdateOrganizationResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };
}
