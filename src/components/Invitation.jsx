import { ArrowRight, MapPin, Palette } from 'phosphor-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Invitation() {
  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-0 space-y-8 lg:py-6">
      <div className="flex flex-col items-center justify-center flex-1 min-w-full min-h-full text-xl text-center align-middle">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join us to celebrate our love.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          On Friday, 4th of November <br /> 16: 45 - 18: 45 <br /> at
          Farukolhufushi.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          See you at our wedding.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="flex flex-col gap-y-6"
      >
        <Link href="/palettes/feminine">
          <a className="cursor-pointer hover:font-medium text-[#333745]">
            <div className="flex items-center justify-center space-x-2">
              <Palette />
              <span>Color Palette</span>
              <ArrowRight size={20} color="#3e3e3d" />
            </div>
          </a>
        </Link>
        <a
          href="https://goo.gl/maps/NTkjY4UtR9jQ5Dqy6"
          className="cursor-pointer hover:font-medium text-[#333745]"
        >
          <div className="flex items-center justify-center space-x-2">
            <MapPin />
            <span>Directions</span>
            <ArrowRight size={20} color="#3e3e3d" />
          </div>
        </a>
      </motion.div>
    </div>
  );
}
