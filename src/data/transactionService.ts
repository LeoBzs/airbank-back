import { Transaction } from '@prisma/client';
import prismaContext from '../lib/prisma/prismaContext';

export const getAllTransactions = async (): Promise<Transaction[]> => {
  const transaction = await prismaContext.prisma.transaction.findMany();
  return transaction;
};

export const getTransactionById = async (transactionId: number): Promise<Transaction | null> => {
  return prismaContext.prisma.transaction.findFirst({
    where: {
      transactionId,
    },
  });
};

export const getTransactionsByAccount = async (accountId: number): Promise<Transaction[]> => {
  return prismaContext.prisma.transaction.findMany({
    where: {
      accountId,
    },
  });
};

export const createTransaction = async (
  category: string,
  date: string,
  accountId: number
): Promise<Transaction> => {
  const book = await prismaContext.prisma.transaction.create({
    data: { category, date, accountId },
  });
  return book;
};