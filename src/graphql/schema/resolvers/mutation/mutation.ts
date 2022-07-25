import { createTransactionMutationResolver } from './createTransactionMutation';
import { createAccountMutationResolver } from './createAccountMutation';
import { deleteTransactionMutationResolver } from './deleteTransactionMutation';
import { getTransactionByIdMutationResolver } from './getTransactionByIdMutation';
import { getTransactionsByAccountMutationResolver } from './getTransactionByAccountMutation';

const mutation = {
  createTransaction: {
    resolve: createTransactionMutationResolver,
  },
  createAccount: {
    resolve: createAccountMutationResolver,
  },
  deleteTransaction: {
    resolve: deleteTransactionMutationResolver,
  },
  getTransactionById: {
    resolve: getTransactionByIdMutationResolver,  
  },
  getTransactionsByAccount: {
    resolve: getTransactionsByAccountMutationResolver,  
  },
};

export default mutation;