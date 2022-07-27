import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Transaction } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext'
import { getTransactionsByCategory } from '@src/data/transactionService';
import getTransactionsByCategoryInput from '../../typedefs/getTransactionsByCategoryInput';
import TransactionType from '@src/graphql/schema/typedefs/TransactionType';


export const getTransactionsByCategoryQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { category } },
  _context,
  _info
): Promise<Transaction[]> => {
    const transactions = await getTransactionsByCategory(category);
    return transactions;
};

const getTransactionsByCategoryQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get transaction by Category',
  type: GraphQLList(TransactionType),
  args: {
    input: {
      type: getTransactionsByCategoryInput,
    },
  },
  resolve: getTransactionsByCategoryQueryResolver,
};

export default getTransactionsByCategoryQuery;