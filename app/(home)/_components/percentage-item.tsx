import { ReactNode } from "react";

type PercentageItemProps = {
  icon: ReactNode;
  title: string;
  value: number;
};

export function PercentageItem({ icon, title, value }: PercentageItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>

      <span className="font-bold text-sm">{value}%</span>
    </div>
  );
}
