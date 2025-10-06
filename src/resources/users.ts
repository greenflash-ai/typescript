// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Create a new user profile with contact information and metadata.
   *
   * Provide an `externalUserId` to identify the user. This ID must be unique - if it
   * already exists, the request will fail. You can then reference this user in other
   * API calls using the same `externalUserId`.
   *
   * Optionally provide an `externalOrganizationId` to associate the user with an
   * organization. If the organization doesn't exist, it will be created
   * automatically.
   *
   * **Note:** This endpoint will fail if the user already exists. Use
   * `PUT /users/{userId}` to update existing users.
   *
   * @example
   * ```ts
   * const createUserResponse = await client.users.create({
   *   externalUserId: 'user-123',
   *   email: 'alice@example.com',
   *   externalOrganizationId: 'org-456',
   *   metadata: { plan: 'premium' },
   *   name: 'Alice Example',
   *   phone: '+15551234567',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<CreateUserResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Update an existing user profile with new contact information and metadata.
   *
   * The `userId` in the URL path should be your `externalUserId`. Only the fields
   * you provide will be updated - all other fields will remain unchanged.
   *
   * Optionally provide an `externalOrganizationId` to associate the user with an
   * organization. If the organization doesn't exist, it will be created
   * automatically.
   *
   * @example
   * ```ts
   * const updateUserResponse = await client.users.update(
   *   'userId',
   *   {
   *     email: 'alice.updated@example.com',
   *     metadata: { plan: 'enterprise' },
   *     name: 'Alice Updated',
   *   },
   * );
   * ```
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UpdateUserResponse> {
    return this._client.put(path`/users/${userID}`, { body, ...options });
  }
}

/**
 * Request payload for creating a new user profile.
 */
export interface CreateUserParams {
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
 * Success response for user creation.
 */
export interface CreateUserResponse {
  /**
   * The user profile.
   */
  participant: Participant;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

/**
 * The user profile.
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

/**
 * Request payload for updating an existing user profile.
 */
export interface UpdateUserParams {
  /**
   * Whether to anonymize the user's personal information.
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
 * Success response for user update.
 */
export interface UpdateUserResponse {
  /**
   * The user profile.
   */
  participant: Participant;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export interface UserCreateParams {
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

export interface UserUpdateParams {
  /**
   * Whether to anonymize the user's personal information.
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

export declare namespace Users {
  export {
    type CreateUserParams as CreateUserParams,
    type CreateUserResponse as CreateUserResponse,
    type Participant as Participant,
    type UpdateUserParams as UpdateUserParams,
    type UpdateUserResponse as UpdateUserResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
  };
}
