// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage products
 */
export class Products extends APIResource {
  /**
   * List all products in your workspace. Returns a summary view of each product with
   * pagination support. Available on all plans.
   */
  list(query: ProductListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListProductsResponse> {
    return this._client.get('/products', { query, ...options });
  }

  /**
   * Get detailed configuration data for a specific product, including description,
   * optimization notes, team members, and quality index metric weights. Available on
   * all plans.
   */
  get(productID: string, options?: RequestOptions): APIPromise<GetProductResponse> {
    return this._client.get(path`/products/${productID}`, options);
  }

  /**
   * Get comprehensive analytics for a specific product, including sentiment
   * analysis, quality scores, safety metrics, topics, root causes, and actionable
   * insights.
   *
   * **Requires Growth+ plan or higher.**
   *
   * Rate limited based on your plan's `maxAnalysesPerHour`.
   */
  getProductAnalytics(productID: string, options?: RequestOptions): APIPromise<GetProductAnalyticsResponse> {
    return this._client.get(path`/products/${productID}/analytics`, options);
  }
}

export interface GetProductAnalyticsResponse {
  /**
   * Average change in user sentiment during conversations.
   */
  averageChangeInUserSentiment: GetProductAnalyticsResponse.AverageChangeInUserSentiment;

  /**
   * Average commercial intent detected.
   */
  averageCommercialIntent: GetProductAnalyticsResponse.AverageCommercialIntent;

  /**
   * Average conversation rating.
   */
  averageConversationRating: number | null;

  /**
   * Average frustration level detected.
   */
  averageFrustration: GetProductAnalyticsResponse.AverageFrustration;

  /**
   * Average struggle level detected.
   */
  averageStruggle: GetProductAnalyticsResponse.AverageStruggle;

  /**
   * Average user sentiment across conversations.
   */
  averageUserSentiment: GetProductAnalyticsResponse.AverageUserSentiment;

  /**
   * Dissatisfaction themes by topic.
   */
  dissatisfactionThemes: Array<GetProductAnalyticsResponse.DissatisfactionTheme>;

  /**
   * Hallucination detection counts.
   */
  hallucinationCount: GetProductAnalyticsResponse.HallucinationCount;

  /**
   * Jailbreak attempt counts.
   */
  jailbreakCount: GetProductAnalyticsResponse.JailbreakCount;

  /**
   * Extracted keywords.
   */
  keywords: Array<string>;

  /**
   * Model bias detection counts.
   */
  modelBiasCount: GetProductAnalyticsResponse.ModelBiasCount;

  /**
   * Model toxicity detection counts.
   */
  modelToxicityCount: GetProductAnalyticsResponse.ModelToxicityCount;

  /**
   * Quality pillar scores.
   */
  pillarScores: GetProductAnalyticsResponse.PillarScores | null;

  /**
   * Product Quality Index score.
   */
  productQualityIndex: number | null;

  /**
   * Number of conversations with a rating.
   */
  ratingCount: number;

  /**
   * Root cause breakdown.
   */
  rootCauseMix: Array<GetProductAnalyticsResponse.RootCauseMix>;

  /**
   * Top failing tools by failure rate.
   */
  topFailingTools: Array<GetProductAnalyticsResponse.TopFailingTool>;

  /**
   * Topic group aggregations.
   */
  topicGroups: Array<GetProductAnalyticsResponse.TopicGroup>;

  /**
   * Top topics discussed.
   */
  topics: Array<GetProductAnalyticsResponse.Topic>;

  /**
   * User bias detection counts.
   */
  userBiasCount: GetProductAnalyticsResponse.UserBiasCount;

  /**
   * User toxicity detection counts.
   */
  userToxicityCount: GetProductAnalyticsResponse.UserToxicityCount;

  /**
   * AI-generated insights.
   */
  insights?: unknown;
}

export namespace GetProductAnalyticsResponse {
  /**
   * Average change in user sentiment during conversations.
   */
  export interface AverageChangeInUserSentiment {
    label: string;

    score: number;
  }

  /**
   * Average commercial intent detected.
   */
  export interface AverageCommercialIntent {
    label: string;

    score: number;
  }

  /**
   * Average frustration level detected.
   */
  export interface AverageFrustration {
    label: string;

    score: number;
  }

  /**
   * Average struggle level detected.
   */
  export interface AverageStruggle {
    label: string;

    score: number;
  }

  /**
   * Average user sentiment across conversations.
   */
  export interface AverageUserSentiment {
    label: string;

