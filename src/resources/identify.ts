// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identify extends APIResource {
  /**
   * Create or Update User Profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.identify.createOrUpdateProfile({
   *     externalUserId: 'user-123',
   *     email: 'alice@example.com',
   *     metadata: { plan: 'premium' },
   *     name: 'Alice Example',
   *     phone: '+15551234567',
   *   });
   * ```
   */
  createOrUpdateProfile(
    body: IdentifyCreateOrUpdateProfileParams,
    options?: RequestOptions,
  ): APIPromise<IdentifyCreateOrUpdateProfileResponse> {
    return this._client.post('/identify', { body, ...options });
  }
}

export interface IdentifyCreateOrUpdateProfileResponse {
  participant: IdentifyCreateOrUpdateProfileResponse.Participant;

  success: boolean;
}

export namespace IdentifyCreateOrUpdateProfileResponse {
  export interface Participant {
    id: string;

    anonymized: boolean;

    createdAt: string;

    /**
     * The external ID of the participant
     */
    externalId: string;

    metadata: { [key: string]: unknown };

    tenantId: string;

    updatedAt: string;

    email?: string;

    name?: string;

    phone?: string;
  }
}

export interface IdentifyCreateOrUpdateProfileParams {
  externalUserId: string;

  anonymized?: boolean;

  email?: string;

  metadata?: { [key: string]: unknown };

  name?: string;

  phone?: string;
}

export declare namespace Identify {
  export {
    type IdentifyCreateOrUpdateProfileResponse as IdentifyCreateOrUpdateProfileResponse,
    type IdentifyCreateOrUpdateProfileParams as IdentifyCreateOrUpdateProfileParams,
  };
}
