export default function Footer() {
  return (
    <div >
      <div className="flex w-9/12 mx-2 my-3 md:w-full">
      <a href="https://www.linkedin.com/in/jayashri-dangat-b9bb1420b/" target="_blank" rel="noreferrer noopener"><img src="../Social/Linkedin.jpg" className="w-10 h-10 mx-2"/></a>
      <a href="https://www.hackerrank.com/Jayashridangat0" target="_blank" rel="noreferrer noopener"><img src="../Social/Hackerrank.png" className="w-10 h-10 mx-2"/></a>
      <a href="https://github.com/jayashridangat" target="_blank" rel="noreferrer noopener"><img src="../Social/GitHub-Mark.png" className="w-10 h-10 mx-2 rounded-full"/></a>
  {//  <a><img src="../Social/LeetCode_logo_black.png" className="w-10 h-10 mx-2"/></a> 
   }
       <button onClick={()=>window.open('mailto:jayadangat0@gmail.com')}><img src="../Social/mail.png" className="w-10 h-10 mx-2"/></button>
      </div>
      Tools used
      <div className="flex w-9/12 mx-2 my-3 md:w-full">
      <img src="../tools/nextjs.png" className="w-10 h-10 mx-2 rounded-full"/>
      <img src="../tools/react.png" className="w-10 h-10 mx-2 rounded-full "/>
       <img src="../tools/tailwind.png" className="w-10 h-10 mx-2"/>
       <img src="../tools/git.png" className="w-10 h-10 mx-2"/>
       <img src="../tools/vs_code.png" className="w-10 h-10 mx-2"/>
       <img src="../tools/js.png" className="w-10 h-10 mx-2"/>
       <img src="../tools/html.png" className="w-10 h-10 mx-2"/>
      </div>
    </div>
  )
}