import Link from "next/link";

export default function Navbar() {
  return (
    <div >
        <p><Link href="/">About</Link></p>
        <p><Link href="/skills">Skills</Link></p>
        <p><Link href="/experience">Experience</Link></p>
    </div>
  )
}
