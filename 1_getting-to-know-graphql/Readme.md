# Syntax and query language

For this excercise we will use two endpoints: 

- [Starwars API](https://graphql.org/swapi-graphql/)
- [Blog posts api](https://graphql-workshop-react.herokuapp.com/v1/graphql) Use it with [GraphiQL online](https://graphiql-online.com/)
- [Github api](https://developer.github.com/v4/explorer/)

> Tip: You can use [GraphiQL online for Explorer feature](https://graphiql-online.com/)

## Excercises

1. What's wrong with this syntax?
```
query {
  posts: {
    timestamp,
    user: {
      name
    }
  }
}
```

### Queries

2. Execute correct graphql query request using curl

3. Get first 5 planets in Star Wars universe along with their name, diameter, rotation period, residents. For each resident display it's name, species, classification and spoken language. Also for each resident display vehicles that he used as well as in which movies they appeared

4. Get `title` and `content` of posts ordered by timestamp ascending. Represent data as ordered_posts array (hint: use aliases)

### Subscriptions

5. Subscribe to blog posts

### Mutations

6. Add a new user

7. Add a new blog post

8. Add a new user and post using just one GraphQL mutation

9. Create reusable insert mutation called addPost, which not only will insert a post, but create new user and profile


