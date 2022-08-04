import Navbar from "./Navbar";

export default function Surface() {
  return (
    <div className="flex flex-col absolute z-10 min-w-screen min-h-screen justify-between bg-yellow-100 bg-opacity-20 bg-blend-color backdrop-filter">
      <div className="flex flex-col justify between items-center py-12 px-6 space-y-6 h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl">24</h1>
          <h5 className="text-6xl">Days</h5>
        </div>
        <a href="" className="cursor-pointer hover:animate-pulse">View Color Palette ⟶</a>
        <div>Shahu & Fazo</div>
      </div>
    </div>
  );
}

// function Hero() {
//   return (
//     <section className="flex justify-center items-center px-12 py-auto">
//       <h3 className="text-4xl mr-36 text-left">
//         Hi, I'm Suhana, I like to write with my very unique handwriting and I
//         hope to become a psychologist one day. For when I type, here are the
//         results.
//       </h3>
//     </section>
//   );
// }

// function Articles() {
//   return (
//     <div className="flex justify-between items-center px-10">
//       {
//         // Loop five times a div
//         Array.from({ length: 5 }, (_, i) => (
//           <div key={i} className="flex flex-col space-y-2 h-card-height w-card-width px-4 pt-6 rounded-lg bg-white border bg-opacity-90 border-white border-opacity-80 shadow-lg backdrop-blur-md backdrop-filter bg-clip-padding">
//             <img src={`https://picsum.photos/id/${i * 10 + 15}/191/257`} alt="article cover image" className="shadow-inner"/>
//             <h3 className="text-lg font-medium">Article {i}</h3>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// function Footer() {
//   return <div className="flex justify-between items-center px-10 py-5">
//       <div>♥ Fazaal</div>
//       <div className="flex">
//         <a href="https://twitter.com/fazal_suhana" className="mr-5">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path
//                     d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
//                     clipRule="evenodd"
//                     fillRule="evenodd"
//                 />
//             </svg>
//         </a>
//         <a href="https://facebook.com/fazal_suhana" className="mr-5">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path
//                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                     clipRule="evenodd"
//                     fillRule="evenodd"
//                 />
//             </svg>
//         </a>
//       </div>
//   </div>;
// }
