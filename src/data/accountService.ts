import { Account, prisma } from '@prisma/client';
import prismaContext from '../lib/prisma/prismaContext';

export const getAllAccounts = async (): Promise<Account[]> => {
  const accounts = await prismaContext.prisma.account.findMany();
  return accounts;
};

export const getAccountById = async (
  accountId: number
): Promise<Account | null> => {
  return prismaContext.prisma.account.findUnique({
    where: {
      accountId,
    },
  });
};

export const createAccount = async (username: string): Promise<Account> => {
  const account = await prismaContext.prisma.account.create({
    data: { username },
  });
  return account;
};