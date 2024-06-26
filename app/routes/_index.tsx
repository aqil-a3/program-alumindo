import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Program Alumindo" },
    { name: "description", content: "Program Alumindo!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Outlet />
    </div>
  );
}
