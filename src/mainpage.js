import React from "react";
import IntroSection from "./IntroSection";
import CategorySection from "./CategorySection";
import BottomContainer from "./BottomContainer";

const MainPage = () => {
    const bakingData = {
        title: 'PASTRIES AND DESSERTS',
        description: 'Baking is a common name for bakery products and confectionery products made by baking, as well as this process itself. Confectionery products are made from other types of dough, mainly with the addition of fats and sugar. This also includes unsweetened products with a long shelf life (biscuits, crackers, salted sticks, pretzels). The classic types of confectionery are cookies, pies and cakes.',
        recipes: [
          {
            title: 'Tortillas with cheese "Easy as pie"',
            description: 'Not only with cheese, with cottage cheese, with apples, with minced meat. It\'s not about the filling, it\'s about the dough. The dough is wonderful. The dough that is used in Chinese recipes. Thin, crispy, does not tear.',
            image: 'img/1-1.jpg',
            link: 'recipe.html',
          },
          {
            title: 'Delicious cheese tortillas in 5 minutes"',
            description: 'These tortillas are like a magic wand for all occasions, with any filling and without it. They are prepared as quickly as possible, you will cope literally in 5 minutes. You will need the bare minimum.',
            image: 'img/1-2.jpg',
            link: 'recipe.html',
          },
          {
            title: 'Preparing the right dough for dumplings',
            description: 'Finding a good recipe for dumpling dough is not so easy, although its composition and correct proportions have been calculated for a long time. A good dough should not only be delicious, but also have certain characteristics.',
            image: 'img/1-3.jpg',
            link: 'recipe.html',
          },
          {
            title: 'French apple pie',
            description: 'Crazy cake. To be honest, I\'m not sure that this recipe is not on the site, it\'s too popular... But I didn\'t find it by searching. If it is found, I will delete it. Well, if there is no such thing, then you are welcome! I love this recipe! It turns out a great pie or cake, it all depends!',
            image: 'img/1-4.jpg',
            link: 'recipe.html',
          },
          {
            title: 'Classic mini lasagna recipe',
            description: 'This dough is perfect for both pizza and calzone. It can also be frozen – the quality will not suffer from this. This dough is enough for 2 pizzas. After baking, the dough turns out thin, crispy and incredibly delicious!',
            image: 'img/1-5.jpg',
            link: 'recipe.html',
          },
          {
            title: 'Sponge cake and the secret of its preparation',
            description: 'I saw this secret of the biscuit in one program with the famous cook Alexander Seleznev, decided to cook, and here it is, a lush and airy sponge cake! Great for cakes!',
            image: 'img/1-6.jpg',
            link: 'recipe.html',
          },
        ],
      };
    
      const soupsData = {
        title: 'SOUPS AND BROTHS',
        description: 'Soup is an important component of human food, serving as a source of energy and material for building organs and tissues of the body. Soups contain a lot of dissolved proteins, fats, carbohydrates and extractives, which are easily digested and well absorbed by the body. A distinctive feature of soup is that it is eaten with a spoon and does not use a knife to chop the products included in it.up is an important component of human food, serving as a source of energy and material for building organs and tissues of the body...',
        recipes: [
          {
            title: 'Tortillas with cheese "Easy as pie"',
            description: 'Not only with cheese, with cottage cheese, with apples, with minced meat. It\'s not about the filling, it\'s about the dough. The dough is wonderful. The dough that is used in Chinese recipes. Thin, crispy, does not tear.',
            image: 'img/2-1.jpg',
            link: '#',
          },
          {
            title: 'Delicious cheese tortillas in 5 minutes',
            description: 'These tortillas are like a magic wand for all occasions, with any filling and without it. They are prepared as quickly as possible, you will cope literally in 5 minutes. You will need the bare minimum.',
            image: 'img/2-2.jpg',
            link: '#',
          },
          {
            title: 'Preparing the right dough for dumplings',
            description: 'Finding a good recipe for dumpling dough is not so easy, although its composition and correct proportions have been calculated for a long time. A good dough should not only be delicious, but also have certain characteristics.',
            image: 'img/2-3.jpg',
            link: '#',
          },
          {
            title: 'French apple pie',
            description: 'Crazy cake. To be honest, I\'m not sure that this recipe is not on the site, it\'s too popular... But I didn\'t find it by searching. If it is found, I will delete it. Well, if there is no such thing, then you are welcome! I love this recipe! It turns out a great pie or cake, it all depends!',
            image: 'img/2-4.jpg',
            link: '#',
          },
          {
            title: 'Classic mini lasagna recipe',
            description: 'This dough is perfect for both pizza and calzone. It can also be frozen – the quality will not suffer from this. This dough is enough for 2 pizzas. After baking, the dough turns out thin, crispy and incredibly delicious!',
            image: 'img/2-5.jpg',
            link: '#',
          },
          {
            title: 'Sponge cake and the secret of its preparation',
            description: 'I saw this secret of the biscuit in one program with the famous cook Alexander Seleznev, decided to cook, and here it is, a lush and airy sponge cake! Great for cakes!',
            image: 'img/2-6.jpg',
            link: '#',
          },
          
        ],
      };


    return (
    <div>
        <IntroSection />
        <CategorySection {... bakingData}/>
        <CategorySection {... soupsData} />
        <BottomContainer />
    </div>
    );
};

export default MainPage;