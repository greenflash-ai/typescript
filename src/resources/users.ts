// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Keep track of who's talking to your AI by creating user profiles with contact
   * information and custom properties.
   *
   * Provide an `externalUserId` to identify the user—your ID from your own system.
   * Don't worry about whether they already exist; we'll create them if they're new
   * or update their profile if they already exist. This makes syncing user data
   * effortless.
   *
   * You can then reference this user in other API calls using the same
   * `externalUserId`.
   *
   * Optionally associate users with an organization by providing an
   * `externalOrganizationId`. If the organization doesn't exist yet, we'll create it
   * automatically.
   *
   * @example
   * ```ts
   * const createUserResponse = await client.users.create({
   *   externalUserId: 'user-123',
   *   email: 'alice@example.com',
   *   externalOrganizationId: 'org-456',
   *   name: 'Alice Example',
   *   phone: '+15551234567',
   *   properties: { plan: 'premium' },
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<CreateUserResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Update specific fields of an existing user profile without changing everything.
   *
   * The `userId` in the URL path should be your `externalUserId`. Only the fields
   * you include in your request will be updated—everything else stays the same.
   * Perfect for targeted updates like changing an email address or adding new
   * properties.
   *
   * Prefer a simpler approach? Use `POST /users` instead—it automatically creates or
   * updates the user, so you don't need to know if they exist yet.
   *
   * Optionally associate the user with an organization by providing an
   * `externalOrganizationId`. If the organization doesn't exist yet, we'll create it
   * automatically.
   *
   * @example
   * ```ts
   * const updateUserResponse = await client.users.update(
   *   'userId',
   *   {
   *     email: 'alice.updated@example.com',
   *     name: 'Alice Updated',
   *     properties: { plan: 'enterprise' },
   *   },
   * );
   * ```
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UpdateUserResponse> {
    return this._client.put(path`/users/${userID}`, { body, ...options });
  }

  /**
   * Browse through all the users in your workspace. Filter by organization to see
   * who belongs to specific teams or companies. Results are paginated for easy
   * navigation through large user bases.
   *
   * @example
   * ```ts
   * const listUsersResponse = await client.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUsersResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Understand how a specific user engages with your AI across all their
   * conversations. Track their satisfaction, identify pain points, and spot
   * opportunities to improve their experience.
   *
   * **⚠️ Requires Growth+ plan or higher**
   *
   * **Two modes available:**
   *
   * - **simple mode**: Get aggregate metrics like average sentiment, frustration
   *   levels, and conversation quality. Perfect for user dashboards. No rate
   *   limiting.
   * - **insights mode** (default): Access detailed patterns, recurring topics, and
   *   AI-generated recommendations specific to this user. Rate limited based on your
   *   plan's `maxAnalysesPerHour`.
   *
   * Returns 404 if the user doesn't exist or has no conversations yet.
   *
   * @example
   * ```ts
   * const getUserAnalyticsResponse =
   *   await client.users.getUserAnalytics(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getUserAnalytics(
    userID: string,
    query: UserGetUserAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GetUserAnalyticsResponse> {
    return this._client.get(path`/users/${userID}/analytics`, { query, ...options });
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
   * The user's full name.
   */
  name?: string;

  /**
   * The Greenflash organization ID that the user belongs to.
   */
  organizationId?: string;

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  properties?: { [key: string]: unknown };
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

export interface GetUserAnalyticsParams {
  /**
   * Analysis mode: "simple" returns only numeric aggregates (no rate limiting),
   * "insights" includes topics, keywords, and recommendations (rate limited per
   * tenant plan).
   */
  mode?: 'simple' | 'insights';

  /**
   * Filter analytics by product ID.
   */
  productId?: string;

  /**
   * Filter analytics by version ID.
   */
  versionId?: string;
}

export interface GetUserAnalyticsResponse {
  /**
   * Distribution of sentiment changes.
   */
  averageChangeInUserSentiment: GetUserAnalyticsResponse.AverageChangeInUserSentiment;

  /**
   * Average commercial intent.
   */
  averageCommercialIntent: GetUserAnalyticsResponse.AverageCommercialIntent;

  /**
   * Average conversation quality index.
   */
  averageConversationQualityIndex: number | null;

  /**
   * Average conversation rating.
   */
  averageConversationRating: number | null;

  /**
   * Average frustration level.
   */
  averageFrustration: GetUserAnalyticsResponse.AverageFrustration;

  /**
   * Average struggle level.
   */
  averageStruggle: GetUserAnalyticsResponse.AverageStruggle;

  /**
   * Average sentiment across all conversations.
   */
  averageUserSentiment: GetUserAnalyticsResponse.AverageUserSentiment;

  /**
   * Summary of the user analytics.
   */
  summary: GetUserAnalyticsResponse.Summary | null;

  /**
   * Total number of conversations analyzed.
   */
  totalConversations: number;

  /**
   * Keywords extracted (insights mode only).
   */
  keywords?: Array<GetUserAnalyticsResponse.Keyword>;

  /**
   * Topics discussed (insights mode only).
   */
  topics?: Array<GetUserAnalyticsResponse.Topic>;
}

export namespace GetUserAnalyticsResponse {
  /**
   * Distribution of sentiment changes.
   */
  export interface AverageChangeInUserSentiment {
    label: string;

    score: number;
  }

  /**
   * Average commercial intent.
   */
  export interface AverageCommercialIntent {
    label: string;

    score: number;
  }

  /**
   * Average frustration level.
   */
  export interface AverageFrustration {
    label: string;

    score: number;
  }

  /**
   * Average struggle level.
   */
  export interface AverageStruggle {
    label: string;

    score: number;
  }

  /**
   * Average sentiment across all conversations.
   */
  export interface AverageUserSentiment {
    label: string;

    score: number;
  }

  /**
   * Summary of the user analytics.
   */
  export interface Summary {
    analysis: string;

    reason: string;
  }

  export interface Keyword {
    count: number;

    name: string;
  }

  export interface Topic {
    count: number;

    name: string;
  }
}

export interface ListUsersParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Filter users by organization ID.
   */
  organizationId?: string;

  /**
   * Page number (used to derive offset = (page-1)\*limit).
   */
  page?: number;
}

/**
 * Array of users.
 */
export type ListUsersResponse = Array<Participant>;

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
   * Your external user ID (matches the externalUserId from the request).
   */
  externalId: string;

  /**
   * Your external identifier for the user's organization.
   */
  externalOrganizationId: string | null;

  /**
   * The internal organization ID that the user belongs to.
   */
  organizationId: string | null;

  /**
   * Additional data about the participant.
   */
  properties: { [key: string]: unknown };

  /**
   * When the participant was first created.
   */
  createdAt?: string;

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

  /**
   * When the participant was last updated.
   */
  updatedAt?: string;
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
   * The user's full name.
   */
  name?: string;

  /**
   * The Greenflash organization ID that the user belongs to.
   */
  organizationId?: string;

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  properties?: { [key: string]: unknown };
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
   * The user's full name.
   */
  name?: string;

  /**
   * The Greenflash organization ID that the user belongs to.
   */
  organizationId?: string;

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  properties?: { [key: string]: unknown };
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
   * The user's full name.
   */
  name?: string;

  /**
   * The Greenflash organization ID that the user belongs to.
   */
  organizationId?: string;

  /**
   * The user's phone number.
   */
  phone?: string;

  /**
   * Additional data about the user (e.g., plan type, preferences).
   */
  properties?: { [key: string]: unknown };
}

export interface UserListParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Filter users by organization ID.
   */
  organizationId?: string;

  /**
   * Page number (used to derive offset = (page-1)\*limit).
   */
  page?: number;
}

export interface UserGetUserAnalyticsParams {
  /**
   * Analysis mode: "simple" returns only numeric aggregates (no rate limiting),
   * "insights" includes topics, keywords, and recommendations (rate limited per
   * tenant plan).
   */
  mode?: 'simple' | 'insights';

  /**
   * Filter analytics by product ID.
   */
  productId?: string;

  /**
   * Filter analytics by version ID.
   */
  versionId?: string;
}

export declare namespace Users {
  export {
    type CreateUserParams as CreateUserParams,
    type CreateUserResponse as CreateUserResponse,
    type GetUserAnalyticsParams as GetUserAnalyticsParams,
    type GetUserAnalyticsResponse as GetUserAnalyticsResponse,
    type ListUsersParams as ListUsersParams,
    type ListUsersResponse as ListUsersResponse,
    type Participant as Participant,
    type UpdateUserParams as UpdateUserParams,
    type UpdateUserResponse as UpdateUserResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetUserAnalyticsParams as UserGetUserAnalyticsParams,
  };
}
