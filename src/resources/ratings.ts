// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ratings extends APIResource {
  /**
   * The `/ratings` endpoint allows you to record user ratings for conversations or
   * individual messages. This is useful for collecting feedback about the quality of
   * responses or overall conversation experiences.
   *
   * You can rate either a specific message (using `messageId`) or an entire
   * conversation (using either `conversationId` or `externalConversationId`).
   *
   * @example
   * ```ts
   * const genericSuccess = await client.ratings.log({
   *   rating: 4,
   *   ratingMax: 5,
   *   ratingMin: 1,
   *   conversationId: '123e4567-e89b-12d3-a456-426614174000',
   *   feedback: 'Helpful response!',
   *   messageId: 'msg-001',
   *   ratedAt: '2025-07-09T09:00:00Z',
   * });
   * ```
   */
  log(body: RatingLogParams, options?: RequestOptions): APIPromise<MessagesAPI.GenericSuccess> {
    return this._client.post('/ratings', { body, ...options });
  }
}

export interface RatingLogParams {
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
   * The internal ID of the conversation to rate. Either conversationId,
   * externalConversationId, or messageId must be provided.
   */
  conversationId?: string;

  /**
   * Your external identifier for the conversation to rate. Either conversationId,
   * externalConversationId, or messageId must be provided.
   */
  externalConversationId?: string;

  /**
   * Optional text feedback accompanying the rating.
   */
  feedback?: string;

  /**
   * The ID of a specific message to rate. Either conversationId,
   * externalConversationId, or messageId must be provided.
   */
  messageId?: string;

  /**
   * The timestamp when the rating was given. If not provided, the current time will
   * be used.
   */
  ratedAt?: string;
}

export declare namespace Ratings {
  export { type RatingLogParams as RatingLogParams };
}
