import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Transaction } from '@prisma/client';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext'
import { getAllTransactions } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/transactionService';
import AccountType from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/graphql/schema/typedefs/AccountType';

export const getAllTransactionsQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Transaction[]> => {
  const transactions = await getAllTransactions();
  return transactions;
};

const getAllBooksQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all accounts query',
  type: GraphQLList(AccountType),
  resolve: getAllTransactionsQueryResolver,
};

export default getAllBooksQuery;