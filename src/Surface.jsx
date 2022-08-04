import { useState } from 'react';
import Navbar from './Navbar';

export default function Surface() {
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-screen px-12 py-16 bg-yellow-[C1CDC3] bg-opacity-20 bg-blend-color backdrop-filter">
      {showPalette ? (
        <Palette onNavigate={() => setShowPalette(false)} />
      ) : (
        <Countdown onNavigate={() => setShowPalette(true)} />
      )}
    </div>
  );
}

function Countdown({ onNavigate }) {
  const daysTillNov4 = () => {
    const today = new Date();
    const nov4 = new Date(today.getFullYear(), 10, 4);
    const diff = nov4 - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-6 ">
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-9xl">{daysTillNov4()}</h1>
        <h5 className="text-6xl">Days</h5>
      </div>
      <button
        className="cursor-pointer hover:font-medium animate-pulse"
        onClick={onNavigate}
      >
        View Color Palette ⟶
      </button>
      <Footer />
    </div>
  );
}

function Palette({ onNavigate }) {
  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-6 bg-white">
      <div className="flex flex-col space-y-4">
        <Color value="#99A19C" />
        <Color value="#C1CDC3" />
        <Color value="#B49AAC" />
        <Color value="#D3C4CB" />
      </div>
      <button onClick={onNavigate}>Back</button>
      <Footer />
    </div>
  );
}

const Logo = () => <div className="text-xl font-semibold">Shahu & Fazo</div>;

const Color = ({ value }) => (
  <svg height="100" width="100">
    <circle cx="50" cy="50" r="40" fill={value} />
  </svg>
);

const Footer = () => (
  <div className="flex flex-col items-center space-y-2">
    <Logo />
    <h6 className="text-md">04/11/2022</h6>
  </div>
);
