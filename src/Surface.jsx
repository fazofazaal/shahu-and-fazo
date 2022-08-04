import Navbar from './Navbar';

export default function Surface() {
  const daysTillNov4 = () => {
    const today = new Date();
    const nov4 = new Date(today.getFullYear(), 10, 4);
    const diff = nov4 - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="absolute z-10 flex flex-col items-center justify-between min-w-full min-h-screen px-12 py-16 bg-yellow-100 bg-opacity-20 bg-blend-color backdrop-filter backdrop-blur-sm">
      <Countdown onClick={() => console.log('clicked')} />
    </div>
  );
}

function Countdown({ onClick }) {
  const daysTillNov4 = () => {
    const today = new Date();
    const nov4 = new Date(today.getFullYear(), 10, 4);
    const diff = nov4 - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-9xl">{daysTillNov4()}</h1>
        <h5 className="text-6xl">Days</h5>
      </div>
      <button
        className="cursor-pointer hover:font-medium animate-pulse"
        onClick={onClick}
      >
        View Color Palette ⟶
      </button>
      <div className="text-xl font-semibold">Shahu & Fazo</div>
    </>
  );
}
