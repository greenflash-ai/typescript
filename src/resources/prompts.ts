// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Prompts extends APIResource {
  /**
   * Create a new immutable prompt with one or more components. Supports
   * handlebars-style variables like `{{variable_name}}` in component content.
   *
   * **Versioning behavior:**
   *
   * - Creates prompt + components (immutable)
   * - Creates a new version with fingerprinting (idempotent)
   * - Version is created but NOT activated
   * - Activation happens separately via UI or when used by Messages API
   *
   * This allows you to create and prepare prompts without affecting production.
   *
   * @example
   * ```ts
   * const createPromptResponse = await client.prompts.create({
   *   components: [
   *     {
   *       content:
   *         'You are a helpful assistant for {{productName}}. Greet {{userName}} warmly.',
   *       type: '',
   *       source: 'customer',
   *       name: 'Base Instructions',
   *       isDynamic: false,
   *     },
   *   ],
   *   name: 'Customer Support Prompt',
   *   productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   role: 'x',
   *   description: 'Standard customer support  prompt',
   *   externalPromptId: 'support-v1',
   * });
   * ```
   */
  create(body: PromptCreateParams, options?: RequestOptions): APIPromise<CreatePromptResponse> {
    return this._client.post('/prompts', { body, ...options });
  }

  /**
   * Update a prompt. Creates a new immutable row (never mutates existing).
   *
   * **Versioning behavior:**
   *
   * - Always creates a new row if components are provided
   * - Creates a new version with fingerprinting (idempotent)
   * - Version is created but NOT activated
   * - Activation happens separately via UI
   * - Old versions continue pointing to old prompts (preserves history)
   *
   * If only metadata (name, description) is updated without components, updates the
   * existing prompt in-place and does not create a new version.
   *
   * @example
   * ```ts
   * const updatePromptResponse = await client.prompts.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     components: [
   *       {
   *         content:
   *           'You are a helpful assistant for {{productName}}. Always be polite to {{userName}}.',
   *         type: '',
   *         source: 'customer',
   *         name: 'Base Instructions V2',
   *       },
   *     ],
   *     description: 'Updated description',
   *     name: 'Updated Customer Support Prompt',
   *   },
   * );
   * ```
   */
  update(id: string, body: PromptUpdateParams, options?: RequestOptions): APIPromise<UpdatePromptResponse> {
    return this._client.put(path`/prompts/${id}`, { body, ...options });
  }

  /**
   * List all prompts for your organization. By default, returns all prompts (both
   * active and inactive versions) across all products. Use `versionId` to filter by
   * a specific version, or `productId` to filter by a specific product. Supports
   * both cursor-based pagination (using `limit` and `cursor`) and page-based
   * pagination (using `page` and `pageSize`). The response includes a Link header
   * with pagination navigation URLs following RFC 8288. Returns slimmed down data
   * with only component IDs (use GET /prompts/:id for full details).
   *
   * @example
   * ```ts
   * const listPromptsResponse = await client.prompts.list();
   * ```
   */
  list(
    query: PromptListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPromptsResponse> {
    return this._client.get('/prompts', { query, ...options });
  }

  /**
   * Archive (soft delete) a prompt. Sets the `archived_at` timestamp.
   *
   * **Safety constraints:**
   *
   * - BLOCKS archiving if the prompt is referenced by any active version
   * - You must promote a different version first before archiving
   * - Historical versions continue to reference archived prompts (preserves message
   *   history)
   * - Archived prompts can still be retrieved for historical data
   *
   * @example
   * ```ts
   * const deletePromptResponse = await client.prompts.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DeletePromptResponse> {
    return this._client.delete(path`/prompts/${id}`, options);
  }

  /**
   * Retrieve a prompt with optional variable interpolation. Supports
   * handlebars-style variables like `{{variable_name}}` in the prompt content. Pass
   * query parameters to interpolate variables.
   *
   * **Example:** `/prompts/abc-123?userName=Alice&productName=Premium` will replace
   * `{{userName}}` with "Alice" and `{{productName}}` with "Premium" in the composed
   * prompt.
   *
   * @example
   * ```ts
   * const getPromptResponse = await client.prompts.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<GetPromptResponse> {
    return this._client.get(path`/prompts/${id}`, options);
  }
}

export interface ComponentInput {
  /**
   * The content of the component.
   */
  content: string;

  /**
   * The Greenflash component ID.
   */
  componentId?: string;

  /**
   * Your external identifier for the component.
   */
  externalComponentId?: string;

  /**
   * Whether the component content changes dynamically.
   */
  isDynamic?: boolean;

  /**
   * Component name.
   */
  name?: string;

  /**
   * Component source: customer, participant, greenflash, or agent.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';

  /**
   * Component type: system, endUser, userModified, rag, or agent.
   */
  type?: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';
}

