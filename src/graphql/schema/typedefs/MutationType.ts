import { GraphQLObjectType } from 'graphql';
import createAccountMutation from '../resolvers/mutation/createAccountMutation';
import createTransactionMutation from '../resolvers/mutation/createTransactionMutation';
import deleteTransactionMutation from '../resolvers/mutation/deleteTransactionMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTransaction: createTransactionMutation,
    createAccount: createAccountMutation,
    deleteTransaction: deleteTransactionMutation,
  },
});

export default mutationType;