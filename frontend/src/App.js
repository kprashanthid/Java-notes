import React, { useState } from 'react';
import axios from 'axios';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('audio', selectedFile);

      await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File uploaded successfully!!!.');
    }
  };

  return (
    <>
    <span>IOT ASSIGNMENT</span>
    <div className='container'>

<label class="custom-file-upload">
      <input className='button1' type="file" onChange={handleFileChange} /><p className='text'>Select file to upload</p>
      </label>
      <button className='button2' onClick={handleUpload}>Upload</button>


    </div>
    </>
  );
}

export default FileUploader;
