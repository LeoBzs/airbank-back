import { getAllTransactionsQueryResolver } from './getAllTransactionsQuery';
import { getAllAccountsResolver } from './getAllAccountsQuery';
import { getTransactionsByAccountQueryResolver } from './getTransactionsByAccountQuery';
import { getTransactionByIdQueryResolver } from './getTransactionByIdQuery';

const query = {
  transactions: {
    resolve: getAllTransactionsQueryResolver,
  },
  accounts: {
    resolve: getAllAccountsResolver,
  },
//  transactionByAccount: {  
//    resolve: getTransactionsByAccountQueryResolver, 
//  },
};

export default query;