const keyboardConfig = {
  // Здесь определяется внешний вид контента клавиатур, т.е. как будет выглядеть кнопки
  customVirtualKeyboardLayers: {
    'name': { // name - Название слоя клавиатуры
      backdrop: 'class__backdrop', // класс обёртка над контеинером с клавиатурой
      container: 'class__container', // класс обёртка над контеинером с клавиатурой
      // Строки клавиатуры
      // rows[0] 1 2 3 4 5 6 ...
      // rows[1] sin cos tang ...
      rows: [
        [
          {
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
        ]
      ]
    }
  },
  customVirtualKeyboards: {
    'name1': {
      label: 'Название вкладки клавиатура name1, любой html текст, можно картинку',
      tooltip: 'Подсказка которая будет показываться при наведении',
      layer: 'name', // Название слоя клавиатуры которое мы определили в customVirtualKeyboardLayers
    },
    'name2': {
      label: '<img src="https://..." width="20" height="20" />',
      tooltip: 'Тригонометрическая клавиатура',
      layer: 'trig',
    },
    'name3': {}
  },
  // Через запятую прописываем какие клавиатуры мы будем отображать
  virtualKeyboards: 'name1 name2',
  settingsKeyboards: {
    // Дополнительные параметры которых нет в стандартном наборе, но в дальнейшем нам понадобятся
    // Определим по мере надобности
  }
};

// 1. customVirtualKeyboardLayers
// Должен быть список наиболее часто используемых слоёв клавиатур, который не будет передаваться с бекенда, а будет уже зашит в коде
// Например number - номера, trig - тригонометрические функции, ...
// С бека будет передоваться только те клавиатуры которых нет в стандартном списке

// 2. customVirtualKeyboards
// Также необходимо прописать список наиболее часто используемых, остальные с бека

// 3. virtualKeyboards
// Присылаем для каждого поля отдельно

// Пример:
const jsonFromBackend = {
  // Если есть "задачи" для которых используются одинаковые настройки клавиатуры, лучше все эти настройки вынести отдельно, чтобы не дублировать для каждой "задачи"
  options: {
    customVirtualKeyboardLayers: {
      'customMainLayer': {}
    },
    customVirtualKeyboards: {
      'customKeyboard': {}
    }
  },
  questions: [
    {
      text: `
          1. Вычеслите выражение 1
          <div class="mathfield">x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}</div>
        `,
      options: [{
        virtualKeyboards: 'number trig'
      }]
    },
    {
      text: `
          2. Вычеслите выражение 2
          <div class="mathfield">x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}</div>
          Напишите ответ в виде числа
        `,
      options: [
        // массив делаю чтобы иметь возможность вставлять не одно поле ввода, а например 2 поля и между ними раздлитель
        {
          customVirtualKeyboardLayers: {
            'customLayer': {}
          },
          customVirtualKeyboards: {
            'customKeyboard': {
              label: 'Спец клавиатура для данного поля',
              layer: 'customLayer'
            }
          },
          virtualKeyboards: 'customKeyboard',
          flexGrow: 6 // регулируем ширину, если несколько полей
        },
        {
          delimiter: 'разделитель например',
          flexGrow: 1
        },
        {
          virtualKeyboards: 'number',
          flexGrow: 8
        }
      ]
    }
  ]
};


