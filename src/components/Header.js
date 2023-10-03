import Link from "next/link";
export default function Header() {
  return (
    <div className="flex px-4 mx-4 my-4">
      <div><Link href="/"><img src="../Social/logo2.png" className="rounded-full w-14 h-13"/></Link></div>
      <div className="flex justify-end md:w-full">
      <a href="https://www.linkedin.com/in/jayashri-dangat-b9bb1420b/" target="_blank" rel="noreferrer noopener"><img src="../Social/Linkedin.jpg" className="w-8 h-8 mx-4 my-4" alt="Linkedin"/></a>
      <a href="https://www.hackerrank.com/Jayashridangat0" target="_blank" rel="noreferrer noopener"><img src="../Social/Hackerrank.png" className="w-8 h-8 mx-4 my-4" alt="HackeRank"/></a>
      <a href="https://github.com/jayashridangat" target="_blank" rel="noreferrer noopener"><img src="../Social/GitHub-Mark.png" className="w-8 h-8 mx-4 my-4 rounded-full" alt="Github"/></a>
  {//  <a><img src="../Social/LeetCode_logo_black.png" className="w-10 h-10 mx-2"/></a> 
   }
       <button onClick={()=>window.open('mailto:jayadangat0@gmail.com')}><img src="../Social/mail.png" className="w-8 h-8 mx-2" alt="Gmail"/></button>
      </div>
    </div>
  )
}
