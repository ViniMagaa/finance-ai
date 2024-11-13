import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SummaryCards } from "./(home)/_components/summary-cards";
import { TimeSelect } from "./(home)/_components/time-select";
import { NavBar } from "./_components/navbar";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./(home)/_components/transactions-pie-chart";
import { getDashboard } from "./_data/get-dashboard";
import ExpensesPerCategory from "./(home)/_components/expenses-per-category";
import { LastTransactions } from "./(home)/_components/last-transactions";

type HomeProps = {
  searchParams: { month: string };
};

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const isMonthInvalid = !month || !isMatch(month, "MM");

  if (isMonthInvalid) {
    redirect(`/?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <NavBar />

      <div className="p-6 space-y-6 flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6 max-h-screen">
          <div className="flex flex-col gap-6 max-h-screen">
            <SummaryCards {...dashboard} />

            <div className="grid grid-cols-3 grid-row-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...dashboard} />

              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>

          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
}
