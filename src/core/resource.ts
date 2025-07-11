// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GreenflashAPI } from '../client';

export abstract class APIResource {
  protected _client: GreenflashAPI;

  constructor(client: GreenflashAPI) {
    this._client = client;
  }
}
