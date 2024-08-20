import { MetaFunction } from "@remix-run/node";
import DashboardHeader from "./components/DashboardHeader";
import DashboardBody from "./components/DashboardBody";

export const meta: MetaFunction = () => [
  {
    title: "Dashboard | Program Alumindo",
  },
];
export default function Dashboard() {
  return (
    <div className="bg-sky-200 min-h-screen w-full p-4">
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
}
