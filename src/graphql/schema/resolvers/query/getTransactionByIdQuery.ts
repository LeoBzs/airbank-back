import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Transaction } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext'
import { getTransactionById } from '@src/data/transactionService';
import TransactionType from '@src/graphql/schema/typedefs/TransactionType';
import getTransactionByIdInput from '../../typedefs/getTransactionByIdInput';

export const getTransactionByIdQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { transactionId } },
  _context,
  _info
): Promise<Transaction | null> => {
    const transaction = await getTransactionById(transactionId);
    return transaction;
};

const getTransactionByIdQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get transaction by id query',
  type: TransactionType,
  args: {
    input: {
      type: getTransactionByIdInput,
    },
  },
  resolve: getTransactionByIdQueryResolver,
};

export default getTransactionByIdQuery;