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
    <svg
      width="62"
      height="13"
      viewBox="0 0 62 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.29557 6.39995C9.29557 9.99995 6.99157 12.2559 4.91157 12.2559C2.87957 12.2559 0.55957 9.99995 0.55957 6.39995C0.55957 2.79994 2.87957 0.543945 4.91157 0.543945C6.99157 0.543945 9.29557 2.79994 9.29557 6.39995ZM4.91157 0.639945C4.03157 0.639945 3.03957 2.52795 3.03957 6.38395C3.03957 10.2399 4.03157 12.1599 4.91157 12.1599C5.85557 12.1599 6.81557 10.2399 6.81557 6.38395C6.81557 2.52795 5.85557 0.639945 4.91157 0.639945ZM15.3827 8.3312V10.5759C15.3827 10.9599 15.1427 11.8239 14.2147 11.9999H18.9507C18.0227 11.8239 17.7827 10.9599 17.7827 10.5759V0.799945H17.0627L12.0006 7.14447L11.4414 7.84384L11.0517 8.3312H11.6757H15.3827ZM15.3827 7.7312H12.2997L15.3827 3.87545V7.7312ZM21.9318 9.75995C22.5398 9.75995 23.0518 10.2399 23.0518 10.8799C23.0518 11.5039 22.5398 11.9999 21.9318 11.9999C21.3078 11.9999 20.7958 11.5039 20.7958 10.8799C20.7958 10.2399 21.3078 9.75995 21.9318 9.75995ZM25.9101 10.5759V4.30395C25.9101 3.71195 25.7821 3.21595 25.0461 3.21595L28.3101 0.799945V10.5759C28.3101 10.9599 28.5501 11.8239 29.4781 11.9999H24.7421C25.6701 11.8239 25.9101 10.9599 25.9101 10.5759ZM39.9012 6.39995C39.9012 9.99995 37.5972 12.2559 35.5172 12.2559C33.4852 12.2559 31.1652 9.99995 31.1652 6.39995C31.1652 2.79994 33.4852 0.543945 35.5172 0.543945C37.5972 0.543945 39.9012 2.79994 39.9012 6.39995ZM35.5172 0.639945C34.6372 0.639945 33.6452 2.52795 33.6452 6.38395C33.6452 10.2399 34.6372 12.1599 35.5172 12.1599C36.4612 12.1599 37.4212 10.2399 37.4212 6.38395C37.4212 2.52795 36.4612 0.639945 35.5172 0.639945ZM42.3274 9.75995C42.9354 9.75995 43.4474 10.2399 43.4474 10.8799C43.4474 11.5039 42.9354 11.9999 42.3274 11.9999C41.7034 11.9999 41.1914 11.5039 41.1914 10.8799C41.1914 10.2399 41.7034 9.75995 42.3274 9.75995ZM47.6337 3.18395C47.6337 3.88795 47.0737 4.44795 46.3857 4.44795C45.6817 4.44795 45.1217 3.88795 45.1217 3.18395C45.0897 2.01595 46.2417 0.543945 48.6417 0.543945C50.7697 0.543945 52.2897 1.93595 52.2897 3.74395C52.2897 6.23975 50.2088 7.2797 48.2935 8.23691C47.4338 8.66654 46.6075 9.0795 46.0177 9.59995H52.2897L51.0257 11.9999H44.8977C44.8977 10.2553 45.9828 9.16803 47.133 8.01557C48.4299 6.71601 49.8097 5.33352 49.8097 2.83195C49.8097 1.93595 49.5377 0.767945 47.9537 0.767945C46.5297 0.767945 45.6497 1.93595 46.3857 1.93595C47.0737 1.93595 47.6337 2.49594 47.6337 3.18395ZM56.7812 3.18395C56.7812 3.88795 56.2212 4.44795 55.5332 4.44795C54.8292 4.44795 54.2692 3.88795 54.2692 3.18395C54.2372 2.01595 55.3892 0.543945 57.7892 0.543945C59.9172 0.543945 61.4372 1.93595 61.4372 3.74395C61.4372 6.23975 59.3563 7.2797 57.441 8.23691C56.5813 8.66654 55.755 9.0795 55.1652 9.59995H61.4372L60.1732 11.9999H54.0452C54.0452 10.2553 55.1303 9.16803 56.2805 8.01557C57.5774 6.71601 58.9572 5.33352 58.9572 2.83195C58.9572 1.93595 58.6852 0.767945 57.1012 0.767945C55.6772 0.767945 54.7972 1.93595 55.5332 1.93595C56.2212 1.93595 56.7812 2.49594 56.7812 3.18395Z"
        fill="#333745"
      />
    </svg>
    {/* <h6 className="text-md text-[#333745]">04/11/2022</h6> */}
  </div>
));
