import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";

type SummaryCardsProps = {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
};

export async function SummaryCards({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCardsProps) {
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
