import { AddTransactionButton } from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { cn } from "@/app/_lib/utils";
import { ReactNode } from "react";

type SummaryCardProps = {
  icon: ReactNode;
  title: string;
  amount: number;
  size: "small" | "large";
};

export function SummaryCard({ icon, title, amount, size }: SummaryCardProps) {
  return (
    <Card className={`${size === "large" ? "bg-white bg-opacity-5" : ""}`}>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={cn(
            "!m-0",
            size === "small"
              ? "text-muted-foreground opacity-70"
              : "text-white opacity-70",
          )}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={cn(
            "font-bold",
            size === "small" ? "text-2xl" : "text-4xl",
          )}
        >
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
}
