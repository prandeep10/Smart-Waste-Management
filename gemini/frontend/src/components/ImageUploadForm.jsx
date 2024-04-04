import React, { useState } from 'react';

const ImageUploadForm = () => {
 const [selectedFile, setSelectedFile] = useState(null);

 const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
 };

 const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      alert(result.result);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
 };

 return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
 );
};

export default ImageUploadForm;
