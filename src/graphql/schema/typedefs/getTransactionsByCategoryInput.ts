import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  
  const getTransactionsByCategoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'getTransactionsByCategoryInput',
    description: 'get transactions by category input',
    fields: {
      category: {
        type: new GraphQLNonNull(GraphQLString), 
        description: 'transaction fetched by category details.',
      },
    },
  });
  
  export default getTransactionsByCategoryInput;