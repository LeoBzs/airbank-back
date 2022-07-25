import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';
  
  const getTransactionByIdInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'GetTransactionByIdInput',
    description: 'get transaction input',
    fields: {
      transactionId: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'Selected transaction details.',
      },
    },
  });
  
  export default getTransactionByIdInput;