// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Prompts extends APIResource {
  /**
   * Create a new prompt that you can use across your AI applications. Build prompts
   * from one or more components, and use handlebars-style variables like
   * `{{userName}}` for personalization.
   *
   * **Safe by Default:** Creating a prompt creates a new version but doesn't
   * activate it. Your production prompts stay unchanged until you explicitly
   * activate the new version (via the UI or when you reference it in the Messages
   * API). This lets you test and prepare new prompts without risk.
   *
   * **Versioning:** Every prompt is immutable and versioned with fingerprinting, so
   * you can safely iterate and track changes over time.
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
   * Update a prompt with new content or properties. Your production prompt stays
   * safe—updates create new versions without affecting what's currently active.
   *
   * **How it Works:**
   *
   * - **Updating components:** Creates a new immutable version with fingerprinting.
   *   The new version is created but NOT activated, so you can test before going
   *   live.
   * - **Updating only properties (name/description):** Updates the prompt in-place
   *   without creating a new version.
   *
   * **Version Safety:** Old versions always point to their original prompts,
   * preserving your message history and allowing you to roll back if needed.
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
   * Browse through all your prompts to see what you're using across your AI
   * applications. Returns all prompts by default (both active and inactive
   * versions), or filter by product or version to narrow down the results.
   *
   * **Filtering & Pagination:**
   *
   * - Filter by `productId` to see prompts for a specific product
   * - Filter by `versionId` to see a specific version
   * - Choose your pagination style: cursor-based (`limit` + `cursor`) or page-based
   *   (`page` + `pageSize`)
   * - Check the `Link` header for easy pagination navigation
   *
   * **Note:** This returns lightweight data with just component IDs. Use
   * `GET /prompts/:id` to fetch the full prompt content.
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
   * Archive a prompt you no longer need. Archived prompts are soft-deleted (we set
   * an `archived_at` timestamp) so you can still access them for historical data.
   *
   * **Safety First:**
   *
   * - Can't archive a prompt that's currently active. You must activate a different
   *   version first.
   * - Historical data is preserved—old conversations continue to reference archived
   *   prompts so your message history stays intact.
   * - Archived prompts remain accessible for reporting and analysis.
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
   * Retrieve a prompt and optionally personalize it with dynamic variables. Perfect
   * for fetching the prompt you want to use right before sending it to your AI.
   *
   * **Dynamic Variables:** Use handlebars-style placeholders like `{{userName}}` in
   * your prompt, then pass query parameters to fill them in.
   *
   * **Example:** Calling `/prompts/abc-123?userName=Alice&productName=Premium` will
   * replace `{{userName}}` with "Alice" and `{{productName}}` with "Premium" in the
   * returned prompt.
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
   * Component type: system, user, tool, guardrail, rag, agent, or a custom type
   * (other).
   */
  type?: 'system' | 'user' | 'tool' | 'guardrail' | 'rag' | 'agent' | 'other';
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
   * Component type: system, user, tool, guardrail, rag, agent, or a custom type
   * (other).
   */
  type?: 'system' | 'user' | 'tool' | 'guardrail' | 'rag' | 'agent' | 'other';
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
   * ISO 8601 timestamp when last updated.
   */
  updatedAt: string;

  /**
   * Your external identifier for the component.
   */
  externalComponentId?: string;

  /**
   * Component type: system, user, tool, guardrail, rag, agent, or a custom type
   * (other).
   */
  type?: 'system' | 'user' | 'tool' | 'guardrail' | 'rag' | 'agent' | 'other';
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
   * via UI). Null if only prompt metadata was updated without components.
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
