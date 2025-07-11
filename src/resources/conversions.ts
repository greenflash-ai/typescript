// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conversions extends APIResource {
  /**
   * Create Business Conversion Events
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
  conversionId: string;
}

export interface ConversionLogParams {
  action: string;

  externalUserId: string;

  value: string;

  valueType: 'currency' | 'numeric' | 'text';

  conversationId?: string;

  convertedAt?: string;

  externalConversationId?: string;

  metadata?: { [key: string]: unknown };

  productId?: string;

  projectId?: string;
}

export declare namespace Conversions {
  export {
    type ConversionLogResponse as ConversionLogResponse,
    type ConversionLogParams as ConversionLogParams,
  };
}
