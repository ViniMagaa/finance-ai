import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SummaryCards } from "./(home)/_components/summary-cards";
import { TimeSelect } from "./(home)/_components/time-select";
import { NavBar } from "./_components/navbar";
import { isMatch } from "date-fns";

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

  return (
    <>
      <NavBar />

      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <SummaryCards month={month} />
      </div>
    </>
  );
}
