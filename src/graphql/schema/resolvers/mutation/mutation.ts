import { createTransactionMutationResolver } from './createTransactionMutation';
import { createAccountMutationResolver } from './createAccountMutation';
import { deleteTransactionMutationResolver } from './deleteTransactionMutation';

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
};

export default mutation;