// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conversions extends APIResource {
  /**
   * Track important business events like purchases, signups, or upgrades that result
   * from your conversations.
   *
   * Use this endpoint to record when users take valuable actions after interacting
   * with your AI. You can link conversions to specific conversations using either
   * the internal `conversationId` or your own `externalConversationId`.
   *
   * @example
   * ```ts
   * const logConversionResponse = await client.conversions.log({
   *   action: 'purchase',
   *   externalUserId: 'user-123',
   *   value: '99.99',
   *   valueType: 'currency',
   *   conversationId: '123e4567-e89b-12d3-a456-426614174000',
   *   convertedAt: '2025-07-09T09:15:00Z',
   *   externalConversationId: 'conv-456',
   *   metadata: { sku: 'ABC-123' },
   *   productId: '123e4567-e89b-12d3-a456-426614174001',
   * });
   * ```
   */
  log(body: ConversionLogParams, options?: RequestOptions): APIPromise<LogConversionResponse> {
    return this._client.post('/conversions', { body, ...options });
  }
}

/**
 * Request payload for logging conversions.
 */
export interface LogConversionParams {
  /**
   * The type of conversion (e.g., "purchase", "signup", "upgrade").
   */
  action: string;

  /**
   * Your unique identifier for the user who completed the conversion.
   */
  externalUserId: string;

  /**
   * The conversion value (interpretation depends on valueType).
   */
  value: string;

  /**
   * The type of value: currency (e.g., "$99.99"), numeric (e.g., "5"), or text.
   */
  valueType: 'currency' | 'numeric' | 'text';

  /**
   * The Greenflash conversation ID that led to this conversion.
   */
  conversationId?: string;

  /**
   * When the conversion occurred. Defaults to current time if not provided.
   */
  convertedAt?: string;

  /**
   * Your external conversation identifier that led to this conversion.
   */
  externalConversationId?: string;

  /**
   * Additional data about the conversion.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The Greenflash product associated with this conversion.
   */
  productId?: string;
}

/**
 * Success response for conversion logging.
 */
export interface LogConversionResponse {
  /**
   * The unique Greenflash ID of the conversion record that was created.
   */
  conversionId: string;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export interface ConversionLogParams {
  /**
   * The type of conversion (e.g., "purchase", "signup", "upgrade").
   */
  action: string;

  /**
   * Your unique identifier for the user who completed the conversion.
   */
  externalUserId: string;

  /**
   * The conversion value (interpretation depends on valueType).
   */
  value: string;

  /**
   * The type of value: currency (e.g., "$99.99"), numeric (e.g., "5"), or text.
   */
  valueType: 'currency' | 'numeric' | 'text';

  /**
   * The Greenflash conversation ID that led to this conversion.
   */
  conversationId?: string;

  /**
   * When the conversion occurred. Defaults to current time if not provided.
   */
  convertedAt?: string;

  /**
   * Your external conversation identifier that led to this conversion.
   */
  externalConversationId?: string;

  /**
   * Additional data about the conversion.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The Greenflash product associated with this conversion.
   */
  productId?: string;
}

export declare namespace Conversions {
  export {
    type LogConversionParams as LogConversionParams,
    type LogConversionResponse as LogConversionResponse,
    type ConversionLogParams as ConversionLogParams,
  };
}
