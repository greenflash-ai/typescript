// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Greenflash } from '../client';

export abstract class APIResource {
  protected _client: Greenflash;

  constructor(client: Greenflash) {
    this._client = client;
  }
}
