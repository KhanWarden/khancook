import React from 'react';
import './BottomContainer.css';

const BottomContainer = () => {
  return (
    <div className="container-bottom">
      <div className="images">
        <div className="small-images">
          <img src="img/3-1.jpg" alt="Small Image 1" />
          <img src="img/3-2.jpg" alt="Small Image 2" />
        </div>
        <div className="long-image">
          <img src="img/3-3.jpg" alt="Long Image" />
        </div>
      </div>
      <div className="about">
        <h2>About our blog</h2>
        <p>
          Cooking is the human activity of cooking. It includes a complex of technologies, equipment and recipes. Cooking
          is a set of cooking methods from minerals and products of plant and animal origin of a variety of foods
          necessary for human life and health.
        </p>
        <p>
          Compliance with certain rules when cooking is called technology. Cooking methods and the ingredients themselves
          vary widely from different countries, peoples, social groups, are called cuisine and reflect the unique
          interrelationships of culture, economy and traditions. Cooking itself is highly dependent on both the skill and
          the education of the cook. To prepare delicious and healthy food, it is necessary to acquire certain knowledge
          of technology and skills in the culinary art of cooking.
        </p>
        <p>
          Also, cooking is a store (or a special department at a restaurant, canteen, cafe, in a store) that sells
          semi—finished products and ready-made culinary products.
        </p>
        <p>Cleanliness and neatness in the kitchen is the most important condition, on the fulfillment of which the quality
          of cooked food largely depends.</p>
      </div>
    </div>
  );
};

export default BottomContainer;
