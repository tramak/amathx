import React from 'react';
import useWindowSize from './useWindowSize';

const DEVICE_MOBILE = 'mobile';
const DEVICE_DESC = 'desc';

export default function useDeviceSize() {
  const size = useWindowSize();

  return size.width && size.width < 600 ? DEVICE_MOBILE : DEVICE_DESC;
}