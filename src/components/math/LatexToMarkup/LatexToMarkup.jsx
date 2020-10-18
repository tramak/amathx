import React, { useEffect, useRef } from 'react';
import MathLive from "mathlive";

const text = `
  3. Вычеслите выражение
  <div class="mathfield">x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}</div>
  Напишите ответ в виде числа
`;
const LatexToMarkup = () => {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const elems = ref.current.querySelectorAll('.mathfield');
    Array.prototype.forEach.call(elems, elem => {
      MathLive.makeMathField(elem);
    });
  }, [ref]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default LatexToMarkup;
