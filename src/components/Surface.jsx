import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, useRoute, useRouter } from 'wouter';
import Footer from './Footer';
import Invitation from './Invitation';
import Opening from './Opening';
import PaletteFeminine from './PaletteFeminine';
import PaletteMasculine from './PaletteMasculine';
import Palettes from './Palettes';

const AnimationSettings = {
  transition: { duration: 1 },
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const routes = {
  '/': Opening,
  '/invitation': Invitation,
  '/palettes': Palettes,
  '/palettes/feminine': PaletteFeminine,
  '/palettes/masculine': PaletteMasculine,
};

export default function Surface() {
  useRouter();
  const [location, setLocation] = useLocation();
  const [match] = useRoute('/');
  const Route = routes[location];

  useEffect(() => {
    const timer = setTimeout(() => {
      match && setLocation('/invitation');
    }, 12000);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <motion.div
      initial={{ backgroundColor: 'rgba(251, 251, 250, 1)' }}
      animate={{ background: 'rgba(251, 251, 250, 0)' }}
      transition={{ duration: 4, delay: 8 }}
      className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-full py-14 font-galins text-[#333745]"
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="flex flex-col flex-1 min-w-full min-h-full"
          key={location}
          {...AnimationSettings}
        >
          <Route />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}
