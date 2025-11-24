// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Group your users by company, team, or any organizational structure that makes
   * sense for your business.
   *
   * Provide an `externalOrganizationId` to identify the organization—your ID from
   * your own system. Don't worry about whether it already exists; we'll create it if
   * it's new or update it if it already exists. This makes syncing organization data
   * effortless.
   *
   * Reference this organization when creating users (via `/users`) or logging
   * messages (via `/messages`) using the same `externalOrganizationId`. Perfect for
   * B2B products where you need to track which company each user belongs to.
   *
   * @example
   * ```ts
   * const createOrganizationResponse =
   *   await client.organizations.create({
   *     externalOrganizationId: 'org-456',
   *     name: 'Acme Corporation',
   *     properties: {
   *       industry: 'technology',
   *       size: 'enterprise',
   *     },
   *   });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<CreateOrganizationResponse> {
    return this._client.post('/organizations', { body, ...options });
  }

  /**
   * Update specific fields of an existing organization without changing everything.
   *
   * The `organizationId` in the URL path should be your `externalOrganizationId`.
   * Only the fields you include in your request will be updated—everything else
   * stays the same. Perfect for targeted updates like renaming a company or updating
   * properties.
   *
   * Prefer a simpler approach? Use `POST /organizations` instead—it automatically
   * creates or updates the organization, so you don't need to know if it exists yet.
   *
   * @example
   * ```ts
   * const updateOrganizationResponse =
   *   await client.organizations.update('organizationId', {
   *     name: 'Updated Organization Name',
   *     properties: { industry: 'fintech', size: 'enterprise' },
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

  /**
   * Browse through all the organizations (companies, teams, etc.) in your workspace.
   * Search for specific organizations or paginate through the full list. Perfect for
   * building admin dashboards or organization management interfaces.
   *
   * The response includes a `Link` header with URLs for next/previous pages, making
   * pagination straightforward.
   *
   * @example
   * ```ts
   * const listOrganizationsResponse =
   *   await client.organizations.list();
   * ```
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOrganizationsResponse> {
    return this._client.get('/organizations', { query, ...options });
  }

  /**
   * See how an entire organization (company, team, etc.) engages with your AI across
   * all their users and conversations. Spot trends, measure satisfaction, and
   * identify opportunities to improve the experience for your biggest customers.
   *
   * **⚠️ Requires Growth+ plan or higher**
   *
   * **Two modes available:**
   *
   * - **simple mode**: Get organization-wide metrics like average sentiment,
   *   frustration levels, commercial intent, and quality scores. Perfect for
   *   executive dashboards and health monitoring. No rate limiting.
   * - **insights mode** (default): Dive into detailed patterns, common topics, and
   *   AI-generated recommendations for improving this organization's experience.
   *   Rate limited based on your plan's `maxAnalysesPerHour`.
   *
   * If analytics don't exist yet, they'll be generated in real-time from the
   * organization's conversations (this may take a few seconds). Returns 404 if the
   * organization doesn't exist or has no conversations.
   *
   * @example
   * ```ts
   * const getOrganizationAnalyticsResponse =
   *   await client.organizations.getOrganizationAnalytics(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getOrganizationAnalytics(
    organizationID: string,
    query: OrganizationGetOrganizationAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GetOrganizationAnalyticsResponse> {
    return this._client.get(path`/organizations/${organizationID}/analytics`, { query, ...options });
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
   * The organization's name.
   */
  name?: string;

  /**
   * Custom organization properties.
   */
  properties?: { [key: string]: unknown };
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

export interface GetOrganizationAnalyticsParams {
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

export interface GetOrganizationAnalyticsResponse {
  /**
   * Distribution of sentiment changes.
   */
  averageChangeInUserSentiment: GetOrganizationAnalyticsResponse.AverageChangeInUserSentiment;

  /**
   * Average commercial intent.
   */
  averageCommercialIntent: GetOrganizationAnalyticsResponse.AverageCommercialIntent;

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
  averageFrustration: GetOrganizationAnalyticsResponse.AverageFrustration;

  /**
   * Average struggle level.
   */
  averageStruggle: GetOrganizationAnalyticsResponse.AverageStruggle;

  /**
   * Average sentiment across all conversations.
   */
  averageUserSentiment: GetOrganizationAnalyticsResponse.AverageUserSentiment;

  /**
   * Summary of the organization analytics.
   */
  summary: GetOrganizationAnalyticsResponse.Summary | null;

  /**
   * Total number of conversations analyzed.
   */
  totalConversations: number;

  /**
   * Keywords extracted (insights mode only).
   */
  keywords?: Array<GetOrganizationAnalyticsResponse.Keyword>;

  /**
   * Topics discussed (insights mode only).
   */
  topics?: Array<GetOrganizationAnalyticsResponse.Topic>;
}

export namespace GetOrganizationAnalyticsResponse {
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
   * Summary of the organization analytics.
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

export interface ListOrganizationsParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Page number (used to derive offset = (page-1)\*limit).
   */
  page?: number;
}

/**
 * Array of organizations.
 */
export type ListOrganizationsResponse = Array<TenantOrganization>;

/**
 * The organization that was created or updated.
 */
export interface TenantOrganization {
  /**
   * The Greenflash organization ID.
   */
  id: string;

  /**
   * Custom organization properties.
   */
  properties: { [key: string]: unknown };

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
   * The organization's name.
   */
  name?: string;

  /**
   * Custom organization properties.
   */
  properties?: { [key: string]: unknown };
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
   * The organization's name.
   */
  name?: string;

  /**
   * Custom organization properties.
   */
  properties?: { [key: string]: unknown };
}

export interface OrganizationUpdateParams {
  /**
   * The organization's name.
   */
  name?: string;

  /**
   * Custom organization properties.
   */
  properties?: { [key: string]: unknown };
}

export interface OrganizationListParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Page number (used to derive offset = (page-1)\*limit).
   */
  page?: number;
}

export interface OrganizationGetOrganizationAnalyticsParams {
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

export declare namespace Organizations {
  export {
    type CreateOrganizationParams as CreateOrganizationParams,
    type CreateOrganizationResponse as CreateOrganizationResponse,
    type GetOrganizationAnalyticsParams as GetOrganizationAnalyticsParams,
    type GetOrganizationAnalyticsResponse as GetOrganizationAnalyticsResponse,
    type ListOrganizationsParams as ListOrganizationsParams,
    type ListOrganizationsResponse as ListOrganizationsResponse,
    type TenantOrganization as TenantOrganization,
    type UpdateOrganizationParams as UpdateOrganizationParams,
    type UpdateOrganizationResponse as UpdateOrganizationResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationGetOrganizationAnalyticsParams as OrganizationGetOrganizationAnalyticsParams,
  };
}
