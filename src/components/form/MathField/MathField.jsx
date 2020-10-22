import React, { useState, useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

import keyboards, { KeyboardsType } from './keyboard';
import './mathfield.scss';

// interface MathFieldProps {
//   type: keyof KeyboardsType;
// }

// const MathField: React.FC<MathFieldProps> = ({ type }) => {
const MathField = ({ type }) => {
  // const field = useRef<HTMLInputElement>();
  const [device, setDevice] = useState('mobile');
  const [mfe, setMfe] = useState();
  const field = useRef();
  const keyboard = useRef();
  // function updateOutput(mathfield) {
  //   const ast = MathLive.latexToAST(mathfield.$text());
  //   const result = evaluate(ast);
  //   document.getElementById('result').innerHTML =
  //       typeof result !== 'undefined' ? result.toString() : '';

  //   document.getElementById('output').innerHTML = escapeHtml(
  //       JSON.stringify(ast)
  //   );
  // }

  useEffect(() => {
    if (!field.current) {
      return;
    }

    const configKeyboardType = keyboards[type || 'def'];
    const configKeyboard = configKeyboardType[device] ? configKeyboardType[device]: configKeyboardType;
    const keyboardContent = keyboard.current || document.body;
    const config = {
      smartFence: true,
      smartMode: true,
      virtualKeyboardMode: 'onfocus',
      toDOMElement: keyboardContent,
      ...configKeyboard
    };
    // MathLive.makeMathField(field.current, config);

    const mf = new MathfieldElement();
    mf.setOptions(config);
    field.current.appendChild(mf);
    setMfe(mf);
  }, [field, keyboard]);

  // useEffect(() => {
  //   const iterval = setTimeout(() => {
  //     if (device === 'mobile') {
  //       setDevice('desc');
  //     } else {
  //       setDevice('mobile');
  //     }
  //     // setDevice(d => {
  //     //   console.log({ d });
  //     // });
  //   }, 3000);
  //
  //   return () => {
  //     clearTimeout(iterval);
  //   };
  // }, []);

  useEffect(() => {
    const configKeyboardType = keyboards[type || 'def'];
    if (mfe && configKeyboardType[device]) {
      const configKeyboard = configKeyboardType[device] ? configKeyboardType[device]: configKeyboardType;
      // const keyboardContent = keyboard.current || document.body;
      const config = {
        // smartFence: true,
        // smartMode: true,
        // virtualKeyboardMode: 'onfocus',
        // toDOMElement: keyboardContent,
        ...configKeyboard
      };

      console.log({
        device,
        customVirtualKeyboardLayers: config.customVirtualKeyboardLayers,
        customVirtualKeyboards: config.customVirtualKeyboards,
        virtualKeyboards: config.virtualKeyboards
      });

      mfe.setOptions({
        customVirtualKeyboardLayers: config.customVirtualKeyboardLayers,
        customVirtualKeyboards: config.customVirtualKeyboards,
        virtualKeyboards: config.virtualKeyboards
      });
    }
  }, [device]);

  return (
    <>
      <div className="input-mathfield">
        <div ref={field} />
      </div>
      <div ref={keyboard} className="keyboard-content" />
    </>
  );
};

export default MathField;
