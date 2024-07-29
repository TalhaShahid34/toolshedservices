import React from 'react';

const Card = ({ radius, radian_interval, center, image, size }) => {
    const x = center.x + radius * Math.cos(radian_interval);
    const y = center.y + radius * Math.sin(radian_interval);
  
  const cardStyle = {
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    transform: 'translate(-50%, -50%)',
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'50%' ,
    transition: 'width 0.3s, height 0.3s',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt="card" style={{ maxWidth: '100%', maxHeight: '100%',borderRadius:'50%',transition: 'width 0.3s, height 0.3s',}} />
    </div>
  );
};

export default Card;
