// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ratings extends APIResource {
  /**
   * Capture Conversation or Message Ratings
   *
   * @example
   * ```ts
   * const genericSuccess = await client.ratings.log({
   *   rating: 4,
   *   ratingMax: 5,
   *   ratingMin: 1,
   *   conversationId: 'conv-0001',
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
  export { type RatingLogParams as RatingLogParams };
}
