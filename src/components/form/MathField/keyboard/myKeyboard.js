import makeKeyboard from './util/makeKeyboard2';

const config = {
  customVirtualKeyboardLayers: {
    baselayer: {
      blocks: [
        { // Строка 1
          data: [
            {
              title: 'Арифметические операции',
              type: 'primary', // цвет кнопок название взял из bootstrap
              btns: ['+', '-', '/', '*', 'a^{b}', 'sqrt{a}', '|a|'],
            },
            {
              btns: ['', ''] // делаем отступ в 2 кнопки
            },
            {
              title: 'Группа, индекс',
              type: 'light',
              btns: ['(...)', 'x_{i}'],
            },
            {
              btns: [''] // делаем отступ в 2 кнопки
            },
            {
              title: 'Переменные в задаче',
              type: 'warning',
              btns: ['x'],
            },
          ]
        },
        { // Строка 2
          data: [
            {
              title: 'Числа',
              type: 'light',
              btns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              btns: ['', ''] // делаем отступ в 2 кнопки
            },
            {
              title: 'Константы',
              type: 'primary',
              btns: ['e', 'pi']
            }
          ]
        },
        { // Строка 3
          data: [
            {
              title: 'Тригонометрия',
              type: 'success',
              btns: ['sin', 'cos', 'tg', 'ctg', 'arcsin', 'arccos', 'arctg', 'arcctg']
            },
            {
              btns: ['', '', '', ''] // делаем отступ в 4 кнопки
            },
            {
              title: 'Логарифмы',
              type: 'primary',
              btns: ['lg', 'ln', 'log']
            }
          ]
        }
      ]
    }
  },
  customVirtualKeyboards: {
    number: {
      label: 'Базавая',
      tooltip: 'Клавиатура базавая',
      layer: 'baselayer',
    },
  },
  virtualKeyboards: 'number',
};

const newConfig = makeKeyboard(config);
console.log(newConfig);
export default newConfig;