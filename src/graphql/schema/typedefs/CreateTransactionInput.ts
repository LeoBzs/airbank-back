import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
  
  const CreateTransactionInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'CreateTransactionInput',
    description: 'Create transaction input',
    fields: {
      category: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The category.',
      },
      date: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The date.',
      },
      accountId: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The accounts ID.',
      },
    },
  });
  
  export default CreateTransactionInput;