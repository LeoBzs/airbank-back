import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Transaction } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext'
import { getAllTransactions } from '@src/data/transactionService';
import TransactionType from '@src/graphql/schema/typedefs/TransactionType';

export const getAllTransactionsQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Transaction[]> => {
  const transactions = await getAllTransactions();
  return transactions;
};

const getAllTransactionsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all transactions query',
  type: GraphQLList(TransactionType),
  resolve: getAllTransactionsQueryResolver,
};

export default getAllTransactionsQuery;