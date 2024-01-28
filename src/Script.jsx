import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFilter(''); // Clear any applied filters when a new image is uploaded
  };

  const applyFilter = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            id="image"
            className={filter}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;