    score: number;
  }

  export interface DissatisfactionTheme {
    avgCqi: number | null;

    avgFrustration: number;

    avgStruggle: number;

    count: number;

    topicCanonical: string;

    topicGroup: string;
  }

  /**
   * Hallucination detection counts.
   */
  export interface HallucinationCount {
    percentage: number;

    total: number;
  }

  /**
   * Jailbreak attempt counts.
   */
  export interface JailbreakCount {
    percentage: number;

    total: number;
  }

  /**
   * Model bias detection counts.
   */
  export interface ModelBiasCount {
    percentage: number;

    total: number;
  }

  /**
   * Model toxicity detection counts.
   */
  export interface ModelToxicityCount {
    percentage: number;

    total: number;
  }

  /**
   * Quality pillar scores.
   */
  export interface PillarScores {
    /**
     * Friction pillar score (0-1).
     */
    friction: number;

    /**
     * Growth pillar score (0-1).
     */
    growth: number;

    /**
     * Safety pillar score (0-1).
     */
    safety: number;

    /**
     * Satisfaction pillar score (0-1).
     */
    satisfaction: number;
  }

  export interface RootCauseMix {
    avgConfidence: number;

    cause: string;

    count: number;

    source: string;
  }

  export interface TopFailingTool {
    failureCount: number;

    failureRate: number;

    toolName: string;

    totalCalls: number;
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
   * User bias detection counts.
   */
  export interface UserBiasCount {
    percentage: number;

    total: number;
  }

  /**
   * User toxicity detection counts.
   */
  export interface UserToxicityCount {
    percentage: number;

    total: number;
  }
}

export interface GetProductResponse {
  /**
   * The product ID.
   */
  id: string;

  /**
   * Product color hex code.
   */
  color: string | null;

  /**
   * When the product was created (ISO 8601).
   */
  createdAt: string;

  /**
   * Product description.
   */
  description: string | null;

  /**
   * Product icon identifier.
   */
  icon: string | null;

  /**
   * Product team members.
   */
  members: Array<ProductMember>;

  /**
   * The product name.
   */
  name: string;

  /**
   * AI optimization notes for the product.
   */
  optimizationNotes: string | null;

  /**
   * Quality index metric weight configuration.
   */
  qualityIndexMetricWeights: Array<QualityIndexMetricWeight>;

  /**
   * When the product was last updated (ISO 8601).
   */
  updatedAt: string;

  /**
   * User privacy setting.
   */
  userPrivacy: string;
}

export interface ListProductsParams {
  /**
   * Page number (default 1).
   */
  page?: number;

  /**
   * Number of results per page (default 50, max 100).
   */
  pageSize?: number;
}

/**
 * Array of products.
 */
export type ListProductsResponse = Array<ProductSummary>

export interface ProductMember {
  /**
   * The member record ID.
   */
  id: string;

  /**
   * Avatar URL of the member.
   */
  avatarUrl: string | null;

  /**
   * The member role.
   */
  role: string;

  /**
   * The user ID.
   */
  userId: string;
}

export interface ProductSummary {
  /**
   * The product ID.
   */
  id: string;

  /**
   * Product color hex code.
   */
  color: string | null;

  /**
   * When the product was created (ISO 8601).
   */
  createdAt: string;

  /**
   * Product icon identifier.
   */
  icon: string | null;

  /**
   * The product name.
   */
  name: string;

  /**
   * When the product was last updated (ISO 8601).
   */
  updatedAt: string;
}

export interface QualityIndexMetricWeight {
  /**
   * Metric description.
   */
  description: string;

  /**
   * The metric key.
   */
  key: string;

  /**
   * Human-readable metric name.
   */
  name: string;

  /**
   * The metric weight (0-1).
   */
  weight: number;
}

export interface ProductListParams {
  /**
   * Page number (default 1).
   */
  page?: number;

  /**
   * Number of results per page (default 50, max 100).
   */
  pageSize?: number;
}

export declare namespace Products {
  export {
    type GetProductAnalyticsResponse as GetProductAnalyticsResponse,
    type GetProductResponse as GetProductResponse,
    type ListProductsParams as ListProductsParams,
    type ListProductsResponse as ListProductsResponse,
    type ProductMember as ProductMember,
    type ProductSummary as ProductSummary,
    type QualityIndexMetricWeight as QualityIndexMetricWeight,
    type ProductListParams as ProductListParams
  };
}
