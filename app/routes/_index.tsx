import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Program Alumindo" },
    { name: "description", content: "Program Alumindo!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      
    </div>
  );
}
