// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conversions extends APIResource {
  /**
   * The `/conversions` endpoint allows you to record business conversion events.
   * This is useful for tracking user actions that lead to conversions, such as
   * purchases, signups, or upgrades.
   *
   * You can record conversions for either a specific conversation (using
   * `conversationId`) or an entire conversation (using either
   * `externalConversationId`).
   *
   * @example
   * ```ts
   * const response = await client.conversions.log({
   *   action: 'purchase',
   *   externalUserId: 'user-123',
   *   value: '99.99',
   *   valueType: 'currency',
   *   conversationId: '123e4567-e89b-12d3-a456-426614174000',
   *   convertedAt: '2025-07-09T09:15:00Z',
   *   externalConversationId: 'conv-456',
   *   metadata: { sku: 'ABC-123' },
   *   productId: '123e4567-e89b-12d3-a456-426614174000',
   *   projectId: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  log(body: ConversionLogParams, options?: RequestOptions): APIPromise<ConversionLogResponse> {
    return this._client.post('/conversions', { body, ...options });
  }
}

export interface ConversionLogResponse extends MessagesAPI.GenericSuccess {
  /**
   * The unique identifier for the conversion record that was created.
   */
  conversionId: string;
}

export interface ConversionLogParams {
  /**
   * The action or event name that represents the conversion (e.g., "purchase",
   * "signup", "upgrade").
   */
  action: string;

  /**
   * The external ID of the user who performed the conversion action.
   */
  externalUserId: string;

  /**
   * The value of the conversion. Interpretation depends on valueType.
   */
  value: string;

  /**
   * The type of the value. Must be one of: 'currency', 'numeric', or 'text'.
   */
  valueType: 'currency' | 'numeric' | 'text';

  /**
   * The internal ID of the conversation that led to the conversion.
   */
  conversationId?: string;

  /**
   * The timestamp when the conversion occurred. If not provided, the current time
   * will be used.
   */
  convertedAt?: string;

  /**
   * Your external identifier for the conversation that led to the conversion.
   */
  externalConversationId?: string;

  /**
   * Additional metadata about the conversion as key-value pairs.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The ID of the product associated with this conversion.
   */
  productId?: string;

  /**
   * The ID of the project associated with this conversion.
   */
  projectId?: string;
}

export declare namespace Conversions {
  export {
    type ConversionLogResponse as ConversionLogResponse,
    type ConversionLogParams as ConversionLogParams,
  };
}
