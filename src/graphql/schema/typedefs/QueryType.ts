import { GraphQLObjectType } from 'graphql';
import getAllAccountsQuery from '../resolvers/query/getAllAccountsQuery';
import getAllTransactionsQuery from '../resolvers/query/getAllTransactionsQuery';
import getTransactionsByAccountQuery from '../resolvers/query/getTransactionsByAccountQuery';
import getTransactionByIdQuery from '../resolvers/query/getTransactionByIdQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    transactions: getAllTransactionsQuery, 
    transactionsByAccount: getTransactionsByAccountQuery, 
    transactionById: getTransactionByIdQuery,
    accounts: getAllAccountsQuery,
  },
});

export default queryType;