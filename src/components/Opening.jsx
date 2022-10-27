import Drawing from './Drawing';
import Logo from './Logo';

export default function Opening() {
  return (
    <div className="flex flex-col items-center justify-around bg-[#fafaf9] gap-y-10 min-h-full">
      <Drawing />
      <Logo />
    </div>
  );
}
