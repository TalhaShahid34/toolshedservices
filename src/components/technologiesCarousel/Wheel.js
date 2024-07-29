import React, { useState, useEffect, useRef } from 'react';
import Card from './Card.js';

const Wheel = ({ images }) => {
  const [cards, setCards] = useState([]);
  const [theta, setTheta] = useState(0);
  const wheelRef = useRef(null);
  const tempTheta = useRef(0);
  const animId = useRef(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    const centerOfWheel = {
      x: parseFloat(wheel.style.width) / 2,
      y: parseFloat(wheel.style.height) / 2,
    };
    const tempCards = [];

    for (let i = 0; i < images.length; i++) {
      tempCards.push(
        <Card
          radius={100}
          radian_interval={(2 * Math.PI / images.length) * i}
          center={centerOfWheel}
          image={images[i]}
          key={`card_${i}`}
          size={50}
        />
      );
    }

    setCards(tempCards);
  }, [images]);

  const handleScroll = (event) => {
    clearTimeout(animId.current);
    const wheel = wheelRef.current;
    wheel.style.transform = `translate(-50%, -50%) rotate(${tempTheta.current + (event.deltaY * 0.5)}deg)`;
    tempTheta.current += event.deltaY * 0.5;

    animId.current = setTimeout(() => {
      setTheta(tempTheta.current);
    }, 150);
  };

  const getAdjustedCards = () => {
    return cards.map((card, index) => {
      const adjustedTheta = (theta % 360 + 360) % 360;
      const cardAngle = (360 / images.length) * index;
      const angleDifference = Math.abs(cardAngle - adjustedTheta);

      const size = angleDifference < 45 || angleDifference > 315 ? 70 : 50; // Make the card larger if it's within 45 degrees of the top

      return React.cloneElement(card, { size });
    });
  };
 {/* <Wheel images={images}/> */}
     {/* <FancyCarousel images={images} 
      carouselRadius={150}
      peripheralImageRadius={30}
      centralImageRadius={50}
      focusElementStyling={{border: '2px solid #ba4949'}} }
      // autoRotateTime={6}
      // borderWidth={4}
      // borderHexColor={'1c364f'}
      />*/}
  return (
    <div onWheel={handleScroll} ref={wheelRef} style={styles.wheel}>
      {getAdjustedCards()}
    </div>
  );
};

const styles = {
  wheel: {
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '300px',
    borderRadius: '50%',
  },
};

export default Wheel;
