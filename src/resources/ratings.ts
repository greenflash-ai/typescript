// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ratings extends APIResource {
  /**
   * Capture Conversation or Message Ratings
   *
   * @example
   * ```ts
   * const genericSuccess = await client.ratings.create({
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
  create(body: RatingCreateParams, options?: RequestOptions): APIPromise<GenericSuccess> {
    return this._client.post('/ratings', { body, ...options });
  }
}

export interface GenericSuccess {
  success: boolean;

  conversationId?: string;

  systemPromptComponentIds?: Array<string>;

  systemPromptTemplateId?: string;
}

export interface RatingCreateParams {
  rating: number;

  ratingMax: number;

  ratingMin: number;

  conversationId?: string;

  externalConversationId?: string;

  feedback?: string;

  messageId?: string;

  ratedAt?: string;
}

export declare namespace Ratings {
  export { type GenericSuccess as GenericSuccess, type RatingCreateParams as RatingCreateParams };
}
