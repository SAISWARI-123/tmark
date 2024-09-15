import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import StatusBar from '../components/StatusBar';
import TrademarkList from '../components/TradeMarksList';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  // Function to fetch data from the API when the user searches
  const handleSearch = async (query: string) => {
    if (query) {
      const response = await fetch(`/api/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    }
  };

  // Function to handle status filtering (All, Registered, Pending, etc.)
  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
  };

  // Apply the status filter to the search results (e.g., Registered, Pending, Abandoned)
  const filteredResults = searchResults.filter((result) => {
    if (statusFilter === 'All') return true; // Show all results
    if (statusFilter === 'Registered' && result.status === 'Registered') return true;
    if (statusFilter === 'Pending' && result.status === 'Pending') return true;
    // Add more filters as needed
    return false;
  });

  return (
    <div>
      <Header onSearch={handleSearch} /> {/* Header with Search */}
      <StatusBar onStatusFilter={handleStatusFilter} /> {/* StatusBar with filters */}
      <TrademarkList trademarks={filteredResults} /> {/* Trademark List with filtered results */}
    </div>
  );
}
