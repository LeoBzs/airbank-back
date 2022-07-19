import { GraphQLResolverMap } from 'apollo-graphql';
import { Account, Transaction } from '@prisma/client';
import { getAccountById } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/accountService';
import { getTransactionsByAccount } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/transactionService';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext';

import mutation from './mutation/mutation';
import query from './query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Transaction: {
    account(transaction: Transaction): Promise<Account | null> {
      return getAccountById(transaction.accountId);
    },
  },

  Account: {
    transactions(account: Account): Promise<Transaction[]> {
      return getTransactionsByAccount(account.accountId);
    },
  },
};

export default resolvers;