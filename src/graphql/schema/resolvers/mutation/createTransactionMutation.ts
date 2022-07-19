import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Transaction } from '@prisma/client';
import { createTransaction } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/transactionService';
import TransactionType from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/graphql/schema/typedefs/TransactionType';
import CreateTransactionInput from '../../typedefs/CreateTransactionInput';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext'

export const createTransactionMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { category, date, accountId } },
  _context,
  _info
): Promise<Transaction> => {
  return createTransaction(category, date, accountId);
};

const createTransactionMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create Transaction',
  type: TransactionType,
  args: {
    input: {
      type: CreateTransactionInput,
    },
  },
  resolve: createTransactionMutationResolver,
};

export default createTransactionMutation;