import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Account } from '@prisma/client';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext'
import { getAllAccounts } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/accountService';
import AccountType from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/graphql/schema/typedefs/AccountType';

export const getAllAccountsResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Account[]> => {
  const accounts = await getAllAccounts();
  return accounts;
};

const getAllAccountsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all accounts query',
  type: GraphQLList(AccountType),
  resolve: getAllAccountsResolver,
};

export default getAllAccountsQuery;