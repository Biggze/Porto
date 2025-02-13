// src/components/detailporto/DetailPorto.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPorto = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters

  return (
    <div className="detail-porto">
      <h2>Detail of Project ID: {id}</h2>
      {/* Add more details about the project here */}
      <p>This is where you can display detailed information about the project.</p>
    </div>
  );
};

export default DetailPorto;