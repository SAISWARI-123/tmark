import React from 'react';

interface TrademarkListProps {
  trademarks: Array<{
    id: number;
    name: string;
    owner: string;
    law_firm: string;
    status: string;
  }>;
}

const TrademarkList: React.FC<TrademarkListProps> = ({ trademarks }) => {
  if (!trademarks.length) {
    return <p>No trademarks found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Mark</th>
          <th>Details</th>
          <th>Status</th>
          <th>Class/Description</th>
        </tr>
      </thead>
      <tbody>
        {trademarks.map((trademark) => (
          <tr key={trademark.id}>
            <td>{trademark.name}</td>
            <td>{trademark.owner}</td>
            <td>{trademark.status}</td>
            <td>{trademark.law_firm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrademarkList;
