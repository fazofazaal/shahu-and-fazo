import { useState, useMemo } from 'react';
import { Link, Route } from 'wouter';
import DiamondArrow from './DiamondArrow';

export default function Surface() {
  // const [showPalette, setShowPalette] = useState(false);

  return (
    <div className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-full px-12 py-8 md:py-36 lg:py-16 bg-[#C1CDC3] bg-opacity-0 bg-blend-color backdrop-filter font-galins">
      {/* {showPalette ? (
        <Palette onNavigate={() => setShowPalette(false)} />
      ) : (
        <Countdown onNavigate={() => setShowPalette(true)} />
      )} */}
      <Route path="/" component={Countdown} />
      <Route path="/palettes/girls" component={Palette} />
      <Route path="/palettes/boys" component={Palette} />
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
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-0 lg:py-6 ">
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-9xl text-[#333745]">{daysTillNov4()}</h1>
        <h5 className="text-6xl text-[#333745]">Days</h5>
      </div>
      <Link href="/palettes/girls">
        <a
          className="cursor-pointer hover:font-medium animate-pulse text-[#333745]"
          // onClick={onNavigate}
        >
          <div className="flex items-center justify-between space-x-2">
            <span>View Color Palette</span>
            <DiamondArrow />
          </div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}

const PaletteGirls = () => (
  <div className="flex flex-col items-center justify-center flex-1 space-y-0 lg:space-y-2">
    <Color value="#D1B3C9" />
    <Color value="#B3809A" />
    <Color value="#BBBAA0" />
    <Color value="#969D80" />
  </div>
);

const PaletteBoys = () => (
  <div className="flex flex-col items-center justify-center flex-1 space-y-0 lg:space-y-2">
    <Color value="#FBFBFA" />
    <Color value="#A3A3A3" />
  </div>
);

function Palette({ onNavigate }) {
  // use memo return selected tags

  // const palette = useMemo(() => [
  //   { name: 'GIRLS', component: <PaletteGirls /> },
  //   { name: 'BOYS', component: <PaletteBoys /> },
  // ]);

  // const [selected, setSetelected] = useState();

  // useEffect(() => {
  //   setSelected(palettes[0]);
  // }, [selected]);

  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-0 space-y-8 lg:py-6">
      <div className="flex flex-col items-center flex-1 space-y-2">
        {/* {selected.component} */}
        <Route path="/palettes/girls" component={PaletteGirls} />
        <Route path="/palettes/boys" component={PaletteBoys} />
        <div className="flex-col items-center space-y-2">
          <div className="flex justify-center space-x-4">
            <Link href="/palettes/girls">
              <a className="link">Girls</a>
            </Link>
            <Link href="/palettes/boys">
              <a className="link">Boys</a>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/">
        <a
          // onClick={onNavigate}
          className="cursor-pointer hover:font-medium animate-pulse text-[#333745]"
        >
          <div className="flex items-center justify-between space-x-2">
            <span className="-rotate-180">
              <DiamondArrow />
            </span>
            <span>Back</span>
          </div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}

const Logo = () => <div className="text-xl font-semibold">Shahu & Fazo</div>;

const Color = ({ value }) => (
  <svg
    height="100"
    width="100"
    className={`transition-all duration-700 ease-in-out transform scale-75 lg:scale-90 cursor-pointer hover:scale-100`}
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      fill={value}
      stroke={`${value === '#FBFBFA' ? '#333745' : '#FFFFFF'}`}
    />
  </svg>
);

const Footer = () => (
  <div className="flex flex-col items-center space-y-2 text-[#333745]">
    <Logo />
    <h6 className="text-md text-[#333745]">04/11/2022</h6>
  </div>
);
