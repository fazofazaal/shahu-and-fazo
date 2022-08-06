import { Link, Route, useRoute, useLocation, useRouter } from 'wouter';
import {
  GenderFemale,
  ArrowRight,
  GenderMale,
  ArrowLeft,
} from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';

const AnimationSettings = {
  transition: { duration: 1 },
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const routes = {
  '/': Countdown,
  '/palettes/feminine': Palette,
  '/palettes/masculine': Palette,
};

export default function Surface() {
  useRouter();
  const [location] = useLocation();
  const Route = routes[location];

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-full px-12 py-8 md:py-16 lg:py-16 bg-[#C1CDC3] bg-opacity-0 bg-blend-color backdrop-filter font-galins"
        key={location}
        {...AnimationSettings}
      >
        <Route />
      </motion.div>
    </AnimatePresence>
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

const Logo = () => <div className="text-xl font-semibold">Shahu & Fazo</div>;

const Footer = memo(() => (
  <div className="flex flex-col items-center space-y-2 text-[#333745]">
    <Logo />
    <h6 className="text-md text-[#333745]">04/11/2022</h6>
  </div>
));
