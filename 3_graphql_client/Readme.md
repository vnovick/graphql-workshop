# Getting started with GraphQL Client 

- Fork the following CodeSandbox:

[https://codesandbox.io/s/graphql-workshop-starter-8fhd2]

1. Add ApolloClient from 'apollo-boost'
2. Add ApolloProvider to wrap your app
3. use `useQuery` to get posts that you've created
4. use `useMutation` to submit a form for adding a new user
5. use `refetchQueries` to get component reloaded

Reference:
[https://www.apollographql.com/docs/react/api/react-hooks/](https://www.apollographql.com/docs/react/api/react-hooks/)

# subscription example

```javascript
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://graphql-endpoint-url',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://graphql-endpoint-url`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});

```
