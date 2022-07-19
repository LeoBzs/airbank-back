import { GraphQLObjectType } from 'graphql';
import getAllAccountsQuery from '../resolvers/query/getAllAccountsQuery';
import getAllTransactionsQuery from '../resolvers/query/getAllTransactionsQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    transactions: getAllTransactionsQuery,
    accounts: getAllAccountsQuery,
  },
});

export default queryType;