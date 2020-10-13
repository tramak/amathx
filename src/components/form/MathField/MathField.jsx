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
    const keyboardContent = document.getElementById('keyboardContent');
    const sep = document.getElementById('sep');
    const app = document.getElementById('app');
    const mf = MathLive.makeMathField(field.current, {
        smartFence: true,
        smartMode: true,
        virtualKeyboardMode: 'onfocus',
        toDOMElement: keyboardContent,
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
        onVirtualKeyboardToggle: (sender, visible, keyboardElement) => {
            return;
            if (!visible) {
                sep.style.height = 0;
            }

            setTimeout(() => {
                if (visible) {
                    sep.style.height = `${keyboardElement.offsetHeight}px`;

                    console.log({ sender, visible, keyboardElement }, {
                        elemRect: sender.element.getBoundingClientRect(),
                        appRect: app.getBoundingClientRect(),
                        scrollTop: app.scrollTop,
                    });
                }
            });
        }
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
