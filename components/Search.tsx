import React, { useState } from "react";
import { SearchIcon } from "@primer/octicons-react";

interface SearchProps {
  placeholder?: string;
  className?: string;
  compact?: boolean;
}

export function Search({
  placeholder = "Search ...",
  className = "",
  compact = false,
}: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`relative flex items-center  ${className}`}>
      <span className="absolute left-3">
        <SearchIcon className="text-zinc-400" size={14} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`text-sm bg-white border font-medium border-gray-200 rounded-lg pl-8 pr-3 w-full ${
          compact ? "py-1.5" : "py-2"
        }  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
    </div>
  );
}
