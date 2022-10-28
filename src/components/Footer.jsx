import { Link, useRoute } from 'wouter';
import useTimeRemaining from '../hooks/useTimeRemaining';
import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Footer() {
  const [match] = useRoute('/');
  const [days, hours, minutes, seconds, hasPassed] = useTimeRemaining();
  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: match ? 0 : 1, scale: match ? 0.8 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6, duration: 4, ease: 'easeOut' }}
        className="flex flex-col items-center mt-10 space-y-2 lg:mt-20"
      >
        <Logo />
        {!hasPassed && !match && (
          <p className="text-sm text-center">
            Just {days} {days > 1 ? 'days' : 'day'}, {hours}{' '}
            {hours > 1 ? 'hours' : 'hour'} and {minutes}{' '}
            {minutes > 1 ? 'minutes' : 'minute'} to go!
          </p>
        )}
      </motion.div>
    </Link>
  );
}
