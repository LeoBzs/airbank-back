import { Transaction, Account } from '@prisma/client';
import prismaContext from '../lib/prisma/prismaContext';

export const getAllTransactions = async (): Promise<Transaction[]> => {
  const transaction = await prismaContext.prisma.transaction.findMany();
  return transaction;
};

export const getTransactionById = async (transactionId: number): Promise<Transaction | null> => {
  const transaction = await prismaContext.prisma.transaction.findUnique({
    where: {
      transactionId,
    },
  })
  return transaction;
};

export const getTransactionsByAccount = async (accountId: number): Promise<Transaction[]> => {
  return prismaContext.prisma.transaction.findMany({
    where: {
      accountId,
    },
  });
};

export const getTransactionsByCategory = async (category : string): Promise<Transaction[]> => {
  return prismaContext.prisma.transaction.findMany({
    where: {
      category,
    },
  });
};

export const deleteTransaction = async (transactionId: number): Promise<Transaction> => {
  const transaction = await prismaContext.prisma.transaction.delete({
    where: {
      transactionId,
    },
  });
  return transaction;
};

export const createTransaction = async (
  category: string,
  date: string,
  accountId: number
): Promise<Transaction> => {
  const transaction = await prismaContext.prisma.transaction.create({
    data: { category, date, accountId },
  });
  return transaction;
};