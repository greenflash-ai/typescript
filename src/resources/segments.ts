// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage user segments
 */
export class Segments extends APIResource {
  /**
   * Create a custom user segment based on filter rules. Available on all plans,
   * limited by your plan's `maxCustomSegments` quota.
   *
   * After creation, segment membership is computed asynchronously. The segment will
   * be available immediately but member counts may take a few moments to populate.
   *
   * @example
   * ```ts
   * const createSegmentResponse = await client.segments.create({
   *   filters: {
   *     rules: [
   *       {
   *         type: 'analysis',
   *         field: 'commercialIntent',
   *         operator: 'gte',
   *         value: 0.6,
   *       },
   *       {
   *         type: 'property',
   *         key: 'plan',
   *         operator: 'eq',
   *         value: 'enterprise',
   *       },
   *     ],
   *   },
   *   description:
   *     'Users with high commercial intent from the enterprise plan',
   *   icon: 'Users',
   *   name: 'High-Intent Enterprise Users',
   * });
   * ```
   */
  create(body: SegmentCreateParams, options?: RequestOptions): APIPromise<CreateSegmentResponse> {
    return this._client.post('/segments', { body, ...options });
  }

  /**
   * List all segments in your workspace. Returns summary data including member
   * counts. Supports pagination.
   *
   * @example
   * ```ts
   * const listSegmentsResponse = await client.segments.list();
   * ```
   */
  list(query: SegmentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListSegmentsResponse> {
    return this._client.get('/segments', { query, ...options });
  }

  /**
   * Get detailed information about a specific segment, including its filter
   * configuration, description, and metadata. Accepts either a UUID or a preset ID
   * for system segments.
   *
   * @example
   * ```ts
   * const getSegmentResponse = await client.segments.get(
   *   'segmentId',
   * );
   * ```
   */
  get(segmentID: string, options?: RequestOptions): APIPromise<GetSegmentResponse> {
    return this._client.get(path`/segments/${segmentID}`, options);
  }

  /**
   * Get aggregated analytics for a specific segment including sentiment, safety
   * metrics, topics, keywords, and an LLM-generated summary.
   *
   * **Requires Growth+ plan or higher.**
   *
   * Rate limited based on your plan's `maxAnalysesPerHour`. Cached results (less
   * than 2 hours old) do not consume rate limit points.
   *
   * @example
   * ```ts
   * const getSegmentAnalyticsResponse =
   *   await client.segments.getSegmentAnalytics(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getSegmentAnalytics(segmentID: string, query: SegmentGetSegmentAnalyticsParams | null | undefined = {}, options?: RequestOptions): APIPromise<GetSegmentAnalyticsResponse> {
    return this._client.get(path`/segments/${segmentID}/analytics`, { query, ...options });
  }
}

export interface CreateSegmentParams {
  /**
   * Filter configuration defining segment membership.
   */
  filters: CreateSegmentParams.Filters;

  /**
   * A description of the segment purpose.
   */
  description?: string;

  /**
   * Icon identifier for the segment (e.g. "Users", "Tag").
   */
  icon?: string;

  /**
   * Segment name. If omitted, an auto-generated name will be assigned.
   */
  name?: string;
}

export namespace CreateSegmentParams {
  /**
   * Filter configuration defining segment membership.
   */
  export interface Filters {
    /**
     * Array of filter rules. At least one rule is required.
     */
    rules: Array<Filters.UnionMember0 | Filters.UnionMember1 | Filters.UnionMember2 | Filters.UnionMember3 | Filters.UnionMember4 | Filters.UnionMember5>;

    /**
     * Optional date range filter.
     */
    dateRange?: Filters.DateRange;

    /**
     * Scope the segment to specific product IDs.
     */
    productIds?: Array<string>;
  }

  export namespace Filters {
    export interface UnionMember0 {
      /**
       * The analysis metric to filter on.
       */
      field: 'sentiment' | 'frustration' | 'struggle' | 'commercialIntent' | 'cqi' | 'rating';

      /**
       * Comparison operator.
       */
      operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';

      /**
       * Rule based on conversation analysis metrics.
       */
      type: 'analysis';

      /**
       * Threshold value for the metric (0-1 scale for most metrics).
       */
      value: number;
    }

