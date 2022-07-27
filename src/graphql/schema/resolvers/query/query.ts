import { getAllTransactionsQueryResolver } from './getAllTransactionsQuery';
import { getAllAccountsResolver } from './getAllAccountsQuery';
import { getTransactionsByAccountQueryResolver } from './getTransactionsByAccountQuery';
import { getTransactionByIdQueryResolver } from './getTransactionByIdQuery';
import { getTransactionsByCategoryQueryResolver } from './getTransactionsByCategoryQuery';

const query = {
  transactions: {
    resolve: getAllTransactionsQueryResolver,
  },
  accounts: {
    resolve: getAllAccountsResolver,
  },
  transactionsByAccount: {  
    resolve: getTransactionsByAccountQueryResolver, 
  },
  transactionsByCategory: {  
    resolve: getTransactionsByCategoryQueryResolver, 
  },
  transactionById: {  
    resolve: getTransactionByIdQueryResolver, 
  },
};

export default query;