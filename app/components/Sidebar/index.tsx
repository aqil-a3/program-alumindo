import { NavLink } from "@remix-run/react";
import { navLinks } from "~/lib/data/sidebar";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 py-8 px-4">
      <details>
        <summary>Root</summary>
        <details className="px-4">
          <summary>Master Data</summary>
        </details>
        <details className="px-4">
          <summary>Distribution</summary>
          <details className="px-4">
            <summary>Purchase Requisition</summary>
            <div className="flex flex-col">
              {navLinks.map((navLink, index) => (
                <NavLink key={index} to={navLink.to} className="px-8">
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
