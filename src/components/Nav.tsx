'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex gap-5 p-5">
      <button
        className="p-2 border-2 border-gray-600"
        onClick={() => router.push('/')}
      >
        Home
      </button>
      <button
        className="p-2 border-2 border-gray-600"
        onClick={() => router.push('/about')}
      >
        About
      </button>
      <button
        className="p-2 border-2 border-gray-600"
        onClick={() => router.push('/secure')}
      >
        Secure
      </button>
    </nav>
  );
};

export default Nav;