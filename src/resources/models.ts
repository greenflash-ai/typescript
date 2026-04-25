// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage AI models
 */
export class Models extends APIResource {
  /**
   * List all AI models in your workspace with summary information including usage
   * counts. Available on all plans.
   */
  list(query: ModelListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListModelsResponse> {
    return this._client.get('/models', { query, ...options });
  }

  /**
   * Get detailed information about a specific model including specs, benchmarks,
   * costs, and products using it. Available on all plans.
   */
  get(modelID: string, options?: RequestOptions): APIPromise<GetModelResponse> {
    return this._client.get(path`/models/${modelID}`, options);
  }

  /**
   * Get comprehensive analytics for a specific model including quality scores,
   * sentiment analysis, safety metrics, LLM-generated recommendations, and
   * time-series data.
   *
   * **Requires Growth+ plan or higher.**
   *
   * Rate limited based on your plan's `maxAnalysesPerHour`.
   */
  getModelAnalytics(modelID: string, query: ModelGetModelAnalyticsParams | null | undefined = {}, options?: RequestOptions): APIPromise<GetModelAnalyticsResponse> {
    return this._client.get(path`/models/${modelID}/analytics`, { query, ...options });
  }
}

export interface GetModelAnalyticsParams {
  /**
   * Time period for analytics data: 7d, 30d (default), or 90d.
   */
  period?: '7d' | '30d' | '90d';
}

export interface GetModelAnalyticsResponse {
  /**
   * Average change in user sentiment.
   */
  averageChangeInUserSentiment: GetModelAnalyticsResponse.AverageChangeInUserSentiment | null;

  /**
   * Average commercial intent.
   */
  averageCommercialIntent: GetModelAnalyticsResponse.AverageCommercialIntent | null;

  /**
   * Average conversation rating.
   */
  averageConversationRating: number | null;

  /**
   * Average frustration level.
   */
  averageFrustration: GetModelAnalyticsResponse.AverageFrustration | null;

  /**
   * Average struggle level.
   */
  averageStruggle: GetModelAnalyticsResponse.AverageStruggle | null;

  /**
   * Average user sentiment.
   */
  averageUserSentiment: GetModelAnalyticsResponse.AverageUserSentiment | null;

  /**
   * Average conversation quality index.
   */
  avgConversationQualityIndex: number | null;

  /**
   * Average friction score.
   */
  avgFrictionScore: number | null;

  /**
   * Average growth score.
   */
  avgGrowthScore: number | null;

  /**
   * Average safety score.
   */
  avgSafetyScore: number | null;

  /**
   * Average satisfaction score.
   */
  avgSatisfactionScore: number | null;

  /**
   * Total conversation count.
   */
  conversationCount: number;

  /**
   * Time-series data points for the requested period.
   */
  dataPoints: Array<GetModelAnalyticsResponse.DataPoint>;

  /**
   * Hallucination detection counts.
   */
  hallucinationCount: GetModelAnalyticsResponse.HallucinationCount | null;

  /**
   * Jailbreak detection counts.
   */
  jailbreakCount: GetModelAnalyticsResponse.JailbreakCount | null;

  /**
   * Total message count.
   */
  messageCount: number;

  /**
   * Model bias detection counts.
   */
  modelBiasCount: GetModelAnalyticsResponse.ModelBiasCount | null;

  /**
   * Model toxicity detection counts.
   */
  modelToxicityCount: GetModelAnalyticsResponse.ModelToxicityCount | null;

  /**
   * LLM-generated recommendations and health assessment.
   */
  recommendations: GetModelAnalyticsResponse.Recommendations | null;

  /**
   * User bias detection counts.
   */
  userBiasCount: GetModelAnalyticsResponse.UserBiasCount | null;

  /**
   * User toxicity detection counts.
   */
  userToxicityCount: GetModelAnalyticsResponse.UserToxicityCount | null;
}

export namespace GetModelAnalyticsResponse {
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
   * Average user sentiment.
   */
  export interface AverageUserSentiment {
    label: string;

    score: number;
  }

  export interface DataPoint {
    /**
     * Average conversation quality index.
     */
    avgConversationQualityIndex: number | null;

    /**
     * Average friction score.
     */
    avgFrictionScore: number | null;

    /**
     * Average growth score.
     */
    avgGrowthScore: number | null;

    /**
     * Average safety score.
     */
    avgSafetyScore: number | null;

    /**
     * Average satisfaction score.
     */
    avgSatisfactionScore: number | null;

    /**
     * Number of conversations.
     */
    conversationCount: number;

    /**
     * Data point date.
     */
    date: string;

    /**
     * Number of messages.
     */
    messageCount: number;
  }

  /**
   * Hallucination detection counts.
   */
  export interface HallucinationCount {
    percentage: number;

    total: number;
  }

