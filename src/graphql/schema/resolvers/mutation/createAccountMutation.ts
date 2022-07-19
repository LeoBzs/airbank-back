import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Account } from '@prisma/client';
import { IApolloServerContext } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/interfaces/IApolloServerContext'
import { createAccount } from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/data/accountService';
import AccountType from '../../typedefs/AccountType';
import CreateAccountInput from '../../typedefs/CreateAccountInput';

export const createAccountMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { username } },
  _context,
  _info
): Promise<Account> => {
  return createAccount(username);
};

const createAccountMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create Account',
  type: AccountType,
  args: {
    input: {
      type: CreateAccountInput,
    },
  },
  resolve: createAccountMutationResolver,
};

export default createAccountMutation;