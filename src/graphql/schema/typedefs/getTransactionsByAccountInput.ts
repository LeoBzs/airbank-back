import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';
  
  const getTransactionsByAccountInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'GetTransactionInput',
    description: 'get transaction input',
    fields: {
      accountId: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'ID.',
      },
    },
  });
  
  export default getTransactionsByAccountInput;