    export interface UnionMember1 {
      /**
       * The flag to filter on.
       */
      field: 'jailbreakDetected' | 'hallucinationDetected' | 'userToxicityDetected' | 'modelToxicityDetected' | 'userBiasDetected' | 'modelBiasDetected' | 'missingCapabilityDetected';

      /**
       * Rule based on detected flags.
       */
      type: 'analysis_flag';

      /**
       * Whether the flag should be true or false.
       */
      value: boolean;
    }

    export interface UnionMember2 {
      /**
       * The property key (alphanumeric, dots, hyphens, underscores).
       */
      key: string;

      /**
       * Comparison operator.
       */
      operator: 'eq' | 'neq' | 'contains' | 'gt' | 'lt';

      /**
       * Rule based on user properties.
       */
      type: 'property';

      /**
       * Value to compare against.
       */
      value: string | number | boolean;
    }

    export interface UnionMember3 {
      /**
       * The conversation property key.
       */
      key: string;

      /**
       * Comparison operator.
       */
      operator: 'eq' | 'neq' | 'contains' | 'gt' | 'lt';

      /**
       * Rule based on conversation-level properties.
       */
      type: 'conversation_property';

      /**
       * Value to compare against.
       */
      value: string | number | boolean;
    }

    export interface UnionMember4 {
      /**
       * Comparison operator.
       */
      operator: 'gte' | 'lte';

      /**
       * Rule based on number of conversations.
       */
      type: 'conversation_count';

      /**
       * Conversation count threshold.
       */
      value: number;
    }

    export interface UnionMember5 {
      /**
       * Time comparison operator.
       */
      operator: 'within' | 'before';

      /**
       * Rule based on when the user was last active.
       */
      type: 'last_seen';

      /**
       * Time duration (e.g. "7d", "24h", "30m").
       */
      value: string;
    }

    /**
     * Optional date range filter.
     */
    export interface DateRange {
      /**
       * Start date (ISO 8601).
       */
      from?: string;

      /**
       * Preset date range.
       */
      preset?: '7d' | '30d' | '90d' | 'all';

      /**
       * End date (ISO 8601).
       */
      to?: string;
    }
  }
}

export interface CreateSegmentResponse {
  /**
   * The created segment ID.
   */
  id: string;

  /**
   * When the segment was created.
   */
  createdAt: string;

  /**
   * Segment description.
   */
  description: string | null;

  /**
   * The filter configuration.
   */
  filters: { [key: string]: unknown };

  /**
   * Icon identifier.
   */
  icon: string | null;

  /**
   * The segment name.
   */
  name: string;

  /**
   * Always "custom" for API-created segments.
   */
  type: 'custom';

  /**
   * When the segment was last updated.
   */
  updatedAt: string;
}

export interface GetSegmentAnalyticsParams {
  /**
   * Filter analytics by product ID.
   */
  productId?: string;

  /**
   * Filter analytics by version ID.
   */
  versionId?: string;
}

export interface GetSegmentAnalyticsResponse {
  /**
   * Average change in user sentiment.
   */
  averageChangeInUserSentiment: GetSegmentAnalyticsResponse.AverageChangeInUserSentiment;

  /**
   * Average commercial intent.
   */
  averageCommercialIntent: GetSegmentAnalyticsResponse.AverageCommercialIntent;

  /**
   * Average frustration level.
   */
  averageFrustration: GetSegmentAnalyticsResponse.AverageFrustration;

  /**
   * Average struggle level.
   */
  averageStruggle: GetSegmentAnalyticsResponse.AverageStruggle;

  /**
   * Average sentiment across all conversations.
   */
  averageUserSentiment: GetSegmentAnalyticsResponse.AverageUserSentiment;

  /**
   * Number of hallucinations detected.
   */
  hallucinationCount: GetSegmentAnalyticsResponse.HallucinationCount;

  /**
   * Number of jailbreak attempts detected.
   */
  jailbreakCount: GetSegmentAnalyticsResponse.JailbreakCount;

  /**
   * Keywords extracted from conversations.
   */
  keywords: Array<GetSegmentAnalyticsResponse.Keyword>;

  /**
   * Number of model bias detections.
   */
  modelBiasCount: GetSegmentAnalyticsResponse.ModelBiasCount;

  /**
   * Number of model toxicity detections.
   */
  modelToxicityCount: GetSegmentAnalyticsResponse.ModelToxicityCount;

