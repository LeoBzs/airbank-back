import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
  } from 'graphql';
  // eslint-disable-next-line import/no-cycle
  import AccountType from './AccountType';
  
  const TransactionType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Transaction',
    description: 'A transaction',
    // thunk to refer to Account type
    fields: () => ({
      transactionId: {
        type: GraphQLNonNull(GraphQLID),
        description: 'transaction id',
      },
      category: {
        type: GraphQLString,
        description: 'transaction category',
      },
      date: {
        type: GraphQLString,
        description: 'transaction date',
      },
      account: {
        type: AccountType,
        description: 'transaction account',
      },
      accountId: {
        type: GraphQLInt,
        description: 'Account id',
      },
    }),
  });
  
  export default TransactionType;