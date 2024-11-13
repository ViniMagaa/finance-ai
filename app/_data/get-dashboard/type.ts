import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionsPercentagePerType = {
  [key in TransactionType]: number;
};

export type TotalExpensePerCategory = {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
};