export interface ComponentUpdate {
  /**
   * Updated component content.
   */
  content: string;

  /**
   * The Greenflash component ID.
   */
  componentId?: string;

  /**
   * External component identifier.
   */
  externalComponentId?: string;

  /**
   * Dynamic flag.
   */
  isDynamic?: boolean;

  /**
   * Component name.
   */
  name?: string;

  /**
   * Component source.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';

  /**
   * Component type.
   */
  type?: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';
}

export interface CreatePromptParams {
  /**
   * Array of component objects.
   */
  components: Array<ComponentInput>;

  /**
   * Prompt name.
   */
  name: string;

  /**
   * Product this prompt will map to.
   */
  productId: string;

  /**
   * Role key in the product mapping (e.g. "agent tool").
   */
  role: string;

  /**
   * Prompt description.
   */
  description?: string;

  /**
   * Your external identifier for the prompt.
   */
  externalPromptId?: string;

  /**
   * Prompt source.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';
}

export interface CreatePromptResponse {
  /**
   * The IDs of the created prompt components.
   */
  componentIds: Array<string>;

  /**
   * The created prompt ID.
   */
  promptId: string;

  /**
   * The created version ID. Version is created but not activated (activation happens
   * via UI or Messages API).
   */
  versionId: string;

  /**
   * The external prompt ID.
   */
  externalPromptId?: string;
}

export interface DeletePromptResponse {
  /**
   * ISO 8601 timestamp when archived.
   */
  archivedAt: string;

  /**
   * The archived prompt ID.
   */
  promptId: string;

  /**
   * The external prompt ID.
   */
  externalPromptId?: string;
}

/**
 * Query parameters for getting a prompt. All additional query parameters are
 * treated as variables for handlebars interpolation.
 */
export interface GetPromptParams {
  /**
   * The prompt identifier. Can be: internal prompt ID (UUID), or externalPromptId
   * (your custom ID).
   */
  id: string;

  [k: string]: string | undefined;
}

export interface GetPromptResponse {
  /**
   * The prompt with variables interpolated from query parameters.
   */
  composedPrompt: string;

  /**
   * The full prompt object with components.
   */
  prompt: Prompt;
}

export interface ListPromptsParams {
  /**
   * Filter to only show prompts that are part of active versions. When true, only
   * returns prompts associated with versions where isActive=true.
   */
  activeOnly?: boolean;

  /**
   * Include archived prompts.
   */
  includeArchived?: boolean;

  /**
   * Page size limit (cursor-based pagination). Use either limit/cursor OR
   * page/pageSize, not both.
   */
  limit?: number;

  /**
   * Page number (page-based pagination). Use either page/pageSize OR limit/cursor,
   * not both.
   */
  page?: number;

  /**
   * Number of items per page (page-based pagination). Use either page/pageSize OR
   * limit/cursor, not both.
   */
  pageSize?: number;

  /**
   * Filter prompts by product ID.
   */
  productId?: string;

  /**
   * Filter prompts by specific version ID.
   */
  versionId?: string;
}

/**
 * Array of prompts.
 */
export type ListPromptsResponse = Array<SlimPrompt>;

/**
 * The full prompt object with components.
 */
export interface Prompt {
  /**
   * The Greenflash prompt ID.
   */
  id: string;

  /**
   * ISO 8601 timestamp when archived, or null if active.
   */
  archivedAt: string | null;

  /**
   * Array of prompt components that make up this prompt.
   */
  components: Array<PromptComponent>;

  /**
   * ISO 8601 timestamp when created.
   */
  createdAt: string;

  /**
   * Prompt description.
   */
  description: string | null;

  /**
   * Prompt name.
   */
  name: string | null;

  /**
   * The product ID this prompt is associated with.
   */
  productId: string | null;

  /**
   * Prompt source.
   */
  source: string | null;

  /**
   * ISO 8601 timestamp when last updated.
   */
  updatedAt: string;

  /**
   * Your external identifier for the prompt.
   */
  externalPromptId?: string;
}

export interface PromptComponent {
  /**
   * The Greenflash component ID.
   */
  id: string;

  /**
   * The content of the component.
   */
  content: string;

  /**
   * ISO 8601 timestamp when created.
   */
  createdAt: string;

  /**
   * Whether the component content changes dynamically.
   */
  isDynamic: boolean | null;

  /**
   * Component name.
   */
  name: string | null;

  /**
   * Component source (e.g., customer, participant, greenflash).
   */
  source: string;

  /**
   * Component type (e.g., system, endUser, rag, agent).
   */
  type: string;

  /**
   * ISO 8601 timestamp when last updated.
   */
  updatedAt: string;

