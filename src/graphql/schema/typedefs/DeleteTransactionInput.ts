import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
  } from 'graphql';
  
  const DeleteTransactionInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'DeleteTransactionInput',
    description: 'Delete transaction input',
    fields: {
      transactionId: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'Transaction deletion.',
      },
    },
  });
  
  export default DeleteTransactionInput;