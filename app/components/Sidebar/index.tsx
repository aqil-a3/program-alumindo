import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { BsPinAngleFill, BsPinFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { navLinks } from "~/lib/data/sidebar";

export default function Sidebar() {
  const [isGridMode, setIsGridMode] = useState<boolean>(true);
  return (
    <div className="py-8 px-4 bg-zinc-500 min-h-screen">
      <div className="flex justify-between px-2 w-full">
        <div className="flex gap-1 items-center">
          <IoMdMenu />
          <h1>Menu</h1>
        </div>
        <div className="cursor-pointer">
          <button onClick={() => setIsGridMode(!isGridMode)}>
          {isGridMode ? <BsPinAngleFill /> : <BsPinFill />}
          </button>
        </div>
      </div>
      <details>
        <summary>Root</summary>
        <details className="px-4">
          <summary>Master Data</summary>
        </details>
        <details className="px-4">
          <summary>Distribution</summary>
          <details className="px-4">
            <summary>Purchase Requisition</summary>
            <div className="flex flex-col flex-nowrap">
              {navLinks.map((navLink, index) => (
                <NavLink key={index} to={navLink.to} className="pl-4 text-sm">
                  {navLink.text}
                </NavLink>
              ))}
            </div>
          </details>
          <details className="px-4">
            <summary>Purchase Order</summary>
          </details>
          <details className="px-4">
            <summary>Inventory</summary>
          </details>
          <details className="px-4">
            <summary>Inspections</summary>
          </details>
        </details>
        <details className="px-4">
          <summary>Sales Order</summary>
        </details>
        <details className="px-4">
          <summary>Manufacturing</summary>
        </details>
        <details className="px-4">
          <summary>e-Approval</summary>
        </details>
        <details className="px-4">
          <summary>Administrative Tools</summary>
        </details>
      </details>
    </div>
  );
}
