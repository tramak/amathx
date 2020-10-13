import React, { useEffect, useRef } from 'react';
import MathLive from "mathlive";

import * as keyboards from './keyboard';
import './mathfield.css';

const MathField = ({ type }) => {
  const field = useRef();
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

    const configKeyboard = keyboards[type || 'def'];
    const mf = MathLive.makeMathField(field.current, {
        smartFence: true,
        smartMode: true,
        virtualKeyboardMode: 'onfocus',
        toDOMElement: document.getElementById('keyboardContent'),
        ...configKeyboard,
        onContentDidChange: (mf) => {
          const latex = mf.$text();
          // document.getElementById('latex').innerHTML = escapeHtml(
          //     latex
          // );

          //   const mathJSON = MathLive.latexToAST(latex);
          //   document.getElementById('mathjson').innerHTML = escapeHtml(
          //       JSON.stringify(mathJSON)
          //  );
        },
    });
  }, [field]);

  return (
    <div className="input-mathfield">
      <div ref={field}  className="mathfield" id="mf" tabIndex='0' />
      <div id="latex" />
      <div id="result" />
      <div id="output" />
    </div>
  )
};

export default MathField;
