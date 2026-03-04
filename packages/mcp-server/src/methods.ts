// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.messages.create',
    fullyQualifiedName: 'messages.create',
    httpMethod: 'post',
    httpPath: '/messages',
  },
  {
    clientCallName: 'client.interactions.list',
    fullyQualifiedName: 'interactions.list',
    httpMethod: 'get',
    httpPath: '/interactions',
  },
  {
    clientCallName: 'client.interactions.getInteractionAnalytics',
    fullyQualifiedName: 'interactions.getInteractionAnalytics',
    httpMethod: 'get',
    httpPath: '/interactions/{interactionId}/analytics',
  },
  {
    clientCallName: 'client.users.create',
    fullyQualifiedName: 'users.create',
    httpMethod: 'post',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'put',
    httpPath: '/users/{userId}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.getUserAnalytics',
    fullyQualifiedName: 'users.getUserAnalytics',
    httpMethod: 'get',
    httpPath: '/users/{userId}/analytics',
  },
  {
    clientCallName: 'client.ratings.log',
    fullyQualifiedName: 'ratings.log',
    httpMethod: 'post',
    httpPath: '/ratings',
  },
  {
    clientCallName: 'client.organizations.create',
    fullyQualifiedName: 'organizations.create',
    httpMethod: 'post',
    httpPath: '/organizations',
  },
  {
    clientCallName: 'client.organizations.update',
    fullyQualifiedName: 'organizations.update',
    httpMethod: 'put',
    httpPath: '/organizations/{organizationId}',
  },
  {
    clientCallName: 'client.organizations.list',
    fullyQualifiedName: 'organizations.list',
    httpMethod: 'get',
    httpPath: '/organizations',
  },
  {
    clientCallName: 'client.organizations.getOrganizationAnalytics',
    fullyQualifiedName: 'organizations.getOrganizationAnalytics',
    httpMethod: 'get',
    httpPath: '/organizations/{organizationId}/analytics',
  },
  {
    clientCallName: 'client.prompts.create',
    fullyQualifiedName: 'prompts.create',
    httpMethod: 'post',
    httpPath: '/prompts',
  },
  {
    clientCallName: 'client.prompts.update',
    fullyQualifiedName: 'prompts.update',
    httpMethod: 'put',
    httpPath: '/prompts/{id}',
  },
  {
    clientCallName: 'client.prompts.list',
    fullyQualifiedName: 'prompts.list',
    httpMethod: 'get',
    httpPath: '/prompts',
  },
  {
    clientCallName: 'client.prompts.delete',
    fullyQualifiedName: 'prompts.delete',
    httpMethod: 'delete',
    httpPath: '/prompts/{id}',
  },
  {
    clientCallName: 'client.prompts.get',
    fullyQualifiedName: 'prompts.get',
    httpMethod: 'get',
    httpPath: '/prompts/{id}',
  },
  {
    clientCallName: 'client.events.create',
    fullyQualifiedName: 'events.create',
    httpMethod: 'post',
    httpPath: '/events',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
