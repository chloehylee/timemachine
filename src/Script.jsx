import React, { useState } from 'react';

function ImageUpload() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
        </div>
    );
}

export default ImageUpload;
