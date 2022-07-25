import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Transaction } from '@prisma/client';
import { getTransactionById } from '@src/data/transactionService';
import TransactionType from '@src/graphql/schema/typedefs/TransactionType';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import getTransactionByIdInput from '../../typedefs/getTransactionByIdInput';

export const getTransactionByIdMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { transactionId } },
  _context,
  _info
): Promise<Transaction | null> => {
  return getTransactionById(transactionId);
};

const getTransactionByIdMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'getById Transaction mutation',
  type: TransactionType,
  args: {
    input: {
      type: getTransactionByIdInput,
    },
  },
  resolve: getTransactionByIdMutationResolver,
};

export default getTransactionByIdMutation;