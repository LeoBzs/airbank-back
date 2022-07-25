import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Transaction } from '@prisma/client';
import { deleteTransaction } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/transactionService';
import TransactionType from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/graphql/schema/typedefs/TransactionType';
import DeleteTransactionInput from '../../typedefs/DeleteTransactionInput';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext'

export const deleteTransactionMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { transactionId } },
  _context,
  _info
): Promise<Transaction> => {
  return deleteTransaction(transactionId);
};

const deleteTransactionMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'delete Transaction',
  type: TransactionType,
  args: {
    input: {
      type: DeleteTransactionInput,
    },
  },
  resolve: deleteTransactionMutationResolver,
};

export default deleteTransactionMutation;