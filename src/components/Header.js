import Link from "next/link";
export default function Header() {
  return (
    <div>
      <Link href="/"><img src="../profile.jpeg" className="w-20 h-20 rounded-full"/></Link>
    </div>
  )
}
