import { operators } from './op';

const config = {
  customVirtualKeyboardLayers: {
    mykeyboardLayer: {
      blocks: [
        {
          data: [
            {
              title: 'Арифметические операции',
              class: 'keyboard__block_col1',
              classBtn: 'keyboard__btn-primary',
              btns: ['+', '-', '/', '*', 'a^{b}', 'sqrt{a}', '|a|'],
            },
            {
              title: 'Группа, индекс',
              class: 'keyboard__block_col2',
              classBtn: 'keyboard__btn-light',
              btns: ['(...)', 'x_{i}'],
            },
            {
              title: 'Переменные в задаче',
              class: 'keyboard__block_col3',
              classBtn: 'keyboard__btn-warning',
              btns: ['x'],
            }
        ]
        }
      ],
      stillBlocks: [
        {
          data: [
            {
              title: 'Числа',
              class: 'keyboard__block_col1',
              classBtn: 'keyboard__btn-light',
              btns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
              title: 'Константы',
              class: 'keyboard__block_col3',
              classBtn: 'keyboard__btn-primary',
              btns: ['e', 'pi']
            }
          ]
        },
        {
          data: [
            {
              title: 'Тригонометрия',
              class: 'keyboard__block_col1',
              classBtn: 'keyboard__btn-success',
              btns: ['sin', 'cos', 'tg', 'ctg', 'arcsin', 'arccos', 'arctg', 'arcctg']
            },
            {
              title: 'Логарифмы',
              class: 'keyboard__block_col3',
              classBtn: 'keyboard__btn-primary',
              btns: ['lg', 'ln', 'log']
            }
          ]
        }
      ]
    }
  }
};


const template = `
  <div class='rows'>
    <div class="keyboard__row-group">
      <div class="keyboard__block keyboard__block_col1">
        <h3 class="keyboard__title">Арифметические операции</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-primary' data-insert='+'>+</li>
          <li class='keycap keyboard__btn-primary' data-insert='-'>–</li>
          <li class='keycap keyboard__btn-primary' data-insert='/'>/</li>
          <li class='keycap keyboard__btn-primary' data-insert='*'>•</li>
          <li class='keycap keyboard__btn-primary' data-insert='{#?}^{#?}' data-latex='$$a^{b}$$' />
          <li class='keycap keyboard__btn-primary' data-insert='$$\\sqrt{#0}$$' data-latex='\\sqrt{a}' />
          <li class='keycap keyboard__btn-primary' data-insert='$$\\left| #0 \\right|$$' data-latex='\\left| a \\right|' />
        </ul>
      </div>
      
      <div class="keyboard__block keyboard__block_col2">
        <h3 class="keyboard__title">Группа, индекс</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-light' data-insert='$$\\left( #0 \\right)$$'>(...)</li>
          <li class='keycap keyboard__btn-light' data-insert='{#?}_{#?}' data-latex='x_{i}' />
        </ul>
      </div>
      
      <div class="keyboard__block keyboard__block_col3">
        <h3 class="keyboard__title">Переменные в задаче</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-warning' data-insert='$$x$$'>x</li>
        </ul>
      </div>
    </div>
    
    <div class="keyboard__more">
      <span class="keyboard__still">Ещё</span>
      <span class="keyboard__rollup">Свернуть</span>
    </div>
    
    <div class="keyboard__row-group">
      <div class="keyboard__block keyboard__block_col1">
        <h3 class="keyboard__title">Числа</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-light' data-insert='0'>0</li>
          <li class='keycap keyboard__btn-light' data-insert='1'>1</li>
          <li class='keycap keyboard__btn-light' data-insert='2'>2</li>
          <li class='keycap keyboard__btn-light' data-insert='3'>3</li>
          <li class='keycap keyboard__btn-light' data-insert='4'>4</li>
          <li class='keycap keyboard__btn-light' data-insert='5'>5</li>
          <li class='keycap keyboard__btn-light' data-insert='6'>6</li>
          <li class='keycap keyboard__btn-light' data-insert='7'>7</li>
          <li class='keycap keyboard__btn-light' data-insert='8'>8</li>
          <li class='keycap keyboard__btn-light' data-insert='9'>9</li>
        </ul>
      </div>
      
      <div class="keyboard__block keyboard__block_col3">
        <h3 class="keyboard__title">Константы</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-primary' data-insert='e'>e</li>
          <li class='keycap keyboard__btn-primary' data-insert='$$\\pi$$' data-latex='$$\\pi$$' />
        </ul>
      </div>
    </div>
    
    <div class="keyboard__row-group">
      <div class="keyboard__block keyboard__block_col1">
        <h3 class="keyboard__title">Тригонометрия</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{sin}\\left( #0 \\right)$$'>sin</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{cos}\\left( #0 \\right)$$'>cos</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{tg}\\left( #0 \\right)$$'>tg</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{arcsin}\\left( #0 \\right)$$'>arc sin</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{arccos}\\left( #0 \\right)$$'>arc cos</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{arctg}\\left( #0 \\right)$$'>arc tg</li>
          <li class='keycap keyboard__btn-success' data-insert='$$\\operatorname{arcctg}\\left( #0 \\right)$$'>arc ctg</li>
        </ul>
      </div>
      
      <div class="keyboard__block keyboard__block_col3">
        <h3 class="keyboard__title">Логарифмы</h3>
        <ul class="keyboard__list">
          <li class='keycap keyboard__btn-primary' data-insert='$$\\operatorname{lg}\\left( #0 \\right)$$'>lg</li>
          <li class='keycap keyboard__btn-primary' data-insert='$$\\operatorname{ln}\\left( #0 \\right)$$'>ln</li>
          <li class='keycap keyboard__btn-primary' data-insert='$$\\log_{#?} #0 $$'>log</li>
        </ul>
      </div>
    </div>
  </div>
`;

