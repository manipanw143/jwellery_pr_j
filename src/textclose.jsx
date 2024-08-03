import React, { useState } from 'react';

const TextComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      {isExpanded ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            posuere lectus. Nullam consectetur nibh a dui feugiat eleifend.
            Donec efficitur, odio a tincidunt eleifend, tortor sem porta nisi,
            et facilisis magna arcu sit amet tortor. Curabitur ultricies
            fringilla nulla, nec tincidunt quam laoreet ac. Sed a lacus et
            purus venenatis lacinia. Donec et enim in erat feugiat dapibus. In
            non odio vel ex fermentum faucibus.
          </p>
          <button onClick={toggleExpand}>Close Text</button>
        </>
      ) : (
        <button onClick={toggleExpand}>Read More</button>
      )}
      <button onClick={scrollToTop}>Top</button>
    </div>
  );
};

export default TextComponent;
