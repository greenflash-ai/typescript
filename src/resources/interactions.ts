// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Interactions extends APIResource {
  /**
   * Browse through all conversations in your workspace to understand how users are
   * interacting with your AI. Filter by product or version to focus on specific
   * areas of your application.
   */
  list(
    query: InteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListInteractionsResponse> {
    return this._client.get('/interactions', { query, ...options });
  }

  /**
   * Understand what happened in a specific conversation with AI-powered analysis.
   * See sentiment shifts, detect frustration, identify commercial intent, and get
   * actionable insights.
   *
   * **⚠️ Requires Growth+ plan or higher**
   *
   * **Two modes available:**
   *
   * - **simple mode**: Get just the numbers—sentiment scores, frustration levels,
   *   and key metrics. Perfect for dashboards and quick checks. No rate limiting.
   * - **insights mode** (default): Dive deeper with detailed keywords, insights, and
   *   AI-generated suggestions for improvement. Rate limited based on your plan's
   *   `maxAnalysesPerHour`.
   *
   * Returns 404 if the conversation doesn't exist or hasn't been analyzed yet.
   */
  getInteractionAnalytics(
    interactionID: string,
    query: InteractionGetInteractionAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GetInteractionAnalyticsResponse> {
    return this._client.get(path`/interactions/${interactionID}/analytics`, { query, ...options });
  }
}

export interface GetInteractionAnalyticsParams {
  /**
   * Analysis mode: "simple" returns only numeric aggregates (no rate limiting),
   * "insights" includes topics, keywords, and recommendations (rate limited per
   * tenant plan).
   */
  mode?: 'simple' | 'insights';
}

export interface GetInteractionAnalyticsResponse {
  /**
   * Average sentiment across user messages.
   */
  averageUserSentiment: GetInteractionAnalyticsResponse.AverageUserSentiment;

  /**
   * How sentiment changed during the interaction.
   */
  changeInUserSentiment: GetInteractionAnalyticsResponse.ChangeInUserSentiment;

  /**
   * Commercial intent detected.
   */
  commercialIntent: GetInteractionAnalyticsResponse.CommercialIntent;

  /**
   * Quality index score for the interaction.
   */
  conversationQualityIndex: number | null;

  /**
   * Frustration level detected.
   */
  frustration: GetInteractionAnalyticsResponse.Frustration;

  /**
   * Number of messages in the interaction.
   */
  messageCount: number;

  /**
   * Most common emotion expressed by user.
   */
  mostCommonUserEmotion: string;

  /**
   * User rating for this interaction.
   */
  rating: number | null;

  /**
   * Struggle level detected.
   */
  struggle: GetInteractionAnalyticsResponse.Struggle;

  /**
   * Summary of the interaction.
   */
  summary: string;

  /**
   * Main topic discussed.
   */
  topic: string;

  /**
   * Keywords extracted (insights mode only).
   */
  keywords?: Array<string>;
}

export namespace GetInteractionAnalyticsResponse {
  /**
   * Average sentiment across user messages.
   */
  export interface AverageUserSentiment {
    label: string;

    score: number;
  }

  /**
   * How sentiment changed during the interaction.
   */
  export interface ChangeInUserSentiment {
    label: string;

    score: number;
  }

  /**
   * Commercial intent detected.
   */
  export interface CommercialIntent {
    primarySignal: string;

    score: number;
  }

  /**
   * Frustration level detected.
   */
  export interface Frustration {
    label: string;

    score: number;
  }

  /**
   * Struggle level detected.
   */
  export interface Struggle {
    label: string;

    score: number;
  }
}

export interface ListInteractionsParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter interactions by product ID.
   */
  productId?: string;

  /**
   * Filter interactions by version ID.
   */
  versionId?: string;
}

/**
 * Array of interactions.
 */
export type ListInteractionsResponse = Array<ListInteractionsResponse.ListInteractionsResponseItem>;

export namespace ListInteractionsResponse {
  export interface ListInteractionsResponseItem {
    /**
     * The interaction ID.
     */
    id: string;

    /**
     * When the interaction was created.
     */
    createdAt: string;

    /**
     * Your external identifier for the interaction.
     */
    externalId: string | null;

    /**
     * Your external identifier for the participant.
     */
    externalParticipantId: string | null;

    /**
     * User feedback text.
     */
    feedback: string | null;

    /**
     * The AI model used.
     */
    model: string | null;

    /**
     * Your external identifier for the organization.
     */
    organizationExternalId: string | null;

    /**
     * The organization ID.
     */
    organizationId: string | null;

    /**
     * The user who participated in this interaction.
     */
    participantId: string;

    /**
     * The product ID.
     */
    productId: string;

    /**
     * User rating for this interaction.
     */
    rating: number | null;

    /**
     * Maximum rating value.
     */
    ratingMax: number | null;

    /**
     * Minimum rating value.
     */
    ratingMin: number | null;

    /**
     * When the interaction was last updated.
     */
    updatedAt: string;

    /**
     * The version ID.
     */
    versionId: string;

    /**
     * Custom interaction properties.
     */
    properties?: { [key: string]: unknown };
  }
}

export interface InteractionListParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter interactions by product ID.
   */
  productId?: string;

  /**
   * Filter interactions by version ID.
   */
  versionId?: string;
}

export interface InteractionGetInteractionAnalyticsParams {
  /**
   * Analysis mode: "simple" returns only numeric aggregates (no rate limiting),
   * "insights" includes topics, keywords, and recommendations (rate limited per
   * tenant plan).
   */
  mode?: 'simple' | 'insights';
}

export declare namespace Interactions {
  export {
    type GetInteractionAnalyticsParams as GetInteractionAnalyticsParams,
    type GetInteractionAnalyticsResponse as GetInteractionAnalyticsResponse,
    type ListInteractionsParams as ListInteractionsParams,
    type ListInteractionsResponse as ListInteractionsResponse,
    type InteractionListParams as InteractionListParams,
    type InteractionGetInteractionAnalyticsParams as InteractionGetInteractionAnalyticsParams,
  };
}
