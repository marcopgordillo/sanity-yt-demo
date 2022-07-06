import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="Logo" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">
            <a className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</a>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <Link href="#">Sign In</Link>
        <Link href="#">
          <a className="border border-gray-600 px-4 py-1 rounded-full">Get Started</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
