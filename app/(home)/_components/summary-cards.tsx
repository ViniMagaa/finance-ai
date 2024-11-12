import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";
import { db } from "@/app/_lib/prisma";

type SummaryCardsProps = {
  month: string;
};

export async function SummaryCards({ month }: SummaryCardsProps) {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={
          <div className="bg-muted p-2 rounded-lg">
            <WalletIcon size={20} />
          </div>
        }
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <div className="bg-[#FFFFFF08] p-2 rounded-lg">
              <PiggyBankIcon size={20} />
            </div>
          }
          title="Investimento"
          amount={investmentsTotal}
          size="small"
        />

        <SummaryCard
          icon={
            <div className="bg-[#55B02E14] p-2 rounded-lg">
              <TrendingUpIcon size={20} className="text-primary" />
            </div>
          }
          title="Receita"
          amount={depositsTotal}
          size="small"
        />

        <SummaryCard
          icon={
            <div className="bg-[#F6352E14] p-2 rounded-lg">
              <TrendingDownIcon size={20} className="text-red-500" />
            </div>
          }
          title="Despesas"
          amount={expensesTotal}
          size="small"
        />
      </div>
    </div>
  );
}
