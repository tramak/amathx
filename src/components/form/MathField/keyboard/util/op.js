const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((result, i) => {
  return {
    ...result,
    [i]: {
      insert: `${i}`,
      label: i
    }
  };
}, {});

export const operators = {
  ...numbers,
  // Арифметические операции
  '+': {
    label: '+',
    insert: '+'
  },
  '-': {
    label: '–',
    insert: '-'
  },
  '/': {
    label: '/',
    insert: '/'
  },
  '*': {
    label: '•',
    insert: '*'
  },
  'a^{b}': {
    latex: '$$a^{b}$$',
    insert: '{#?}^{#?}'
  },
  'sqrt{a}': {
    latex: '\\sqrt{a}',
    insert: '$$\\sqrt{#0}$$'
  },
  '|a|': {
    latex: '\\left| a \\right|',
    insert: '$$\\left| #0 \\right|$$'
  },
  // Группа, индекс
  '(...)': {
    label: '(...)',
    insert: '$$\\left( #0 \\right)$$'
  },
  'x_{i}': {
    latex: 'x_{i}',
    insert: '{#?}_{#?}'
  },
  // Переменные в задаче
  'x': {
    label: 'x',
    insert: 'x'
  },
  // Константы
  'e': {
    label: 'e',
    insert: 'e'
  },
  'pi': {
    latex: '$$\\pi$$',
    insert: '$$\\pi$$'
  },
  // Тригонометрия
  'sin': {
    label: 'sin',
    insert: '$$\\operatorname{sin}\\left( #0 \\right)$$'
  },
  'cos': {
    label: 'cos',
    insert: '$$\\operatorname{cos}\\left( #0 \\right)$$'
  },
  'tg': {
    label: 'tg',
    insert: '$$\\operatorname{tg}\\left( #0 \\right)$$'
  },
  'ctg': {
    label: 'ctg',
    insert: '$$\\operatorname{ctg}\\left( #0 \\right)$$'
  },
  'arcsin': {
    label: 'arc sin',
    insert: '$$\\operatorname{arcsin}\\left( #0 \\right)$$'
  },
  'arccos': {
    label: 'arc cos',
    insert: '$$\\operatorname{arccos}\\left( #0 \\right)$$'
  },
  'arctg': {
    label: 'arc tg',
    insert: '$$\\operatorname{arctg}\\left( #0 \\right)$$'
  },
  'arcctg': {
    label: 'arc ctg',
    insert: '$$\\operatorname{arcctg}\\left( #0 \\right)$$'
  },
  'lg': {
    label: 'lg',
    insert: '$$\\operatorname{lg}\\left( #0 \\right)$$'
  },
  'ln': {
    label: 'ln',
    insert: '$$\\operatorname{ln}\\left( #0 \\right)$$'
  },
  'log': {
    label: 'log',
    insert: '$$\\log_{#?} #0 $$'
  }
};