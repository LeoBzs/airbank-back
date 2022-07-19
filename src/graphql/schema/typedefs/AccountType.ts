import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
  } from 'graphql';
  // eslint-disable-next-line import/no-cycle
  import TransactionType from './TransactionType';
  
  const AccountType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Account',
    description: 'An account',

    fields: () => ({
      accountId: {
        type: GraphQLNonNull(GraphQLID),
        description: 'id of the account',
      },
      username: {
        type: GraphQLString,
        description: 'accounts username',
      },
      transactions: {
        type: GraphQLList(TransactionType),
        description: 'list of transactions',
      },
    }),
  });
  
  export default AccountType;