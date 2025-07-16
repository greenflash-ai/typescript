// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identify extends APIResource {
  /**
   * The `/identify` endpoint allows you to create or update user profiles in the
   * system. This endpoint is used to manage user identity information that can be
   * referenced in other API calls using the `externalUserId`.
   *
   * When you call this endpoint with an `externalUserId` that already exists, the
   * user profile will be updated. If the `externalUserId` doesn't exist yet, a new
   * profile will be created.
   *
   * @example
   * ```ts
   * const createOrUpdateResponse =
   *   await client.identify.createOrUpdate({
   *     externalUserId: 'user-123',
   *     email: 'alice@example.com',
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
 * Request payload for identifying users.
 */
export interface CreateOrUpdateParams {
  /**
   * Your unique identifier for the user. This is used to reference the user in other
   * API calls.
   */
  externalUserId: string;

  /**
   * Whether the user's personal information should be anonymized. Defaults to false
   * for new users.
   */
  anonymized?: boolean;

  /**
   * The user's email address. Must be a valid email format.
   */
  email?: string;

  /**
   * Additional metadata associated with the user as key-value pairs.
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
   * Indicates whether the API call was successful.
   */
  success: boolean;
}

/**
 * The user profile that was created or updated.
 */
export interface Participant {
  /**
   * The internal ID of the participant.
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
   * The external ID you provided (matches the externalUserId from the request).
   */
  externalId: string;

  /**
   * Additional metadata associated with the participant.
   */
  metadata: { [key: string]: unknown };

  /**
   * The ID of the tenant this participant belongs to.
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
   * Your unique identifier for the user. This is used to reference the user in other
   * API calls.
   */
  externalUserId: string;

  /**
   * Whether the user's personal information should be anonymized. Defaults to false
   * for new users.
   */
  anonymized?: boolean;

  /**
   * The user's email address. Must be a valid email format.
   */
  email?: string;

  /**
   * Additional metadata associated with the user as key-value pairs.
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
