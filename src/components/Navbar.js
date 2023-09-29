import Link from "next/link";

export default function Navbar() {
  return (
    <div >
      <ul>
      <li><Link href="/" className="transition ease-in-out  hover:text-rose duration-300 ...">About</Link></li>
      <br></br>
      <li><Link href="/skills" className="transition ease-in-out hover:text-rose duration-300 ...">Skills</Link></li>
      <br></br>
      <li><Link href="/projects" className="transition ease-in-out hover:text-rose duration-300 ...">Projects</Link></li>
      <br></br>
      </ul>
    </div>
  )
}
