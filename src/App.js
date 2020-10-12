import React from 'react';
import logo from './logo.svg';
import './App.css';
import MathField from './components/form/MathField/MathField';
import LatexToMarkup from './components/math/LatexToMarkup/LatexToMarkup';
import "mathlive/dist/mathlive-fonts.css";

function App() {
  return (
    <div className="app">
      <div className="question">
        1. На автозаправке клиент отдал кассиру 1000 рублей и попросил залить бензин до полного бака. Цена бензина 27 руб. за литр. Клиент получил 82 руб. сдачи. Сколько литров бензина было залито в бак?
      </div>
      <MathField type="other" />

      <div className="question">
      2. На рисунке жирными точками показан курс евро, установленный Центробанком РФ, во все рабочие дни с 1 по 29 сентября 2001 года. По горизонтали указываются числа месяца, по вертикали – курс евро в рублях. Для наглядности жирные точки на рисунке соединены линией. Определи по рисунку наименьший курс евро в период с 21 по 28 сентября. Ответ дай в рублях.
      </div>
      <MathField type="" />

      <div className="question">
        <LatexToMarkup />
      </div>
      <MathField type="number" />

      <div className="question">
        <LatexToMarkup />
      </div>
      <MathField type="number2" />
      <div id="keyboardContent"></div>
    </div>
  );
}

export default App;
