import { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/logo.png.jpg" alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search trademarks..."
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>Search</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc'
  },
  logoContainer: {
    flex: '0 0 auto'
  },
  logo: {
    width: '25px'
  },
  searchContainer: {
    display: 'left',
    alignItems: 'center'
  },
  searchInput: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  searchButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
