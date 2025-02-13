// src/components/detailporto/DetailPorto.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './detailporto.css'; // Optional: Add your CSS file for styling

const DetailPorto = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters

  return (
    <div className="detail-porto">
      <h2>Detail of Project ID: {id}</h2>
      {/* Add more details about the project here */}
    </div>
  );
};

export default DetailPorto;