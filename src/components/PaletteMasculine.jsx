import { motion } from 'framer-motion';
import { ArrowLeft, GenderFemale, GenderMale } from 'phosphor-react';
import { Link, useRoute } from 'wouter';
import Color from './Color';

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

export default function PaletteMasculine() {
  const [_, params] = useRoute('/palettes/:gender');

  return (
    <div className="flex flex-col items-center justify-between flex-1 min-w-full py-0 space-y-8 lg:py-6">
      <div className="flex flex-col items-center flex-1 space-y-6">
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
      <Link href="/invitation">
        <a className="cursor-pointer hover:font-medium text-[#333745]">
          <div className="flex items-center justify-between space-x-2">
            <ArrowLeft size={20} color="#3e3e3d" />
          </div>
        </a>
      </Link>
    </div>
  );
}
