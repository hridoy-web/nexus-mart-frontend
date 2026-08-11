"use client";

import Link from "next/link";
import { User, LogOut, Package } from "lucide-react";

export default function UserMenu() {
  const user = { name: "Hridoy Chowdhury", email: "hridoy@example.com" };

  if (!user) {
    return (
      <div className="flex items-center gap-2 font-heading">
        <Link href="/login" className="btn btn-ghost btn-sm rounded-xl font-semibold">
          Sign In
        </Link>
        <Link href="/register" className="btn btn-primary btn-sm rounded-xl font-semibold">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar border border-zinc-200 dark:border-zinc-800"
      >
        <div className="w-9 rounded-full btn-gradient text-white font-bold flex items-center justify-center text-sm">
          {user.name.charAt(0)}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-1 p-2 shadow-2xl glass-card rounded-2xl w-56 mt-3 border border-zinc-200 dark:border-zinc-800 space-y-1 font-heading"
      >
        <li className="px-3 py-2 border-b border-zinc-200 dark:border-zinc-800">
          <p className="font-bold text-zinc-900 dark:text-zinc-100 p-0 text-sm">{user.name}</p>
          <p className="text-xs text-zinc-500 p-0 truncate">{user.email}</p>
        </li>
        <li>
          <Link href="/profile" className="flex items-center gap-2 py-2 text-sm font-medium">
            <User className="h-4 w-4" /> Profile Settings
          </Link>
        </li>
        <li>
          <Link href="/orders" className="flex items-center gap-2 py-2 text-sm font-medium">
            <Package className="h-4 w-4" /> My Orders
          </Link>
        </li>
        <li className="border-t border-zinc-200 dark:border-zinc-800 pt-1">
          <button className="flex items-center gap-2 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}