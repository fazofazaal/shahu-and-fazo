import Backdrop from './components/Backdrop';
import Surface from './components/Surface';
import { useEffect } from 'react';
import splitbee from '@splitbee/web';

export default function App() {
  useEffect(() => splitbee.init(), []);

  return (
    <>
      <Surface />
      <Backdrop />
    </>
  );
}
