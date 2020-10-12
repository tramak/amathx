export default {
  customVirtualKeyboardLayers: {
    'layer-name': {
      styles: '',
      rows: [
        [
          {
            class: 'keycap',
            latex: '\\frac{x}{y}',
          },
        ],
      ],
    },
  },
  customVirtualKeyboards: {
    'number': {
      label: 'Json',
      tooltip: 'Json keyboard',
      layer: 'layer-name',
    },
  },
  virtualKeyboards: 'number',
};