  /**
   * Your external identifier for the component.
   */
  externalComponentId?: string;
}

export interface SlimPrompt {
  /**
   * The Greenflash prompt ID.
   */
  id: string;

  /**
   * ISO 8601 timestamp when archived, or null if active.
   */
  archivedAt: string | null;

  /**
   * Array of prompt component IDs that make up this prompt.
   */
  components: Array<SlimPromptComponent>;

  /**
   * ISO 8601 timestamp when created.
   */
  createdAt: string;

  /**
   * Your external identifier for the prompt.
   */
  externalPromptId: string | null;

  /**
   * Prompt name.
   */
  name: string | null;

  /**
   * The product ID this prompt is associated with.
   */
  productId: string | null;

  /**
   * ISO 8601 timestamp when last updated.
   */
  updatedAt: string;

  /**
   * The version ID this prompt is associated with, or null if the prompt is not part
   * of any version.
   */
  versionId: string | null;
}

export interface SlimPromptComponent {
  /**
   * The Greenflash component ID.
   */
  id: string;

  /**
   * Your external identifier for the component.
   */
  externalComponentId: string | null;
}

export interface UpdatePromptParams {
  /**
   * Updated components (if provided, creates new immutable prompt and version).
   */
  components?: Array<ComponentUpdate>;

  /**
   * Updated prompt description.
   */
  description?: string;

  /**
   * Updated prompt name.
   */
  name?: string;

  /**
   * Role key in the product mapping.
   */
  role?: string;

  /**
   * Prompt source.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';
}

export interface UpdatePromptResponse {
  /**
   * The updated prompt ID.
   */
  promptId: string;

  /**
   * The version ID. Version is created/updated but not activated (activation happens
   * via UI). Null if only metadata was updated without components.
   */
  versionId: string | null;

  /**
   * The external prompt ID.
   */
  externalPromptId?: string;
}

export interface PromptCreateParams {
  /**
   * Array of component objects.
   */
  components: Array<ComponentInput>;

  /**
   * Prompt name.
   */
  name: string;

  /**
   * Product this prompt will map to.
   */
  productId: string;

  /**
   * Role key in the product mapping (e.g. "agent tool").
   */
  role: string;

  /**
   * Prompt description.
   */
  description?: string;

  /**
   * Your external identifier for the prompt.
   */
  externalPromptId?: string;

  /**
   * Prompt source.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';
}

export interface PromptUpdateParams {
  /**
   * Updated components (if provided, creates new immutable prompt and version).
   */
  components?: Array<ComponentUpdate>;

  /**
   * Updated prompt description.
   */
  description?: string;

  /**
   * Updated prompt name.
   */
  name?: string;

  /**
   * Role key in the product mapping.
   */
  role?: string;

  /**
   * Prompt source.
   */
  source?: 'customer' | 'participant' | 'greenflash' | 'agent';
}

export interface PromptListParams {
  /**
   * Filter to only show prompts that are part of active versions. When true, only
   * returns prompts associated with versions where isActive=true.
   */
  activeOnly?: boolean;

  /**
   * Include archived prompts.
   */
  includeArchived?: boolean;

  /**
   * Page size limit (cursor-based pagination). Use either limit/cursor OR
   * page/pageSize, not both.
   */
  limit?: number;

  /**
   * Page number (page-based pagination). Use either page/pageSize OR limit/cursor,
   * not both.
   */
  page?: number;

  /**
   * Number of items per page (page-based pagination). Use either page/pageSize OR
   * limit/cursor, not both.
   */
  pageSize?: number;

  /**
   * Filter prompts by product ID.
   */
  productId?: string;

  /**
   * Filter prompts by specific version ID.
   */
  versionId?: string;
}

export declare namespace Prompts {
  export {
    type ComponentInput as ComponentInput,
    type ComponentUpdate as ComponentUpdate,
    type CreatePromptParams as CreatePromptParams,
    type CreatePromptResponse as CreatePromptResponse,
    type DeletePromptResponse as DeletePromptResponse,
    type GetPromptParams as GetPromptParams,
    type GetPromptResponse as GetPromptResponse,
    type ListPromptsParams as ListPromptsParams,
    type ListPromptsResponse as ListPromptsResponse,
    type Prompt as Prompt,
    type PromptComponent as PromptComponent,
    type SlimPrompt as SlimPrompt,
    type SlimPromptComponent as SlimPromptComponent,
    type UpdatePromptParams as UpdatePromptParams,
    type UpdatePromptResponse as UpdatePromptResponse,
    type PromptCreateParams as PromptCreateParams,
    type PromptUpdateParams as PromptUpdateParams,
    type PromptListParams as PromptListParams,
  };
}
