// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ratings extends APIResource {
  /**
   * Record user feedback and ratings for conversations or individual messages.
   *
   * Use this endpoint to collect feedback about response quality or overall
   * conversation experiences. You can rate either a specific message (using
   * `messageId` or `externalMessageId`) or an entire conversation (using
   * `conversationId` or `externalConversationId`).
   *
   * @example
   * ```ts
   * const logRatingResponse = await client.ratings.log({
   *   productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   rating: 4,
   *   ratingMax: 5,
   *   ratingMin: 1,
   *   externalConversationId:
   *     '123e4567-e89b-12d3-a456-426614174000',
   *   feedback: 'Helpful response!',
   *   ratedAt: '2025-07-09T09:00:00Z',
   * });
   * ```
   */
  log(body: RatingLogParams, options?: RequestOptions): APIPromise<LogRatingResponse> {
    return this._client.post('/ratings', { body, ...options });
  }
}

/**
 * Request payload for logging ratings.
 */
export interface LogRatingParams {
  /**
   * The Greenflash product ID to rate.
   */
  productId: string;

  /**
   * The rating value. Must be between ratingMin and ratingMax (inclusive).
   */
  rating: number;

  /**
   * The maximum possible rating value (e.g., 5 for a 1-5 scale).
   */
  ratingMax: number;

  /**
   * The minimum possible rating value (e.g., 1 for a 1-5 scale).
   */
  ratingMin: number;

  /**
   * The Greenflash conversation ID to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  conversationId?: string;

  /**
   * Your external conversation identifier to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your external message identifier to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  externalMessageId?: string;

  /**
   * Optional text feedback accompanying the rating.
   */
  feedback?: string;

  /**
   * The Greenflash message ID to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  messageId?: string;

  /**
   * When the rating was given. Defaults to current time if not provided.
   */
  ratedAt?: string;
}

/**
 * Success response for rating logging.
 */
export interface LogRatingResponse {
  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export interface RatingLogParams {
  /**
   * The Greenflash product ID to rate.
   */
  productId: string;

  /**
   * The rating value. Must be between ratingMin and ratingMax (inclusive).
   */
  rating: number;

  /**
   * The maximum possible rating value (e.g., 5 for a 1-5 scale).
   */
  ratingMax: number;

  /**
   * The minimum possible rating value (e.g., 1 for a 1-5 scale).
   */
  ratingMin: number;

  /**
   * The Greenflash conversation ID to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  conversationId?: string;

  /**
   * Your external conversation identifier to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your external message identifier to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  externalMessageId?: string;

  /**
   * Optional text feedback accompanying the rating.
   */
  feedback?: string;

  /**
   * The Greenflash message ID to rate. Either conversationId,
   * externalConversationId, messageId, or externalMessageId must be provided.
   */
  messageId?: string;

  /**
   * When the rating was given. Defaults to current time if not provided.
   */
  ratedAt?: string;
}

export declare namespace Ratings {
  export {
    type LogRatingParams as LogRatingParams,
    type LogRatingResponse as LogRatingResponse,
    type RatingLogParams as RatingLogParams,
  };
}
