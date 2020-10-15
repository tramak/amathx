// import { register } from 'mathlive/src/editor/commands';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(i => ({
  class: 'keycap',
  insert: `${i}`,
}));

const imgL = '<img src="https://s.gravatar.com/avatar/367c8569e12fca21d48669e0fa0e7afb?size=496&default=retro" width="20" height="20" />';

export default {
  customVirtualKeyboardLayers: {
    'number': {
      rows: [
        [
          ...numbers
        ],
      ],
    },
    'trig': {
      backdrop: 'class__backdrop', // класс обёртка над контеинером с клавиатурой
      container: 'class__container', // класс обёртка над контеинером с клавиатурой
      rows: [
        [
          {
            class: '', // class для кнопки, также есть зарезервированные класс '.keycap, .action, .fnbutton, .bigfnbutton', которые делают дополнительную магию
            key: '',
            // Ввод команд например удалить последний символ command: ['performWithFeedback', 'deletePreviousChar']
            // Переключится на альтернативню клавиатуру command: ['toggleVirtualKeyboardAlt']
            command: '',
            insert: '',
            latex: '',
            aside: '', // оборачиват тегом <aside> контент кнопки
            altKeys: '',
            shifted: '',
            shiftedCommand: '',
            label: '' // Текст кнопки innerHTML, но если стоит зарезервированный класс, то innerHTML будет браться из latex, insert, content
          },
          {
            class: 'action',
            command: ['toggleVirtualKeyboard'],
            label: '&#x232b;'
          },
          {
            class: '',
            insert: '$$\\operatorname{sin}(#?)$$',
            label: imgL
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{arcsin}(#?)$$',
            latex: '\\operatorname{arcsin}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{cos}(#?)$$',
            latex: '\\operatorname{cos}'
          },
          {
            class: 'bigfnbutton',
            insert: '$$\\operatorname{arccos}(#?)$$',
            latex: '\\operatorname{arccos}'
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
