import React from 'react';
import './Dictionary.css';

const Dictionary = () => {
  const terms = [
    {
      title: 'Psyllium',
      description: 'Replaces flour, acts as a leavening agent. Powder made from the husks of Plantago seeds. In other words, coarse fiber. Psyllium has a neutral taste, which is a plus: when added to food, you won\'t feel any foreign taste! It is usually added to baking. By absorbing moisture and turning into a gel-like mass, psyllium binds the dough as well as regular wheat flour.'
    },
    {
      title: 'Spatula',
      description: 'A spatula has a long handle with a small flexible or rigid blade at the end. It is convenient for applying and smoothing cream, mixing ingredients.'
    },
    {
      title: 'Poltava or Poltava Groats',
      description: 'Poltava groats are one type of processed wheat groats. Externally, it may look like whole cleaned or coarsely crushed grains, meaning its granules are always quite large. Poltava groats are usually used for making porridge, while large grains are added to soups. Its use in cooking is not limited.'
    },
    {
      title: 'Isomalt',
      description: 'Isomalt (isomaltitol, palatinit) — colorless, sweet-tasting crystals soluble in water. The sweetener isomalt (E953) belongs to natural sugar substitutes. It is found in nature in sugar beets, sugar cane, and honey, from which it is extracted.'
    },
    {
      title: 'Kurduyk',
      description: 'Kurduyk is a voluminous fat deposit that forms in the tail area of a sheep. In Eastern countries, kurduyk is considered a valuable product, which is melted down and used as oil for cooking various dishes such as pilaf, kebabs, etc.'
    }
  ];

  return (
    <div className="block">
      {terms.map((term, index) => (
        <div key={index} className="term">
          <h2>{term.title}</h2>
          <div className="description">
            <p>{term.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
