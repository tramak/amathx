import makeKeyboard from './util/makeKeyboard2';

const config = {
  desk: {
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
      base: {
        label: 'Базавая',
        tooltip: 'Клавиатура базавая',
        layer: 'baselayer',
      },
    },
    virtualKeyboards: 'base',
  },
  mobile: {
    customVirtualKeyboardLayers: {
      baselayer1: {
        blocks: [
          { // Строка 1
            data: [
              {
                type: 'primary', // цвет кнопок название взял из bootstrap
                btns: ['+', '-', '/', '*', 'a^{b}', 'sqrt{a}', '|a|'],
              }
            ]
          },
          {
            data: [
              {
                title: 'Группа, индекс',
                type: 'light',
                btns: ['(...)', 'x_{i}'],
              },
              {
                title: 'Переменные в задаче',
                type: 'warning',
                btns: ['x'],
              },
            ]
          },
        ]
      },
      baselayer2: {
        blocks: [
          { // Строка 2
            data: [
              {
                title: 'Числа',
                type: 'light',
                btns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
              },
            ]
          },
          // {
          //   data: [
          //     {
          //       type: 'light',
          //       btns: [5, 6, 7, 8, 9]
          //     },
          //   ]
          // },
          {
            data: [
              {
                title: 'Константы',
                type: 'primary',
                btns: ['e', 'pi']
              }
            ]
          },
        ]
      },
      baselayer3: {
        blocks: [
          { // Строка 3
            data: [
              {
                title: 'Тригонометрия',
                type: 'success',
                btns: ['sin', 'cos', 'tg', 'ctg', 'arcsin', 'arccos', 'arctg', 'arcctg']
              },
            ]
          },
          {
            data: [
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
      base1: {
        label: 'Арифметические операции',
        tooltip: 'Арифметические операции',
        layer: 'baselayer1',
      },
      base2: {
        label: 'Числа и константы',
        tooltip: 'Арифметические операции',
        layer: 'baselayer2',
      },
      base3: {
        label: 'Тригонометрия',
        tooltip: 'Арифметические операции',
        layer: 'baselayer3',
      },
    },
    virtualKeyboards: 'base1 base2 base3',
  }
};

const newConfig = makeKeyboard(config);
console.log(newConfig);
export default newConfig;