import Link from "next/link";
export default function Header() {
  return (
    <div className="flex mx-4">
      <div><Link href="/"><img src="../Social/logo2.png" className="my-2 rounded-full w-14 h-13 lg:mx-4"/></Link></div>
      <div className="flex justify-end md:w-full">
      <a href="https://www.linkedin.com/in/jayashri-dangat-b9bb1420b/" target="_blank" rel="noreferrer noopener"><img src="../Social/Linkedin.jpg" className="w-8 h-8 mx-12 my-4 lg:mx-4 lg:my-6" alt="Linkedin"/></a>
      <a href="https://www.hackerrank.com/Jayashridangat0" target="_blank" rel="noreferrer noopener"><img src="../Social/Hackerrank.png" className="w-8 h-8 mx-8 my-4 lg:mx-4 lg:my-6" alt="HackeRank"/></a>
      <a href="https://github.com/jayashridangat" target="_blank" rel="noreferrer noopener"><img src="../Social/GitHub-Mark.png" className="w-8 h-8 mx-8 my-4 rounded-full lg:my-6 lg:mx-4" alt="Github"/></a>
  {//  <a><img src="../Social/LeetCode_logo_black.png" className="w-10 h-10 mx-2"/></a>
  //       <p className="px-5 text-xs font-thin text-right text-rose">Tools used for this website</p>
 //        <div className="flex justify-end px-5 my-3 md:w-full">  
   }
       <button onClick={()=>window.open('mailto:jayadangat0@gmail.com')}><img src="../Social/mail.png" className="w-8 h-8 mx-6" alt="Gmail"/></button>
      </div>
    </div>
  )
}
