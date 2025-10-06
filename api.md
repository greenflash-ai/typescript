# Messages

Types:

- <code><a href="./src/resources/messages.ts">CreateMessageParams</a></code>
- <code><a href="./src/resources/messages.ts">CreateMessageResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageItem</a></code>
- <code><a href="./src/resources/messages.ts">SystemPrompt</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> CreateMessageResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">CreateUserParams</a></code>
- <code><a href="./src/resources/users.ts">CreateUserResponse</a></code>
- <code><a href="./src/resources/users.ts">Participant</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserParams</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> CreateUserResponse</code>
- <code title="put /users/{userId}">client.users.<a href="./src/resources/users.ts">update</a>(userID, { ...params }) -> UpdateUserResponse</code>

# Ratings

Types:

- <code><a href="./src/resources/ratings.ts">LogRatingParams</a></code>
- <code><a href="./src/resources/ratings.ts">LogRatingResponse</a></code>

Methods:

- <code title="post /ratings">client.ratings.<a href="./src/resources/ratings.ts">log</a>({ ...params }) -> LogRatingResponse</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions.ts">LogConversionParams</a></code>
- <code><a href="./src/resources/conversions.ts">LogConversionResponse</a></code>

Methods:

- <code title="post /conversions">client.conversions.<a href="./src/resources/conversions.ts">log</a>({ ...params }) -> LogConversionResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">CreateOrganizationParams</a></code>
- <code><a href="./src/resources/organizations.ts">CreateOrganizationResponse</a></code>
- <code><a href="./src/resources/organizations.ts">TenantOrganization</a></code>
- <code><a href="./src/resources/organizations.ts">UpdateOrganizationParams</a></code>
- <code><a href="./src/resources/organizations.ts">UpdateOrganizationResponse</a></code>

Methods:

- <code title="post /organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> CreateOrganizationResponse</code>
- <code title="put /organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(organizationID, { ...params }) -> UpdateOrganizationResponse</code>
