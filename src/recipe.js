import React from 'react';
import './recipe.css'

const Recipe = () => {
  return (
    <div>
    <div className="recipe">
      <div className="content">
        <h4>Tortillas with cheese</h4>
        

        <div className="scheme">
          <p>
            <b>Content:</b>
          </p>
          <ul>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
          </ul>
        </div>

        <div className="steps">
          <p>
            Lobio in Georgian is a dish that has long been eaten for lunch by the poorest segments of the population, because it consisted of the cheapest ingredients available to everyone. It is said that in the villages it was served in a large bowl along with gomi corn porridge, which was laid out directly on a carefully cleaned wooden table.
          </p>
          <br />
          <p>
            Each member of the family took a little porridge for himself, supplemented it with a piece of suluguni and scooped up lobio with a large spoon. Such a meal provided a feeling of satiety for a long time, which, in fact, was required of him. For us, lobio in Georgian is in some way a curiosity, an unusual dish, the availability of which makes it especially attractive.
          </p>
          <img src="img/dish.jpg" alt="Step" />
          <h4 style={{ marginTop: '50px' }}>STEP 1</h4>
          <p>
            Beans for lobio in Georgian sort, rinse, pour water and bring to a boil. Remove from heat, drain boiling water. Pour water again, add vegetable oil and sugar. Bring to a boil and cook until tender for about 1 hour.
          </p>
          <img src="img/step1.jpg" alt="Step 1" />
          <h4 style={{ marginTop: '50px' }}>STEP 2</h4>
          <p>
            Walnuts for lobio grind in a mortar or pass through a meat grinder. Cut the capsicum into thin rings. Peel and crush the garlic.
          </p>
          <img src="img/step2.jpg" alt="Step 2" />
          <h4 style={{ marginTop: '50px' }}>STEP 3</h4>
          <p>
            Wash, dry and chop coriander greens for lobio. To prepare the dressing: mix walnuts, garlic, cilantro, capsicum, all spices and pomegranate juice in a bowl.
          </p>
          <img src="img/step3.jpg" alt="Step 3" />
          <h4 style={{ marginTop: '50px' }}>STEP 4</h4>
          <p>
            Season with salt to taste. Peel the onion, cut into thin half rings, add to the hot beans. Pour in the dressing and mix well. Put the lobio in Georgian on a plate, sprinkle with pomegranate seeds.
          </p>
          <img src="img/step4.jpg" alt="Step 4" />
        </div>
      </div>
    </div>

    <div className="container-rate">
      <div className="row">
        <div className="col-md-6">
          <h2>Оставить отзыв</h2>
          <form id="review-form">
            <div className="form-group">
              <label htmlFor="name">Имя:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Оценка:</label>
              <select className="form-control" id="rating" name="rating" required>
                <option value="">Выберите оценку</option>
                <option value="Плохо">Плохо</option>
                <option value="Неудовлетворительно">Неудовлетворительно</option>
                <option value="Хорошо">Хорошо</option>
                <option value="Отлично">Отлично</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Ваш комментарий:</label>
              <textarea className="form-control" id="comment" name="comment" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Recipe;
