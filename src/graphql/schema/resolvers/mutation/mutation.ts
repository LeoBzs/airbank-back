import { createTransactionMutationResolver } from './createTransactionMutation';
import { createAccountMutationResolver } from './createAccountMutation';

const mutation = {
  createTransaction: {
    resolve: createTransactionMutationResolver,
  },
  createAccount: {
    resolve: createAccountMutationResolver,
  },
};

export default mutation;