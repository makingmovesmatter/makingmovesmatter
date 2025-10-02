'use client';

import { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";
import BlogsAdmin from "../blogs/page";

// Format date
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

const friendlyNames = {
  _id: "ID",
  name: "Name",
  email: "Email",
  phone: "Phone",
  estimateType: "Estimate Type",
  createdAt: "Created At",
  updatedAt: "Updated At",
};

export default function AdminDashboard({ initialEstimates }) {
  const [estimates, setEstimates] = useState((initialEstimates || []).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  const [filters, setFilters] = useState({ searchText: "", estimateType: "", fromDate: "", toDate: "" });
  const [selectedEstimate, setSelectedEstimate] = useState(null);
  const [editingEstimate, setEditingEstimate] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [codeInjections, setCodeInjections] = useState([]);
  const [modes, setModes] = useState({ darkMode: false, maintenanceMode: false, debugMode: false, customModes: {} });
  const [injectionSettings, setInjectionSettings] = useState({ globalEnabled: true, defaultPosition: 'beforeend' });

  const [activeSection, setActiveSection] = useState('estimates'); // estimates, blog, codes
  const [activeTab, setActiveTab] = useState('codes');
  const [newCustomMode, setNewCustomMode] = useState({ name: '', value: '' });
  const [newCodeInjection, setNewCodeInjection] = useState({ name: '', code: '', type: 'header', position: 'beforeend', enabled: true, targetPages: 'all', pagesList: [] });
  const [newPage, setNewPage] = useState('');

  // Fetch saved settings
  useEffect(() => {
    fetch("/api/code")
      .then(res => res.json())
      .then(data => {
        setCodeInjections(data.codeInjections || []);
        setModes(data.modes || { darkMode: false, maintenanceMode: false, debugMode: false, customModes: {} });
        setInjectionSettings(data.injectionSettings || { globalEnabled: true, defaultPosition: 'beforeend' });
      })
      .catch(() => {});
  }, []);

  // Save settings
  const saveSettings = async () => {
    try {
      const response = await fetch("/api/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeInjections, modes, injectionSettings }),
      });
      if (response.ok) alert("Settings saved successfully!");
      else alert("Error saving settings");
    } catch (error) {
      alert("Error saving settings: " + error.message);
    }
  };

  // Add new code injection
  const addCodeInjection = () => {
    if (!newCodeInjection.name || !newCodeInjection.code) return;
    const newInjection = { ...newCodeInjection, createdAt: new Date().toISOString(), id: Date.now().toString() };
    setCodeInjections(prev => [...prev, newInjection]);
    setNewCodeInjection({ name: '', code: '', type: 'header', position: 'beforeend', enabled: true, targetPages: 'all', pagesList: [] });
    setNewPage('');
  };

  // Update code injection
  const updateCodeInjection = (id, updates) => {
    setCodeInjections(prev => prev.map(ci => ci.id === id ? { ...ci, ...updates } : ci));
  };

  // Delete code injection - FIXED
  const deleteCodeInjection = (id) => {
    setCodeInjections(prev => prev.filter(ci => ci.id !== id));
  };



// Update estimate function
const updateEstimate = async (id, updates) => {
  try {
    const response = await fetch(`/api/estimate?id=${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
    
    if (response.ok) {
      const result = await response.json();
      setEstimates(prev => prev.map(est => est._id === id ? result.data : est));
      setEditingEstimate(null);
      alert("Estimate updated successfully!");
    } else {
      const error = await response.json();
      alert("Error updating estimate: " + (error.message || "Unknown error"));
    }
  } catch (error) {
    alert("Error updating estimate: " + error.message);
  }
};

// Delete estimate function
const deleteEstimate = async (id) => {
  if (!confirm("Are you sure you want to delete this estimate?")) return;
  
  try {
    const response = await fetch(`/api/estimate?id=${id}`, {
      method: "DELETE",
    });
    
    if (response.ok) {
      setEstimates(prev => prev.filter(est => est._id !== id));
      alert("Estimate deleted successfully!");
    } else {
      const error = await response.json();
      alert("Error deleting estimate: " + (error.message || "Unknown error"));
    }
  } catch (error) {
    alert("Error deleting estimate: " + error.message);
  }
};



  // Page list handlers
  const addPageToNewInjection = () => {
    if (!newPage) return;
    setNewCodeInjection(prev => ({ ...prev, pagesList: [...prev.pagesList, newPage] }));
    setNewPage('');
  };
  const removePageFromNewInjection = (page) => setNewCodeInjection(prev => ({ ...prev, pagesList: prev.pagesList.filter(p => p !== page) }));
  const removePageFromInjection = (id, page) => updateCodeInjection(id, { pagesList: codeInjections.find(i => i.id === id).pagesList.filter(p => p !== page) });

  // Mode handlers
  const updateMode = (key, value) => setModes(prev => ({ ...prev, [key]: value }));
  const addCustomMode = () => {
    if (!newCustomMode.name || !newCustomMode.value) return;
    setModes(prev => ({ ...prev, customModes: { ...prev.customModes, [newCustomMode.name]: newCustomMode.value } }));
    setNewCustomMode({ name: '', value: '' });
  };
  const removeCustomMode = (name) => setModes(prev => { const cm = { ...prev.customModes }; delete cm[name]; return { ...prev, customModes: cm }; });

  // Injection settings
  const updateInjectionSetting = (key, value) => setInjectionSettings(prev => ({ ...prev, [key]: value }));

  // Filters
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const filteredEstimates = useMemo(() => {
    return estimates.filter(est => {
      const textMatch = Object.values(est).some(val => 
        String(val).toLowerCase().includes(filters.searchText.toLowerCase())
      );
      const typeMatch = filters.estimateType ? est.estimateType === filters.estimateType : true;
      const createdDate = new Date(est.createdAt);
      const fromMatch = filters.fromDate ? createdDate >= new Date(filters.fromDate) : true;
      const toMatch = filters.toDate ? createdDate <= new Date(filters.toDate + 'T23:59:59') : true;
      return textMatch && typeMatch && fromMatch && toMatch;
    });
  }, [filters, estimates]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredEstimates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEstimates = filteredEstimates.slice(startIndex, startIndex + itemsPerPage);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      if (start > 1) pages.push(1);
      if (start > 2) pages.push('...');
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (end < totalPages - 1) pages.push('...');
      if (end < totalPages) pages.push(totalPages);
    }
    
    return pages;
  };

  // Excel export
  const exportToExcel = () => {
    const exportData = filteredEstimates.map(est => ({ 
      ...est, 
      createdAt: formatDate(est.createdAt), 
      updatedAt: formatDate(est.updatedAt) 
    }));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Estimates");
    XLSX.writeFile(wb, `Estimates_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  // Estimate Details Modal
  const EstimateDetailsModal = ({ estimate, onClose, onEdit, onDelete }) => {
    if (!estimate) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 max-zindex">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Estimate Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            {Object.entries(estimate).map(([key, value]) => (
              <div key={key} className="flex border-b border-gray-100 pb-2">
                <div className="w-1/3 font-medium text-gray-700 capitalize">
                  {friendlyNames[key] || key.replace(/([A-Z])/g, ' $1').trim()}:
                </div>
                <div className="w-2/3 text-gray-600">
                  {key === "createdAt" || key === "updatedAt" 
                    ? formatDate(value)
                    : typeof value === "object" 
                      ? JSON.stringify(value, null, 2)
                      : String(value)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
            <button
              onClick={() => onEdit(estimate)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(estimate._id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Edit Estimate Form
  const EditEstimateForm = ({ estimate, onSave, onCancel }) => {
    const [formData, setFormData] = useState(estimate || {});

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    const handleChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 max-zindex">
        <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Edit Estimate</h2>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {Object.entries(estimate).map(([key, value]) => (
              <div key={key}>
                <label className="block font-medium mb-2 text-sm text-gray-700 capitalize">
                  {friendlyNames[key] || key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="text"
                  value={formData[key] || ''}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                />
              </div>
            ))}
          </form>
          
          <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
            <button
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 container !my-10">
      {/* Header with Navigation */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveSection('estimates')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'estimates' 
                ? 'bg-[var(--accent-color)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Estimates ({estimates.length})
          </button>
          <button
            onClick={() => setActiveSection('blog')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'blog' 
                ? 'bg-[var(--accent-color)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Blog Admin
          </button>
          <button
            onClick={() => setActiveSection('codes')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'codes' 
                ? 'bg-[var(--accent-color)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Add Code
          </button>
        </div>
      </div>

      {/* Blog Admin Section */}
      {activeSection === 'blog' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div>
            <BlogsAdmin />
          </div>
        </div>
      )}

      {/* Code Injections Section */}
      {activeSection === 'codes' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Advanced Code Injection Manager</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              className={`px-4 py-3 min-w-max ${activeTab === 'codes' ? 'border-b-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('codes')}
            >
              Code Injections ({codeInjections.length})
            </button>
            <button
              className={`px-4 py-3 min-w-max ${activeTab === 'modes' ? 'border-b-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('modes')}
            >
              Modes
            </button>
            <button
              className={`px-4 py-3 min-w-max ${activeTab === 'settings' ? 'border-b-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('settings')}
            >
              Global Settings
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {/* Code Injections Tab */}
            {activeTab === 'codes' && (
              <div className="space-y-6">
                {/* Add New Code Injection Form */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Add New Code Injection</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-medium mb-2 text-sm">Name *</label>
                      <input
                        type="text"
                        value={newCodeInjection.name}
                        onChange={(e) => setNewCodeInjection(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                        placeholder="e.g., Google Analytics"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-medium mb-2 text-sm">Type</label>
                      <select
                        value={newCodeInjection.type}
                        onChange={(e) => setNewCodeInjection(prev => ({ ...prev, type: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                      >
                        <option value="header">Header</option>
                        <option value="body">Body</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-medium mb-2 text-sm">Code *</label>
                    <textarea
                      rows={4}
                      value={newCodeInjection.code}
                      onChange={(e) => setNewCodeInjection(prev => ({ ...prev, code: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                      placeholder="Paste your HTML/JavaScript code here..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-medium mb-2 text-sm">Position</label>
                      <select
                        value={newCodeInjection.position}
                        onChange={(e) => setNewCodeInjection(prev => ({ ...prev, position: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                      >
                        <option value="beforeend">Before End</option>
                        <option value="afterbegin">After Begin</option>
                        <option value="beforebegin">Before Begin</option>
                        <option value="afterend">After End</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium mb-2 text-sm">Target Pages</label>
                      <select
                        value={newCodeInjection.targetPages}
                        onChange={(e) => setNewCodeInjection(prev => ({ ...prev, targetPages: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                      >
                        <option value="all">All Pages</option>
                        <option value="specific">Specific Pages Only</option>
                        <option value="exclude">Exclude Pages</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={newCodeInjection.enabled}
                          onChange={(e) => setNewCodeInjection(prev => ({ ...prev, enabled: e.target.checked }))}
                          className="rounded text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                        />
                        <span className="text-sm">Enabled</span>
                      </label>
                    </div>
                  </div>

                  {(newCodeInjection.targetPages === 'specific' || newCodeInjection.targetPages === 'exclude') && (
                    <div className="mb-4">
                      <label className="block font-medium mb-2 text-sm">Pages List</label>
                      <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <input
                          type="text"
                          value={newPage}
                          onChange={(e) => setNewPage(e.target.value)}
                          placeholder="Enter page path (e.g., /about)"
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                        />
                        <button
                          onClick={addPageToNewInjection}
                          className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg hover:bg-[var(--accent-color)] transition-colors"
                        >
                          Add Page
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {newCodeInjection.pagesList.map((page, index) => (
                          <span key={index} className="bg-blue-100 text-[var(--accent-color)] px-3 py-1 rounded-full text-sm flex items-center">
                            {page}
                            <button
                              onClick={() => removePageFromNewInjection(page)}
                              className="ml-2 text-red-600 hover:text-red-800"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={addCodeInjection}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!newCodeInjection.name || !newCodeInjection.code}
                  >
                    Add Injection
                  </button>
                </div>

                {/* Existing Code Injections List */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Existing Code Injections</h3>
                  <div className="space-y-4">
                    {codeInjections.map((injection) => (
                      <div key={injection.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{injection.name}</h4>
                            <div className="text-sm text-gray-600 flex flex-wrap gap-2 mt-1">
                              <span className="bg-gray-100 px-2 py-1 rounded">Type: {injection.type}</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">Position: {injection.position}</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">Target: {injection.targetPages}</span>
                              <span className={`px-2 py-1 rounded ${injection.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {injection.enabled ? 'Enabled' : 'Disabled'}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateCodeInjection(injection.id, { enabled: !injection.enabled })}
                              className={`px-3 py-1 rounded text-sm ${
                                injection.enabled ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-green-500 text-white hover:bg-green-600'
                              } transition-colors`}
                            >
                              {injection.enabled ? 'Disable' : 'Enable'}
                            </button>
                            <button
                              onClick={() => deleteCodeInjection(injection.id)}
                              className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="block font-medium mb-2 text-sm">Code Preview</label>
                          <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto max-h-32 border">
                            {injection.code.length > 200 ? injection.code.substring(0, 200) + '...' : injection.code}
                          </pre>
                        </div>

                        {(injection.targetPages === 'specific' || injection.targetPages === 'exclude') && injection.pagesList.length > 0 && (
                          <div>
                            <label className="block font-medium mb-2 text-sm">Targeted Pages</label>
                            <div className="flex flex-wrap gap-2">
                              {injection.pagesList.map((page, idx) => (
                                <span key={idx} className="bg-blue-100 text-[var(--accent-color)] px-3 py-1 rounded-full text-sm flex items-center">
                                  {page}
                                  <button
                                    onClick={() => removePageFromInjection(injection.id, page)}
                                    className="ml-1 text-red-600 hover:text-red-800"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {codeInjections.length === 0 && (
                      <div className="text-center text-gray-500 py-8 bg-gray-50 rounded-lg border border-dashed">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <p className="mt-2">No code injections added yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Modes Tab */}
            {activeTab === 'modes' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      checked={modes.darkMode}
                      onChange={(e) => updateMode('darkMode', e.target.checked)}
                      className="rounded text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                    />
                    <span className="font-medium">Dark Mode</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      checked={modes.maintenanceMode}
                      onChange={(e) => updateMode('maintenanceMode', e.target.checked)}
                      className="rounded text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                    />
                    <span className="font-medium">Maintenance Mode</span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      checked={modes.debugMode}
                      onChange={(e) => updateMode('debugMode', e.target.checked)}
                      className="rounded text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                    />
                    <span className="font-medium">Debug Mode</span>
                  </label>
                </div>

                {/* Custom Modes */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Custom Modes</h3>
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="Mode name"
                      value={newCustomMode.name}
                      onChange={(e) => setNewCustomMode(prev => ({ ...prev, name: e.target.value }))}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Mode value"
                      value={newCustomMode.value}
                      onChange={(e) => setNewCustomMode(prev => ({ ...prev, value: e.target.value }))}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                    />
                    <button
                      onClick={addCustomMode}
                      className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg hover:bg-[var(--accent-color)] transition-colors"
                    >
                      Add Mode
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(modes.customModes).map(([name, value]) => (
                      <div key={name} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                        <div>
                          <span className="font-medium text-gray-800">{name}</span>
                          <span className="text-gray-600 ml-2">: {value}</span>
                        </div>
                        <button
                          onClick={() => removeCustomMode(name)}
                          className="text-red-600 hover:text-red-800 p-1 rounded"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2 text-sm">Default Injection Position</label>
                    <select
                      value={injectionSettings.defaultPosition}
                      onChange={(e) => updateInjectionSetting('defaultPosition', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                    >
                      <option value="beforeend">Before End</option>
                      <option value="afterbegin">After Begin</option>
                      <option value="beforebegin">Before Begin</option>
                      <option value="afterend">After End</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 w-full">
                      <input
                        type="checkbox"
                        checked={injectionSettings.globalEnabled}
                        onChange={(e) => updateInjectionSetting('globalEnabled', e.target.checked)}
                        className="rounded text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
                      />
                      <span className="font-medium">Global Injection Enabled</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-[var(--accent-color)] mb-3">Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--accent-color)]">{codeInjections.length}</div>
                      <div className="text-sm text-[var(--accent-color)]">Total Injections</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{codeInjections.filter(i => i.enabled).length}</div>
                      <div className="text-sm text-green-800">Enabled</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{codeInjections.filter(i => i.type === 'header').length}</div>
                      <div className="text-sm text-purple-800">Header</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{codeInjections.filter(i => i.type === 'body').length}</div>
                      <div className="text-sm text-orange-800">Body</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button 
              onClick={saveSettings} 
              className="bg-[var(--accent-color)] text-white px-6 py-2 rounded-lg hover:bg-[var(--accent-color)] transition-colors mt-4 cursor-pointer"
            >
              Save All Settings
            </button>
          </div>
        </div>
      )}

      {/* Estimates Section (Default View) */}
      {activeSection === 'estimates' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estimates Management</h2>

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-5">
              <span className="bg-blue-100 text-[var(--accent-color)] px-2 py-1 rounded">Total Estimates: {estimates.length}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Filtered: {filteredEstimates.length}</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Page {currentPage} of {totalPages}</span>
            </div>
            
            {/* Advanced Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search estimates..."
                  value={filters.searchText}
                  onChange={e => handleFilterChange("searchText", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                />
              </div>
              <select
                value={filters.estimateType}
                onChange={e => handleFilterChange("estimateType", e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="home">Home</option>
                <option value="business">Business</option>
              </select>
              <input
                type="date"
                value={filters.fromDate}
                onChange={e => handleFilterChange("fromDate", e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              />
              <input
                type="date"
                value={filters.toDate}
                onChange={e => handleFilterChange("toDate", e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              />
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Showing {Math.min(filteredEstimates.length, startIndex + 1)}-{Math.min(startIndex + itemsPerPage, filteredEstimates.length)} of {filteredEstimates.length} estimates
                </span>
                
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                >
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="20">20 per page</option>
                  <option value="50">50 per page</option>
                </select>
              </div>

              <button
                onClick={exportToExcel}
                className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg hover:bg-[var(--accent-color)] transition-colors flex items-center gap-2"
                disabled={filteredEstimates.length === 0}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Excel
              </button>
            </div>
          </div>

          {/* Estimates Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                  {estimates[0] && Object.keys(estimates[0]).map(key => (
                    <th key={key} className="text-left p-3 text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {friendlyNames[key] || key}
                    </th>
                  ))}
                 
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentEstimates.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-colors"
                  >


                    <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedEstimate(item)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => setEditingEstimate(item)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEstimate(item._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>



                    {Object.entries(item).map(([key, val]) => (
                      <td key={key} className="p-3 text-sm text-gray-600 whitespace-nowrap">
                        {key === "createdAt" || key === "updatedAt" || key === "moveDate"
                          ? formatDate(val)
                          : typeof val === "object"
                          ? JSON.stringify(val)
                          : String(val).length > 50 
                            ? String(val).substring(0, 50) + '...'
                            : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredEstimates.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-2">No estimates found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="border-t border-gray-200 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages} • {filteredEstimates.length} total records
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7"></path></svg>
                  </button>

                  {/* Page numbers */}
                  {getPageNumbers().map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === 'number' && setCurrentPage(page)}
                      disabled={page === '...'}
                      className={`px-3 py-1 rounded-lg border border-gray-300 text-sm ${
                        page === currentPage ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)]' : 'hover:bg-gray-50'
                      } ${page === '...' ? 'cursor-default' : ''}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Estimate Details Modal */}
      {selectedEstimate && (
        <EstimateDetailsModal
          estimate={selectedEstimate}
          onClose={() => setSelectedEstimate(null)}
          onEdit={(est) => {
            setSelectedEstimate(null);
            setEditingEstimate(est);
          }}
          onDelete={(id) => {
            deleteEstimate(id);
            setSelectedEstimate(null);
          }}
        />
      )}

      {/* Edit Estimate Modal */}
      {editingEstimate && (
        <EditEstimateForm
          estimate={editingEstimate}
          onSave={(updates) => updateEstimate(editingEstimate._id, updates)}
          onCancel={() => setEditingEstimate(null)}
        />
      )}
    </div>
  );
}