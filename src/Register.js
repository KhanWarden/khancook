import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="registration-box">
        <h2 className="text-center">Регистрация</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Фамилия" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Имя" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Отчество" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Электронная почта" />
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" placeholder="Номер телефона" />
          </div>
          <div className="form-group">
            <input type="date" className="form-control" placeholder="Дата рождения" />
          </div>
          <div className="checkbox-group">
            <label>Выберите предпочитаемые категории блюд:</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Выпечка и десерты" id="category1" />
              <label className="form-check-label" htmlFor="category1">Выпечка и десерты</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Овощи" id="category2" />
              <label className="form-check-label" htmlFor="category2">Овощи</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Мясо" id="category3" />
              <label className="form-check-label" htmlFor="category3">Мясо</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Морепродукты" id="category4" />
              <label className="form-check-label" htmlFor="category4">Морепродукты</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Макароны" id="category5" />
              <label className="form-check-label" htmlFor="category5">Макароны</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
