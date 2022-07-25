import { GraphQLObjectType } from 'graphql';
import createAccountMutation from '../resolvers/mutation/createAccountMutation';
import createTransactionMutation from '../resolvers/mutation/createTransactionMutation';
import deleteTransactionMutation from '../resolvers/mutation/deleteTransactionMutation';
import getTransactionByIdMutation from '../resolvers/mutation/getTransactionByIdMutation';
import getTransactionsByAccountMutation from '../resolvers/mutation/getTransactionByAccountMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTransaction: createTransactionMutation,
    createAccount: createAccountMutation,
    deleteTransaction: deleteTransactionMutation,
    getTransactionById: getTransactionByIdMutation,
    getTransactionsByAccount: getTransactionsByAccountMutation,
  },
});

export default mutationType;