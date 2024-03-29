import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Transaction } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext'
import TransactionType from '@src/graphql/schema/typedefs/TransactionType';
import { getTransactionsByAccount } from '@src/data/transactionService';
import getTransactionsByAccountInput from '../../typedefs/getTransactionsByAccountInput';

export const getTransactionsByAccountQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { accountId } },
  _context,
  _info
): Promise<Transaction[]> => {
    const transactions = await getTransactionsByAccount(accountId);
    return transactions;
};

const getTransactionsByAccountQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
    description: 'Get Transaction by Account',
    type: GraphQLList(TransactionType),
    args: {
      input: {
        type: getTransactionsByAccountInput,
      },
    },
  resolve: getTransactionsByAccountQueryResolver,
};

export default getTransactionsByAccountQuery;