import { gql } from 'apollo-server';
import { GraphQLSchema, printSchema } from 'graphql';
import mutationType from './typedefs/MutationType';
import queryType from './typedefs/QueryType';
import resolvers from './resolvers/resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = makeExecutableSchema({
  typeDefs: gql(
    printSchema(
      new GraphQLSchema({
        query: queryType,
        mutation: mutationType,
      })
    )
  ),
  resolvers,
});

export default schema;