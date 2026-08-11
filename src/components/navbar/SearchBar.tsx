"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-blue-600 focus:bg-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
      />
    </div>
  );
}