  /**
   * Total number of participants in the segment.
   */
  participantCount: number;

  /**
   * LLM-generated summary of the segment.
   */
  summary: { [key: string]: unknown } | null;

  /**
   * Topic groups across conversations.
   */
  topicGroups: Array<GetSegmentAnalyticsResponse.TopicGroup>;

  /**
   * Topics discussed across conversations.
   */
  topics: Array<GetSegmentAnalyticsResponse.Topic>;

  /**
   * Total number of conversations in the segment.
   */
  totalConversations: number;

  /**
   * Number of user bias detections.
   */
  userBiasCount: GetSegmentAnalyticsResponse.UserBiasCount;

  /**
   * Number of user toxicity detections.
   */
  userToxicityCount: GetSegmentAnalyticsResponse.UserToxicityCount;

  /**
   * Average conversation quality index.
   */
  averageConversationQualityIndex?: number | null;

  /**
   * Average conversation rating.
   */
  averageConversationRating?: number | null;
}

export namespace GetSegmentAnalyticsResponse {
  /**
   * Average change in user sentiment.
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
   * Number of hallucinations detected.
   */
  export interface HallucinationCount {
    percentage: number;

    total: number;
  }

  /**
   * Number of jailbreak attempts detected.
   */
  export interface JailbreakCount {
    percentage: number;

    total: number;
  }

  export interface Keyword {
    count: number;

    name: string;
  }

  /**
   * Number of model bias detections.
   */
  export interface ModelBiasCount {
    percentage: number;

    total: number;
  }

  /**
   * Number of model toxicity detections.
   */
  export interface ModelToxicityCount {
    percentage: number;

    total: number;
  }

  export interface TopicGroup {
    count: number;

    name: string;
  }

  export interface Topic {
    count: number;

    name: string;
  }

  /**
   * Number of user bias detections.
   */
  export interface UserBiasCount {
    percentage: number;

    total: number;
  }

  /**
   * Number of user toxicity detections.
   */
  export interface UserToxicityCount {
    percentage: number;

    total: number;
  }
}

export interface GetSegmentResponse {
  /**
   * The segment ID.
   */
  id: string;

  /**
   * When the segment was created.
   */
  createdAt: string;

  /**
   * The user ID who created this segment.
   */
  createdBy: string | null;

  /**
   * A description of the segment.
   */
  description: string | null;

  /**
   * The filter/rule configuration for the segment.
   */
  filters: { [key: string]: unknown };

  /**
   * Icon identifier for the segment.
   */
  icon: string | null;

  /**
   * Whether the segment is favorited.
   */
  isFavorited: boolean;

  /**
   * Number of participants in this segment.
   */
  memberCount: number;

  /**
   * The segment name.
   */
  name: string;

  /**
   * Preset identifier for system segments.
   */
  presetId: string | null;

  /**
   * Whether the segment is system-defined or custom.
   */
  type: 'system' | 'custom';

  /**
   * When the segment was last updated.
   */
  updatedAt: string;
}

export interface ListSegmentsParams {
  /**
   * Page number (default: 1).
   */
  page?: number;

  /**
   * Number of results per page (default: 50, max: 100).
   */
  pageSize?: number;
}

/**
 * Array of segments.
 */
export type ListSegmentsResponse = Array<SegmentSummary>

export interface SegmentSummary {
  /**
   * The segment ID.
   */
  id: string;

  /**
   * Whether the segment is favorited.
   */
  isFavorited: boolean;

  /**
   * Number of participants in this segment.
   */
  memberCount: number;

  /**
   * The segment name.
   */
  name: string;

  /**
   * Preset identifier for system segments.
   */
  presetId: string | null;

  /**
   * Whether the segment is system-defined or custom.
   */
  type: 'system' | 'custom';
}

export interface SegmentCreateParams {
  /**
   * Filter configuration defining segment membership.
   */
  filters: SegmentCreateParams.Filters;

  /**
   * A description of the segment purpose.
   */
  description?: string;

  /**
   * Icon identifier for the segment (e.g. "Users", "Tag").
   */
  icon?: string;

