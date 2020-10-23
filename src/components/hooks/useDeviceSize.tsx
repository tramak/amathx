import React, { useEffect, useState } from 'react';

const DEVICE_MOBILE = 'mobile';
const DEVICE_DESK = 'desk';

export default function useDeviceSize() {
  const [device, setDevice] = useState(DEVICE_MOBILE);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setDevice(DEVICE_MOBILE);
      } else {
        setDevice(DEVICE_DESK);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}