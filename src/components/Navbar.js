import Link from "next/link";

export default function Navbar() {
  return (
    <div >
        <Link href="/">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/experience">Experience</Link>
    </div>
  )
}
