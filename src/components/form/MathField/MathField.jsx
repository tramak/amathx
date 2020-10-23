import React, { useState, useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

import keyboards, { KeyboardsType } from './keyboard';
import './mathfield.scss';
import useDeviceSize from '../../hooks/useDeviceSize';

// interface MathFieldProps {
//   type: keyof KeyboardsType;
// }

// const MathField: React.FC<MathFieldProps> = ({ type }) => {
const MathField = ({ type }) => {
  // const field = useRef<HTMLInputElement>();
  const device = useDeviceSize();
  const [mfe, setMfe] = useState();
  const field = useRef();
  const keyboard = useRef();

  useEffect(() => {
    if (!field.current) {
      return;
    }

    const configKeyboardType = keyboards[type || 'def'];
    const configKeyboard = configKeyboardType;
    console.log({ configKeyboardType });
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

  // function update() {
  //   setTimeout(() => {
  //     console.log(device, device === 'mobile');
  //     if (device === 'mobile') {
  //       console.log('set desk');
  //       setDevice('desk');
  //     } else {
  //       setDevice('mobile');
  //     }
  //
  //     update();
  //     // setDevice(d => {
  //     //   console.log({ d });
  //     // });
  //   }, 3000);
  // }

  // useEffect(() => {
  //   const configKeyboardType = keyboards[type || 'def'];
  //   if (mfe && configKeyboardType[device]) {
  //     const configKeyboard = configKeyboardType[device] ? configKeyboardType[device]: configKeyboardType;
  //     // const keyboardContent = keyboard.current || document.body;
  //     const config = {
  //       // smartFence: true,
  //       // smartMode: true,
  //       // virtualKeyboardMode: 'onfocus',
  //       // toDOMElement: keyboardContent,
  //       ...configKeyboard
  //     };
  //
  //     console.log({
  //       device,
  //       customVirtualKeyboardLayers: config.customVirtualKeyboardLayers,
  //       customVirtualKeyboards: config.customVirtualKeyboards,
  //       virtualKeyboards: config.virtualKeyboards
  //     });
  //
  //     mfe.setOptions({
  //       customVirtualKeyboardLayers: config.customVirtualKeyboardLayers,
  //       customVirtualKeyboards: config.customVirtualKeyboards,
  //       virtualKeyboards: config.virtualKeyboards
  //     });
  //   }
  // }, [device]);

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
