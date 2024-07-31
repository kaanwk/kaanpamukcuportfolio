"use client";

import React, { useState } from 'react';

const HoverImage = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setImageVisible(true);
  };

  const handleMouseLeave = () => {
    setImageVisible(false);
  };

  const handleMouseMove = (e) => {
    setImagePosition({
      top: e.clientY + 10,
      left: e.clientX + 10,
    });
  };

  return (
    <div>
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        The last place I traveled to is: Barcelona - Spain
      </p>
      {imageVisible && (
        <img
          src="/images/image.jpeg"
          alt="Barcelona"
          style={{
            position: 'absolute',
            top: `${imagePosition.top}px`,
            left: `${imagePosition.left}px`,
            width: '200px', // Adjust as needed
            height: 'auto', // Adjust as needed
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

export default HoverImage;