  /**
   * Jailbreak detection counts.
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
   * LLM-generated recommendations and health assessment.
   */
  export interface Recommendations {
    /**
     * Issues detected via rules-based analysis.
     */
    detectedIssues: Array<Recommendations.DetectedIssue>;

    /**
     * Overall health level.
     */
    healthLevel: 'healthy' | 'needs_attention' | 'critical';

    /**
     * Actionable recommendations.
     */
    recommendations: Array<Recommendations.Recommendation>;

    /**
     * Identified model strengths.
     */
    strengths: Array<string>;

    /**
     * Overall summary of model health.
     */
    summary: string;
  }

  export namespace Recommendations {
    export interface DetectedIssue {
      id: string;

      severity: 'critical' | 'warning' | 'info';

      title: string;
    }

    export interface Recommendation {
      action: string;

      category: 'model_switch' | 'cost_optimization' | 'use_case_fit' | 'prompt_optimization_link';

      evidence: Recommendation.Evidence;

      expectedImpact: Array<string>;

      priority: 'high' | 'medium' | 'low';

      rationale: Recommendation.Rationale;

      title: string;
    }

    export namespace Recommendation {
      export interface Evidence {
        exampleSnippets: Array<string>;
      }

      export interface Rationale {
        observedPattern: string;

        whyThisMatters: string;

        tradeoff?: string;
      }
    }
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

export interface GetModelResponse {
  /**
   * The model ID.
   */
  id: string;

  /**
   * The canonical model identifier.
   */
  canonicalId: string;

  /**
   * Coding benchmark index.
   */
  codingIndex: number | null;

  /**
   * Context window size.
   */
  contextWindow: number | null;

  /**
   * When the model was created.
   */
  createdAt: string;

  /**
   * Model description.
   */
  description: string | null;

  /**
   * Human-readable model name.
   */
  displayName: string;

  /**
   * When the model expires, if applicable.
   */
  expirationDate: string | null;

  /**
   * Model family grouping.
   */
  family: string | null;

  /**
   * GPQA benchmark score.
   */
  gpqa: number | null;

  /**
   * Cost per 1,000 input tokens.
   */
  inputCostPer1k: number | null;

  /**
   * Supported input modalities.
   */
  inputModalities: Array<string> | null;

  /**
   * Intelligence benchmark index.
   */
  intelligenceIndex: number | null;

  /**
   * When the model was last used.
   */
  lastUsedAt: string | null;

  /**
   * Math benchmark index.
   */
  mathIndex: number | null;

  /**
   * MMLU-Pro benchmark score.
   */
  mmluPro: number | null;

  /**
   * Cost per 1,000 output tokens.
   */
  outputCostPer1k: number | null;

  /**
   * Supported output modalities.
   */
  outputModalities: Array<string> | null;

  /**
   * Products using this model.
   */
  products: Array<ModelProductUsage>;

  /**
   * Model provider (e.g. OpenAI, Anthropic).
   */
  provider: string;

  /**
   * Model data source.
   */
  source: string;

  /**
   * Supported generation parameters.
   */
  supportedParameters: Array<string> | null;

  /**
   * Number of conversations using this model.
   */
  usageCount: number;
}

export interface ListModelsParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (max 100).
   */
  pageSize?: number;
}

/**
 * Array of model summaries.
 */
export type ListModelsResponse = Array<ModelSummary>

export interface ModelProductUsage {
  /**
   * The product ID.
   */
  id: string;

  /**
   * Number of conversations in this product.
   */
  conversationCount: number;

  /**
   * Product icon.
   */
  icon: string | null;

  /**
   * Product name.
   */
  name: string;
}

export interface ModelSummary {
  /**
   * The model ID.
   */
  id: string;

  /**
   * The canonical model identifier.
   */
  canonicalId: string;

  /**
   * Human-readable model name.
   */
  displayName: string;

  /**
   * Model family grouping.
   */
  family: string | null;

  /**
   * When the model was last used.
   */
  lastUsedAt: string | null;

  /**
   * Model provider (e.g. OpenAI, Anthropic).
   */
  provider: string;

  /**
   * Number of conversations using this model.
   */
  usageCount: number;
}

export interface ModelListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (max 100).
   */
  pageSize?: number;
}

export interface ModelGetModelAnalyticsParams {
  /**
   * Time period for analytics data: 7d, 30d (default), or 90d.
   */
  period?: '7d' | '30d' | '90d';
}

export declare namespace Models {
  export {
    type GetModelAnalyticsParams as GetModelAnalyticsParams,
    type GetModelAnalyticsResponse as GetModelAnalyticsResponse,
    type GetModelResponse as GetModelResponse,
    type ListModelsParams as ListModelsParams,
    type ListModelsResponse as ListModelsResponse,
    type ModelProductUsage as ModelProductUsage,
    type ModelSummary as ModelSummary,
    type ModelListParams as ModelListParams,
    type ModelGetModelAnalyticsParams as ModelGetModelAnalyticsParams
  };
}
