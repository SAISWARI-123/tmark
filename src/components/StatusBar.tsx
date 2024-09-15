import React from 'react';

interface StatusBarProps {
  onStatusFilter: (status: string) => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ onStatusFilter }) => {
  return (
    <div style={styles.statusContainer}>
      <div style={styles.statusBox}>
        <h2>Status</h2>
        <div style={styles.breakLine}></div>
        <button style={{ ...styles.statusButton, ...styles.allButton }} onClick={() => onStatusFilter('All')}>
          All
        </button>
        <button style={styles.statusButton} onClick={() => onStatusFilter('Registered')}>
          <span style={{ ...styles.bullet, backgroundColor: 'green' }}></span>
          Registered
        </button>
        <button style={styles.statusButton} onClick={() => onStatusFilter('Pending')}>
          <span style={{ ...styles.bullet, backgroundColor: 'orange' }}></span>
          Pending
        </button>
        <div style={styles.breakLine}></div>
        <button style={styles.statusButton} onClick={() => onStatusFilter('Abandoned')}>
          <span style={{ ...styles.bullet, backgroundColor: 'red' }}></span>
          Abandoned
        </button>
        <button style={styles.statusButton} onClick={() => onStatusFilter('Others')}>
          <span style={{ ...styles.bullet, backgroundColor: 'blue' }}></span>
          Others
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  statusContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
    width: '100%',
  },
  statusBox: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    width: '300px',
  },
  statusButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  allButton: {
    backgroundColor: '#e0e0e0',
  },
  bullet: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  breakLine: {
    flexBasis: '100%',
    height: '0',
  },
};

export default StatusBar;
