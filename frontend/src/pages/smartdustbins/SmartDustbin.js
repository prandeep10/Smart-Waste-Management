import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashRestore, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import 'leaflet/dist/leaflet.css';
import './SmartDustbin.css';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

const SmartDustbin = () => {
  const [dustbins, setDustbins] = useState([]);

  useEffect(() => {
    const fetchDustbins = async () => {
      try {
        const response = await fetch('https://omnisynctechnologies.com/api/smart-dustbins');
        const data = await response.json();
        setDustbins(data);
      } catch (error) {
        console.error('Failed to fetch dustbins:', error);
      }
    };

    fetchDustbins();

    const intervalId = setInterval(fetchDustbins, 1000); // Fetch data every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const createCustomIcon = (icon, color) => {
    const iconHTML = ReactDOMServer.renderToString(<FontAwesomeIcon icon={icon} color={color} />);
    return L.divIcon({
      html: iconHTML,
      className: 'custom-icon',
      iconSize: [32, 32] // Adjust the size as per your requirement
    });
  };

  return (
    <MapContainer className='main-container' center={[20.5937, 78.9629]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {dustbins.map((dustbin) => {
        const position = [dustbin.latitude, dustbin.longitude];
        let icon;
        switch (dustbin.status) {
          case 'full':
            icon = createCustomIcon(faTrash, 'red');
            break;
          case 'empty':
            icon = createCustomIcon(faTrashRestore, 'green');
            break;
          case 'half':
            icon = createCustomIcon(faTrashAlt, 'blue');
            break;
          default:
            icon = createCustomIcon(faTrash, 'black');
        }

        return (
          <Marker key={dustbin.id} position={position} icon={icon}>
            <Popup>
              {dustbin.name}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default SmartDustbin;