function makeKeyboardLayerBlocks(blocks) {
  let tempLayer = '';
  blocks.forEach(block => {
    tempLayer += '<div class="keyboard__row-group">';
    block.data.forEach(item => {
      tempLayer += `<div class="keyboard__block ${item.class}">`;
      tempLayer += `<h3 class="keyboard__title">${item.title}</h3>`;
      tempLayer += '<ul class="keyboard__list">';
      item.btns.forEach(btn => {
        const keycap = operators[btn];
        tempLayer += '<li';
        if (item.classBtn) {
          tempLayer += ` class="keycap ${item.classBtn}"`;
        } else {
          tempLayer += ' class="keycap"';
        }
        if (keycap.key) {
          tempLayer += ` data-key="${keycap.key}"`;
        }

        if (keycap.command) {
          if (typeof keycap.command === 'string') {
            tempLayer += ` data-command='"${keycap.command}"'`;
          } else {
            tempLayer += ' data-command=\'';
            tempLayer += JSON.stringify(keycap.command);
            tempLayer += '\'';
          }
        }
        if (keycap.insert) {
          tempLayer += ` data-insert="${keycap.insert}"`;
        }

        if (keycap.latex) {
          tempLayer += ` data-latex="${keycap.latex}"`;
        }

        if (keycap.aside) {
          tempLayer += ` data-aside="${keycap.aside}"`;
        }

        if (keycap.altKeys) {
          tempLayer += ` data-alt-keys="${keycap.altKeys}"`;
        }

        if (keycap.shifted) {
          tempLayer += ` data-shifted="${keycap.shifted}"`;
        }

        if (keycap.shiftedCommand) {
          tempLayer += ` data-shifted-command="${keycap.shiftedCommand}"`;
        }

        tempLayer += `>${
          keycap.label ? keycap.label : ''
        }</li>`;
      });
      tempLayer += '</ul>';
      tempLayer += '</div>';
    });
    tempLayer += '</div>';
  });

  return tempLayer;
}

function makeKeyboardLayer(keyboardLayer) {
  let tempLayer = '';
  if (!keyboardLayer.blocks || keyboardLayer.blocks.length === 0) {
    return tempLayer;
  }

  tempLayer = '<div class="rows">';
  tempLayer += makeKeyboardLayerBlocks(keyboardLayer.blocks);

  if (keyboardLayer.stillBlocks) {
    tempLayer += `
      <div class="keyboard__more">
        <span class="keyboard__still">Ещё</span>
        <span class="keyboard__rollup">Свернуть</span>
      </div>
    `;
    tempLayer += makeKeyboardLayerBlocks(keyboardLayer.stillBlocks);
  }
  tempLayer += '</div>';

  return tempLayer;
}

export default function makeKeyboard(keyboard) {
  // config.customVirtualKeyboardLayers()
  const keyboardLayer = makeKeyboardLayer(config.customVirtualKeyboardLayers.mykeyboardLayer);
  return keyboardLayer;
}
