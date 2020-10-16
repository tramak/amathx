import number from './number';
import number2 from './number2';
import def from './def';
import other from './other';
import trig from './trig';

export interface KeyboardsType {
  [key: string]: object
}

const keyboards: KeyboardsType = {
  number,
  number2,
  def,
  other,
  trig
};

export default keyboards;
