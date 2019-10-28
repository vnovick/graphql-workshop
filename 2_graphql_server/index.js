const { ApolloServer, gql } = require('apollo-server')

const posts = [{
  id: 1,
  title: "Some title",
  description: "Description",
  userId: 1
}]

const users = [{
  id: 1,
  name: "Vladimir Novick",
  email: "12312@asdfa.com"
}]

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String
  }


  type Query {
    posts: [Post]
    users: [User]
  }

  type Mutation {
    addPost(post: PostInputType): Post
  }

    
  input PostInputType {
    userId: ID!
    title: String!
    content: String!
  }

`

const resolvers = {
  Query: {
    posts: () => posts.map(post => {
        const user = users.find(user => user.id === post.userId)
        return {
          id: post.id,
          title: post.title,
          description: post.description,
          user
        }
    }),
    users: () => users
  },
  Mutation: {
    addPost: (_, { post: {userId, title, content}}) => {
      const user = users.filter(user => user.id === userId).reduce((acc, u) => u, {})
      const postToPublish = {
        id: posts.reverse()[0].id + 1,
        title,
        description: content,
        userId: user.id
      }

      posts.push(postToPublish)
      return postToPublish
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(url));