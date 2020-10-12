const numbers = [1,2,3,4,5,6,7,8,9,0].map(i => ({
  class: 'keycap',
  insert: `${i}`,
}));

export default {
  customVirtualKeyboardLayers: {
    'layer-number1': {
      styles: '',
      rows: [
        [
          ...numbers
        ],
      ],
    },
    "layer-number2": `
      <div class='rows'>
          <ul>
              <row name='numpad-1' />
          </ul>
          <ul>
              <row name='numpad-2' />
          </ul>
          <ul>
              <row name='numpad-3' class='if-wide'/>
          </ul>
          <ul>
              <row name='numpad-4' class='if-wide'/> 
          </ul>
      </div>`,
  },
  customVirtualKeyboards: {
    'number': {
      label: 'Nubmers',
      tooltip: 'Nubmers keyboard',
      layer: 'layer-number1',
    },
  },
  virtualKeyboards: 'number',
};
