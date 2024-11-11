import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NavBar } from "../_components/navbar";

export default async function SubscriptionPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return <NavBar />;
}
