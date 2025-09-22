'use client';

import { useState, useMemo } from "react";
import * as XLSX from "xlsx";

// Date formatting
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

// Friendly column names
const friendlyNames = {
  _id: "ID",
  name: "Name",
  email: "Email",
  phone: "Phone",
  estimateType: "Estimate Type",
  createdAt: "Created At",
  updatedAt: "Updated At",
  // add more mappings if needed
};

export default function AdminDashboard({ initialEstimates }) {
  const [estimates] = useState(
    (initialEstimates || []).sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
  );
  const [filters, setFilters] = useState({
    searchText: "",
    estimateType: "",
    fromDate: "",
    toDate: ""
  });
  const [selectedEstimate, setSelectedEstimate] = useState(null);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  // Filtered estimates
  const filteredEstimates = useMemo(() => {
    return estimates.filter(est => {
      // Text search across all fields
      const textMatch = Object.values(est).some(val =>
        String(val).toLowerCase().includes(filters.searchText.toLowerCase())
      );

      // Filter by estimate type
      const typeMatch = filters.estimateType
        ? est.estimateType === filters.estimateType
        : true;

      // Filter by date range
      const createdDate = new Date(est.createdAt);
      const fromMatch = filters.fromDate ? createdDate >= new Date(filters.fromDate) : true;
      const toMatch = filters.toDate ? createdDate <= new Date(filters.toDate) : true;

      return textMatch && typeMatch && fromMatch && toMatch;
    });
  }, [filters, estimates]);

  // Download all as Excel
  const exportToExcel = () => {
    const exportData = filteredEstimates.map(est => ({
      ...est,
      createdAt: formatDate(est.createdAt),
      updatedAt: formatDate(est.updatedAt),
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Estimates");
    XLSX.writeFile(wb, "Estimates.xlsx");
  };

  return (
    <div className="p-6 min-h-screen container relative top-12">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Advanced Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by text..."
          value={filters.searchText}
          onChange={e => handleFilterChange("searchText", e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        />
        <select
          value={filters.estimateType}
          onChange={e => handleFilterChange("estimateType", e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        >
          <option value="">All Types</option>
          <option value="home">Home</option>
          <option value="business">Business</option>
          {/* Add more types as needed */}
        </select>
        <input
          type="date"
          value={filters.fromDate}
          onChange={e => handleFilterChange("fromDate", e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        />
        <input
          type="date"
          value={filters.toDate}
          onChange={e => handleFilterChange("toDate", e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        />
        <button
          onClick={exportToExcel}
          className="bg-[var(--accent-color)] text-white px-4 py-2 rounded cursor-pointer"
        >
          Download Filtered as Excel
        </button>
      </div>

      {/* Estimates Table */}
      <div className="overflow-x-auto border rounded shadow">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              {estimates[0] &&
                Object.keys(estimates[0]).map(key => (
                  <th key={key} className="border px-3 py-2 text-left">
                    {friendlyNames[key] || key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredEstimates.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedEstimate(item)}
              >
                {Object.entries(item).map(([key, val]) => (
                  <td key={key} className="border px-3 py-1">
                    {key === "createdAt" || key === "updatedAt" || key === "moveDate"
                      ? formatDate(val)
                      : typeof val === "object"
                      ? JSON.stringify(val)
                      : val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredEstimates.length === 0 && (
          <div className="p-4 text-center text-gray-500">No estimates found.</div>
        )}
      </div>

      {/* Popup for single estimate */}
      {selectedEstimate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center max-zindex">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedEstimate(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Estimate Details</h2>
            <div className="space-y-2">
              {Object.entries(selectedEstimate).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{friendlyNames[key] || key}</span>
                  <span>
                    {key === "createdAt" || key === "updatedAt"
                      ? formatDate(value)
                      : typeof value === "object"
                      ? JSON.stringify(value)
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
