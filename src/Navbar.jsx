export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <h1 className="font-bold mr-10 text-2xl">Suhana's Bananas</h1>
      <ul className="flex justify-between space-x-3 text-lg">
        <li>About me</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
