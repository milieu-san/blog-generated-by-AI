// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">ホーム</Link></li>
        <li><Link href="/profile">プロフィール</Link></li>
        <li><Link href="/history">ワーキングヒストリー</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
