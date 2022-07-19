import { GraphQLObjectType } from 'graphql';
import createAccountMutation from '../resolvers/mutation/createAccountMutation';
import createTransactionMutation from '../resolvers/mutation/createTransactionMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTransaction: createTransactionMutation,
    createAccount: createAccountMutation,
  },
});

export default mutationType;