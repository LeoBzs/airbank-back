import { GraphQLObjectType } from 'graphql';
import getAllAccountsQuery from '../resolvers/query/getAllAccountsQuery';
import getAllTransactionsQuery from '../resolvers/query/getAllTransactionsQuery';
import getTransactionsByAccountQuery from '../resolvers/query/getTransactionsByAccountQuery';
import getTransactionByIdQuery from '../resolvers/query/getTransactionByIdQuery';
import getTransactionsByCategoryQuery from '../resolvers/query/getTransactionsByCategoryQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    transactions: getAllTransactionsQuery,
    transactionsByAccount: getTransactionsByAccountQuery, 
    transactionsByCategory: getTransactionsByCategoryQuery,
    transactionById: getTransactionByIdQuery,
    accounts: getAllAccountsQuery,
  },
});

export default queryType;