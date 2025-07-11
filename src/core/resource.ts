// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GreenflashPublicAPI } from '../client';

export abstract class APIResource {
  protected _client: GreenflashPublicAPI;

  constructor(client: GreenflashPublicAPI) {
    this._client = client;
  }
}
