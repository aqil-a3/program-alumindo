import { NavLink } from "@remix-run/react";
import { navLinks } from "~/lib/data/sidebar";

export default function Sidebar() {
  return (
    <div className="py-8 pl-4">
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
