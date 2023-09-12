import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
      <li><Link href="/">About</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/experience">Experience</Link></li>
      </ul>
    </div>
  )
}
