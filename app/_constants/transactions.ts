import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.HOUSE]: "Habitação",
  [TransactionCategory.OTHER]: "Outro",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITY]: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  [TransactionPaymentMethod.BANK_SLIP]: "Transferência Bancária",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Boleto Bancário",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.OTHER]: "Outro",
  [TransactionPaymentMethod.PIX]: "Pix",
};

export const TRANSACTION_TYPE_LABELS = {
  [TransactionType.DEPOSIT]: "Depósito",
  [TransactionType.EXPENSE]: "Despesa",
  [TransactionType.INVESTMENT]: "Investimento",
};

export const TRANSACTION_CATEGORY_OPTIONS = Object.entries(
  TRANSACTION_CATEGORY_LABELS,
).map(([key, value]) => ({
  value: key,
  label: value,
}));

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = Object.entries(
  TRANSACTION_PAYMENT_METHOD_LABELS,
).map(([key, value]) => ({
  value: key,
  label: value,
}));

export const TRANSACTION_TYPE_OPTIONS = Object.entries(
  TRANSACTION_TYPE_LABELS,
).map(([key, value]) => ({
  value: key,
  label: value,
}));
