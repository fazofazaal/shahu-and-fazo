import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  GenderFemale,
  GenderMale,
} from 'phosphor-react';
import { memo } from 'react';
import { Link, Route, useLocation, useRoute, useRouter } from 'wouter';
import Drawing from './Drawing';
import Logo from './Logo';
import Opening from './Opening';

const AnimationSettings = {
  transition: { duration: 1 },
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const routes = {
  '/': Invitation,
  '/palettes/feminine': Palette,
  '/palettes/masculine': Palette,
};

export default function Surface() {
  useRouter();
  const [location] = useLocation();
  const Route = routes[location];

  return (
    <Opening />
    // <AnimatePresence initial={true} exitBeforeEnter>
    //   <motion.div
    //     className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-full px-12 py-8 md:py-16 lg:py-16 bg-[#C1CDC3] bg-opacity-0 bg-blend-color backdrop-filter font-galins"
    //     key={location}
    //     {...AnimationSettings}
    //   >
    //     <Route />
    //   </motion.div>
    // </AnimatePresence>
  );
}

function Invitation() {
  const daysTillNov4 = () => {
    const today = new Date();
    const nov4 = new Date(today.getFullYear(), 10, 4);
    const diff = nov4 - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-full min-h-full py-0 text-xl text-center align-middle lg:py-6 gap-y-8">
      <p>Join us to celebrate our love...</p>
      <p>
        on Friday 4th of November <br /> <br /> 16:45 - 18:45 <br /> at
        Farukolhufushi.
      </p>
      <p>
        See you at our wedding
        {daysTillNov4() > 0 ? ` in ${daysTillNov4()} days` : ''}.
      </p>
      <Link href="/palettes/feminine">
        <a className="cursor-pointer hover:font-medium animate-pulse text-[#333745]">
          <div className="flex items-center justify-between space-x-2">
            <span>Color Palette</span>
            <ArrowRight size={20} color="#3e3e3d" />
          </div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}
function Countdown() {
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
      <Link href="/palettes/feminine">
        <a className="cursor-pointer hover:font-medium animate-pulse text-[#333745]">
          <div className="flex items-center justify-between space-x-2">
            <span>Color Palette</span>
            <ArrowRight size={20} color="#3e3e3d" />
          </div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const PaletteGirls = () => (
  <motion.ol
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    className="flex flex-col items-center justify-center flex-1 space-y-0 lg:space-y-2"
  >
    <Color value="#D1B3C9" />
    <Color value="#B3809A" />
    <Color value="#BBBAA0" />
    <Color value="#969D80" />
  </motion.ol>
);

const PaletteBoys = () => (
  <motion.ol
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    className="flex flex-col items-center justify-center flex-1 space-y-0 lg:space-y-2"
  >
    <Color value="#FBFBFA" />
    <Color value="#A3A3A3" />
  </motion.ol>
);

const Color = ({ value }) => (
  <motion.svg
    whileHover={{
      scale: 1.2,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
    height="100"
    width="100"
    className={`transform scale-75 lg:scale-90 cursor-pointer`}
    variants={item}
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      fill={value}
      stroke={`${value === '#FBFBFA' ? '#333745' : '#FFFFFF'}`}
    />
  </motion.svg>
);

function Palette() {
  const [_, params] = useRoute('/palettes/:gender');

  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-0 space-y-8 lg:py-6">
      <div className="flex flex-col items-center flex-1 space-y-2">
        <Route path="/palettes/feminine" component={PaletteGirls} />
        <Route path="/palettes/masculine" component={PaletteBoys} />
        <div className="flex-col items-center space-y-2">
          <div className="flex justify-between space-x-6">
            <Link href="/palettes/feminine">
              <a className="link">
                <GenderFemale
                  size={24}
                  className={`${
                    params?.gender == 'feminine'
                      ? 'scale-100 text-[#333745]'
                      : 'scale-75 text-[#7E85A0]'
                  } transition-all ease-out duration-300`}
                />
              </a>
            </Link>
            <Link href="/palettes/masculine">
              <a className="link">
                <GenderMale
                  size={24}
                  className={`${
                    params?.gender == 'masculine'
                      ? 'scale-100 text-[#333745]'
                      : 'scale-75 text-[#7E85A0]'
                  } transition-all ease-in-out duration-500`}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="cursor-pointer hover:font-medium text-[#333745]">
          <div className="flex items-center justify-between space-x-2">
            <ArrowLeft size={20} color="#3e3e3d" />
          </div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}

const Footer = memo(() => (
  <div className="flex flex-col items-center space-y-2 text-[#333745]">
    <Logo />
    <svg width="59" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.013 11.867c2.08 0 4.384-2.256 4.384-5.856S7.093.155 5.013.155C2.981.155.661 2.411.661 6.011s2.32 5.856 4.352 5.856ZM3.141 5.995c0-3.856.992-5.744 1.872-5.744.944 0 1.904 1.888 1.904 5.744s-.96 5.776-1.904 5.776c-.88 0-1.872-1.92-1.872-5.776Zm12.343 4.192V7.943H11.153l.39-.488.56-.7L17.163.412h.72v9.776c0 .384.24 1.248 1.168 1.424h-4.736c.928-.176 1.168-1.04 1.168-1.424Zm-3.083-2.844h3.083V3.487l-3.083 3.856Zm30.883-3.284c.688 0 1.248-.56 1.248-1.264a1.25 1.25 0 0 0-1.248-1.248c-.736 0 .144-1.168 1.568-1.168 1.584 0 1.856 1.168 1.856 2.064 0 2.502-1.38 3.884-2.676 5.184-1.15 1.152-2.236 2.24-2.236 3.984h6.128l1.264-2.4h-6.272c.59-.52 1.416-.933 2.276-1.363 1.915-.957 3.996-1.997 3.996-4.493 0-1.808-1.52-3.2-3.648-3.2-2.4 0-3.552 1.472-3.52 2.64 0 .704.56 1.264 1.264 1.264Zm-17.272 6.128V3.915c0-.592-.128-1.088-.864-1.088L28.412.411v9.776c0 .384.24 1.248 1.168 1.424h-4.736c.928-.176 1.168-1.04 1.168-1.424Zm-3.979-.816c.608 0 1.12.48 1.12 1.12 0 .624-.511 1.12-1.12 1.12a1.127 1.127 0 0 1-1.136-1.12c0-.64.513-1.12 1.137-1.12Zm10.642-5.456v6.272c0 .384-.24 1.248-1.168 1.424h4.736c-.928-.176-1.168-1.04-1.168-1.424V.411L31.81 2.827c.736 0 .864.496.864 1.088Zm6.551 5.456c.608 0 1.12.48 1.12 1.12 0 .624-.512 1.12-1.12 1.12a1.127 1.127 0 0 1-1.136-1.12c0-.64.512-1.12 1.136-1.12ZM53.68 2.795a1.257 1.257 0 1 1-2.512 0c-.032-1.168 1.12-2.64 3.52-2.64 2.128 0 3.648 1.392 3.648 3.2 0 2.496-2.081 3.536-3.996 4.493-.86.43-1.686.843-2.276 1.363h6.272l-1.264 2.4h-6.128c0-1.744 1.085-2.832 2.235-3.984 1.297-1.3 2.677-2.682 2.677-5.184 0-.896-.272-2.064-1.856-2.064-1.424 0-2.304 1.168-1.568 1.168.688 0 1.248.56 1.248 1.248Z"
        fill="#333745"
      />
    </svg>
    {/* <h6 className="text-md text-[#333745]">04/11/2022</h6> */}
  </div>
));
