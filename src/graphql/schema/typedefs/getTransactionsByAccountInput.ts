import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';
  
  const getTransactionsByAccountInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'getTransactionsByAccountInput',
    description: 'get transaction input',
    fields: {
      accountId: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'ID.',
      },
    },
  });
  
  export default getTransactionsByAccountInput;