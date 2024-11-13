"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionsPercentagePerType } from "@/app/_data/get-dashboard/type";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { PercentageItem } from "./percentage-item";

const chartConfig = {
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#E93030",
  },
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#FFFFFF",
  },
} satisfies ChartConfig;

type TransactionsPieChartProps = {
  typesPercentage: TransactionsPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
};

export default function TransactionsPieChart({
  typesPercentage,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: TransactionsPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];

  return (
    <Card className="flex flex-col p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-2">
          <PercentageItem
            icon={
              <div className="bg-[#55B02E14] p-2 rounded-lg">
                <TrendingUpIcon size={20} className="text-primary" />
              </div>
            }
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            icon={
              <div className="bg-[#F6352E14] p-2 rounded-lg">
                <TrendingDownIcon size={20} className="text-red-500" />
              </div>
            }
            title="Despesa"
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            icon={
              <div className="bg-[#FFFFFF08] p-2 rounded-lg">
                <PiggyBankIcon size={20} />
              </div>
            }
            title="Investimento"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
