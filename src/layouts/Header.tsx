import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-10 bg-[#0d262c]">
      <div className="text-2xl font-bold text-[#ce282b]">
        <Link href="/">Andy Course Tool</Link>
      </div>
      <ul className="flex text-lg gap-x-8 text-[#decaaf]">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/review">Review</Link>
        </li>
        <li>
          <Link href="/memorandum">Memorandum</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
