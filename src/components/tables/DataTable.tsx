"use client";

import { useState, ReactNode } from "react";

interface DataTableProps<T> {
  columns: { header: string; accessor: keyof T; sortable?: boolean; render?: (value: any, row: T) => ReactNode }[];
  data: T[];
  onRowClick?: (row: T) => void;
  pageSize?: number;
}

export function DataTable<T extends { id: string }>({ 
  columns, 
  data, 
  onRowClick, 
  pageSize = 20 
}: DataTableProps<T>) {
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(0);

  const sorted = sortBy 
    ? [...data].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        if (aVal === bVal) return 0;
        return sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
      })
    : data;

  const paginated = sorted.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div>
      <div className="overflow-x-auto border border-outline-variant/50 rounded-xl bg-surface-container-lowest shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-surface-container-low border-b border-outline-variant/50 text-secondary font-label-sm uppercase tracking-wider">
            <tr>
              {columns.map((col) => (
                <th 
                  key={String(col.accessor)} 
                  className={`px-6 py-4 font-semibold ${col.sortable ? 'cursor-pointer hover:bg-surface-container transition-colors' : ''}`}
                  onClick={() => {
                    if (col.sortable) {
                      setSortBy(col.accessor);
                      setSortAsc(sortBy === col.accessor ? !sortAsc : true);
                    }
                  }}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && sortBy === col.accessor && (
                      <span className="material-symbols-outlined text-[14px]">
                        {sortAsc ? "arrow_upward" : "arrow_downward"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-body-base divide-y divide-outline-variant/30">
            {paginated.map((row, idx) => (
              <tr 
                key={row.id}
                className={`hover:bg-surface-container-low transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td key={String(col.accessor)} className="px-6 py-4">
                    {col.render ? col.render(row[col.accessor], row) : String(row[col.accessor])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {data.length === 0 && (
          <div className="p-8 text-center text-secondary">
            No data available.
          </div>
        )}
      </div>

      {sorted.length > pageSize && (
        <div className="flex items-center justify-between mt-4 text-sm text-secondary font-body-strong">
          <span>Page {page + 1} of {Math.ceil(sorted.length / pageSize)}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setPage(p => Math.max(0, p - 1))} 
              disabled={page === 0}
              className="px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-container-low disabled:opacity-50 transition-colors"
            >
              ← Prev
            </button>
            <button 
              onClick={() => setPage(p => p + 1)} 
              disabled={(page + 1) * pageSize >= sorted.length}
              className="px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-container-low disabled:opacity-50 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
