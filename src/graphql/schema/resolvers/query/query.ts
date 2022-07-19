import { getAllTransactionsQueryResolver } from './getAllTransactionsQuery';
import { getAllAccountsResolver } from './getAllAccountsQuery';

const query = {
  transactions: {
    resolve: getAllTransactionsQueryResolver,
  },
  accounts: {
    resolve: getAllAccountsResolver,
  },
};

export default query;