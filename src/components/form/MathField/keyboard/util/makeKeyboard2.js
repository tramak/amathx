import { operators } from './op';

function makeKeyboardLayerBlocks(blocks) {
  let tempLayer = '';
  blocks.forEach(block => {
    tempLayer += '<div class="keyboard__row-group">';
    block.data.forEach(item => {
      tempLayer += `<div class="keyboard__block ${item.class ? item.class: ''}">`;
      if (item.title) {
        tempLayer += `<h3 class="keyboard__title">${item.title}</h3>`;
      }
      tempLayer += '<ul class="keyboard__list">';
      item.btns.forEach(btn => {
        if (btn === '') {
          tempLayer += '<li class="keyboard__btn-empty" />';
          return;
        }

        const keycap = operators[btn];
        tempLayer += '<li';
        if (item.type) {
          const classBtn = `keyboard__btn-${item.type}`;
          tempLayer += ` class="keycap ${classBtn}"`;
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

function makeKeyboardItem(config) {
  const customVirtualKeyboardLayers = Object
    .entries(config.customVirtualKeyboardLayers)
    .reduce((newConfig, [key, value]) => ({
      ...newConfig,
      [key]: makeKeyboardLayer(value)
    }), {});

  return {
    ...config,
    customVirtualKeyboardLayers
  };
}

export default function makeKeyboard(config) {
  const desk = makeKeyboardItem(config.desk);
  const mobile = makeKeyboardItem(config.mobile);

  return {
    desk,
    mobile
  };
}

