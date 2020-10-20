// import { register } from 'mathlive/src/editor/commands';

import makeKeyboard from './util/makeKeyboard';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(i => ({
  class: 'keycap keyboard__btn-st',
  insert: `${i}`,
}));

const imgL = '<img src="https://s.gravatar.com/avatar/367c8569e12fca21d48669e0fa0e7afb?size=496&default=retro" width="20" height="20" />';


export default {
  customVirtualKeyboardLayers: {
    // 'number': {
    //   rows: [
    //     [
    //       ...numbers
    //     ],
    //   ],
    // },
    'number': makeKeyboard(),
    'trig': {
      backdrop: 'class__backdrop', // класс обёртка над контеинером с клавиатурой
      container: 'class__container', // класс обёртка над контеинером с клавиатурой
      rows: [
        [
          {
            key: '',
            altKeys: '',
            // class для кнопки, также есть зарезервированные класс '.keycap, .action, .fnbutton, .bigfnbutton', которые делают дополнительную магию
            class: 'bigfnbutton',
            // Ввод команд например удалить последний символ command: ['performWithFeedback', 'deletePreviousChar']
            // Переключится на альтернативню клавиатуру command: ['toggleVirtualKeyboardAlt']
            command: ['performWithFeedback', 'deletePreviousChar'],
            // Команда которая будет вставленна когда будет нажата кнопка
            insert: '$$\\operatorname{arcsin}\\left( #0 \\right)$$',
            // Latex оператор который будет отображаться на кнопке и при вставке в поле ввода
            latex: '\\operatorname{arcsin}',
            // Добавляем к контенту кнопки тег <aside> и вставляем туда содержимое
            aside: 'доп. инф.',
            // Используется для вставки svg символов на кнопку
            shifted: '<svg><use xlink:href="#svg-angle-double-right" /></svg>',
            // Команда которая будет выполненна когда произойдёт нажатие на кнопку с символом из shifted
            shiftedCommand: ['toggleVirtualKeyboardAlt'],
            // Текст кнопки innerHTML, но если стоит зарезервированный класс, то innerHTML будет браться из latex, insert, content
            label: '<img src="https://..." width="20" height="20" />'
          },
          {
            class: 'action',
            command: ['toggleVirtualKeyboard'],
            label: '&#x232b;'
          },
          {
            class: 'bigfnbutton',
            // insert: '$$\\operatorname{sin}(#?)$$',
            command: ['insert', '$$\\operatorname{sin}\\left( #0 \\right)$$'],
            label: imgL
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{arcsin}\\left( #0 \\right)$$',
            latex: 'arcsin',
            aside: 'доп. инф.',
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{cos}(#?)$$',
            latex: '\\operatorname{cos}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{arcsin}\\left( #0 \\right)$$',
            shifted: '<svg><use xlink:href="#svg-angle-double-right" /></svg>',
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{tan}(#?)$$',
            latex: '\\operatorname{tan}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{catan}(#?)$$',
            latex: '\\operatorname{catan}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{ln}(#?)$$',
            latex: '\\operatorname{ln}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{lg}(#?)$$',
            latex: '\\operatorname{lg}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\frac{\\differentialD #0}{\\differentialD #0}$$'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\sqrt[#?]{#0}$$'
          },
        ],
      ],
    }
  },
  customVirtualKeyboards: {
    'number': {
      label: 'Номера',
      tooltip: 'Клавиатура номера',
      layer: 'number',
    },
    'trig': {
      label: imgL,
      tooltip: 'Тригонометрическая клавиатура',
      layer: 'trig',
    },
  },
  virtualKeyboards: 'number trig',
};
