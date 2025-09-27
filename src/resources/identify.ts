// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identify extends APIResource {
  /**
   * Create new user profiles or update existing ones with contact information and
   * metadata.
   *
   * Provide an `externalUserId` to identify the user. If this ID already exists, the
   * profile will be updated. If it doesn't exist, a new profile will be created. You
   * can then reference this user in other API calls using the same `externalUserId`.
   *
   * Optionally provide an `externalOrganizationId` to associate the user with an
   * organization. If the organization doesn't exist, it will be created
   * automatically.
   *
   * @example
   * ```ts
   * const createOrUpdateResponse =
   *   await client.identify.createOrUpdate({
   *     externalUserId: 'user-123',
   *     email: 'alice@example.com',
   *     externalOrganizationId: 'org-456',
   *     metadata: { plan: 'premium' },
   *     name: 'Alice Example',
   *     phone: '+15551234567',
   *   });
   * ```
   */
  createOrUpdate(
    body: IdentifyCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CreateOrUpdateResponse> {
    return this._client.post('/identify', { body, ...options });
  }
}

/**
 * Request payload for creating or updating user profiles.
 */
export interface CreateOrUpdateParams {
  /**
   * Your unique identifier for the user. Use this same ID in other API calls to
   * reference this user.
   */
  externalUserId: string;

  /**
   * Whether to anonymize the user's personal information. Defaults to false.
   */
  anonymized?: boolean;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  metadata?: { [key: string]: unknown };

  /**
   * The user's full name.
   */
  name?: string;

  /**
   * The user's phone number.
   */
  phone?: string;
}

/**
 * Success response for identify operations.
 */
export interface CreateOrUpdateResponse {
  /**
   * The user profile that was created or updated.
   */
  participant: Participant;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

/**
 * The user profile that was created or updated.
 */
export interface Participant {
  /**
   * The Greenflash participant ID.
   */
  id: string;

  /**
   * Whether the participant's personal information is anonymized.
   */
  anonymized: boolean;

  /**
   * When the participant was first created.
   */
  createdAt: string;

  /**
   * Your external user ID (matches the externalUserId from the request).
   */
  externalId: string;

  /**
   * Additional data about the participant.
   */
  metadata: { [key: string]: unknown };

  /**
   * The tenant this participant belongs to.
   */
  tenantId: string;

  /**
   * When the participant was last updated.
   */
  updatedAt: string;

  /**
   * The participant's email address.
   */
  email?: string;

  /**
   * The participant's full name.
   */
  name?: string;

  /**
   * The participant's phone number.
   */
  phone?: string;
}

export interface IdentifyCreateOrUpdateParams {
  /**
   * Your unique identifier for the user. Use this same ID in other API calls to
   * reference this user.
   */
  externalUserId: string;

  /**
   * Whether to anonymize the user's personal information. Defaults to false.
   */
  anonymized?: boolean;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  metadata?: { [key: string]: unknown };

  /**
   * The user's full name.
   */
  name?: string;

  /**
   * The user's phone number.
   */
  phone?: string;
}

export declare namespace Identify {
  export {
    type CreateOrUpdateParams as CreateOrUpdateParams,
    type CreateOrUpdateResponse as CreateOrUpdateResponse,
    type Participant as Participant,
    type IdentifyCreateOrUpdateParams as IdentifyCreateOrUpdateParams,
  };
}