  /**
   * Segment name. If omitted, an auto-generated name will be assigned.
   */
  name?: string;
}

export namespace SegmentCreateParams {
  /**
   * Filter configuration defining segment membership.
   */
  export interface Filters {
    /**
     * Array of filter rules. At least one rule is required.
     */
    rules: Array<Filters.UnionMember0 | Filters.UnionMember1 | Filters.UnionMember2 | Filters.UnionMember3 | Filters.UnionMember4 | Filters.UnionMember5>;

    /**
     * Optional date range filter.
     */
    dateRange?: Filters.DateRange;

    /**
     * Scope the segment to specific product IDs.
     */
    productIds?: Array<string>;
  }

  export namespace Filters {
    export interface UnionMember0 {
      /**
       * The analysis metric to filter on.
       */
      field: 'sentiment' | 'frustration' | 'struggle' | 'commercialIntent' | 'cqi' | 'rating';

      /**
       * Comparison operator.
       */
      operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';

      /**
       * Rule based on conversation analysis metrics.
       */
      type: 'analysis';

      /**
       * Threshold value for the metric (0-1 scale for most metrics).
       */
      value: number;
    }

    export interface UnionMember1 {
      /**
       * The flag to filter on.
       */
      field: 'jailbreakDetected' | 'hallucinationDetected' | 'userToxicityDetected' | 'modelToxicityDetected' | 'userBiasDetected' | 'modelBiasDetected' | 'missingCapabilityDetected';

      /**
       * Rule based on detected flags.
       */
      type: 'analysis_flag';

      /**
       * Whether the flag should be true or false.
       */
      value: boolean;
    }

    export interface UnionMember2 {
      /**
       * The property key (alphanumeric, dots, hyphens, underscores).
       */
      key: string;

      /**
       * Comparison operator.
       */
      operator: 'eq' | 'neq' | 'contains' | 'gt' | 'lt';

      /**
       * Rule based on user properties.
       */
      type: 'property';

      /**
       * Value to compare against.
       */
      value: string | number | boolean;
    }

    export interface UnionMember3 {
      /**
       * The conversation property key.
       */
      key: string;

      /**
       * Comparison operator.
       */
      operator: 'eq' | 'neq' | 'contains' | 'gt' | 'lt';

      /**
       * Rule based on conversation-level properties.
       */
      type: 'conversation_property';

      /**
       * Value to compare against.
       */
      value: string | number | boolean;
    }

    export interface UnionMember4 {
      /**
       * Comparison operator.
       */
      operator: 'gte' | 'lte';

      /**
       * Rule based on number of conversations.
       */
      type: 'conversation_count';

      /**
       * Conversation count threshold.
       */
      value: number;
    }

    export interface UnionMember5 {
      /**
       * Time comparison operator.
       */
      operator: 'within' | 'before';

      /**
       * Rule based on when the user was last active.
       */
      type: 'last_seen';

      /**
       * Time duration (e.g. "7d", "24h", "30m").
       */
      value: string;
    }

    /**
     * Optional date range filter.
     */
    export interface DateRange {
      /**
       * Start date (ISO 8601).
       */
      from?: string;

      /**
       * Preset date range.
       */
      preset?: '7d' | '30d' | '90d' | 'all';

      /**
       * End date (ISO 8601).
       */
      to?: string;
    }
  }
}

export interface SegmentListParams {
  /**
   * Page number (default: 1).
   */
  page?: number;

  /**
   * Number of results per page (default: 50, max: 100).
   */
  pageSize?: number;
}

export interface SegmentGetSegmentAnalyticsParams {
  /**
   * Filter analytics by product ID.
   */
  productId?: string;

  /**
   * Filter analytics by version ID.
   */
  versionId?: string;
}

export declare namespace Segments {
  export {
    type CreateSegmentParams as CreateSegmentParams,
    type CreateSegmentResponse as CreateSegmentResponse,
    type GetSegmentAnalyticsParams as GetSegmentAnalyticsParams,
    type GetSegmentAnalyticsResponse as GetSegmentAnalyticsResponse,
    type GetSegmentResponse as GetSegmentResponse,
    type ListSegmentsParams as ListSegmentsParams,
    type ListSegmentsResponse as ListSegmentsResponse,
    type SegmentSummary as SegmentSummary,
    type SegmentCreateParams as SegmentCreateParams,
    type SegmentListParams as SegmentListParams,
    type SegmentGetSegmentAnalyticsParams as SegmentGetSegmentAnalyticsParams
  };
}
