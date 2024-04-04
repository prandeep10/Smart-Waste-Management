import React, { useState, useEffect } from 'react';
import './RecycleCenters.css';

const RecycleCenters = () => {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    pincode: '',
    category: ''
  });

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch('https://omnisynctechnologies.com/api/recycle-centers');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCenters(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCenters();
  }, []);

  const handleApprove = (id) => {
    // Send request to approve the center with the given ID
    console.log(`Approving center with ID ${id}`);
  };

  const handleRemove = (id) => {
    // Send request to remove the center with the given ID
    console.log(`Removing center with ID ${id}`);
  };

  const handleEdit = (center) => {
    setSelectedCenter(center);
    setFormData({
      name: center.name,
      location: center.location,
      pincode: center.pincode,
      category: center.category
    });
    setShowPopup(true);
  };

  const handleUpdate = () => {
    // Send request to update the selected center with formData
    console.log('Updating center:', formData);
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="recycle-centers main-container">
      <h2>Recycle Centers</h2>
      <ul>
        {centers.map((center) => (
          <li key={center.id}>
            <div className="center-info">
              <h3>{center.name}</h3>
              <p>Location: {center.location}</p>
              <p>Pincode: {center.pincode}</p>
              <p>Category: {center.category}</p>
            </div>
            <div className="center-actions">
              <button onClick={() => handleApprove(center.id)}>Approval</button>
              <button onClick={() => handleRemove(center.id)}>Remove</button>
              <button onClick={() => handleEdit(center)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Recycle Center</h3>
            <form onSubmit={handleUpdate}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              <label>Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
              <label>Pincode:</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
              <label>Category:</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} />
              <button type="submit">Update</button>
            </form>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecycleCenters;
