import React from 'react'
import Image from 'next/image'
import { Button } from '~/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'



export default function About() {

  const handleDownloadClick = () => {
    // Replace "/path-to-your-cv.pdf" with the actual path to your CV file.
    const cvUrl = "/CyraCV.pdf";
  
    // Create an anchor element and trigger a click event to download the file.
    const anchor = document.createElement("a");
    anchor.href = cvUrl;
    anchor.download = "CyraMoss-CV.pdf"; // The desired name for the downloaded file.
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <div>
      <div className='flex justify-center'>
        
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        About Me
        </h2>
      </div>
                  <div className="w-full  relative overflow-hidden rightSide">
              {/* shapes behind default pic */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-50 absolute -top-16 -left-16 rotate-45" />
                <div className="w-64 h-64 rounded-full bg-green-500 opacity-50 absolute -top-72 -right-48 rotate-12" />
                <div className="w-64 h-64 rounded-full bg-yellow-500 opacity-50 absolute -bottom-16 -right-16 rotate-64" />
                <div className="w-32 h-32 rounded-full bg-pink-500 opacity-50 absolute -bottom-4 -left-1 rotate-28" />
                <div className="w-48 h-48 rounded-full bg-orange-500 opacity-50 absolute -top-64 -right-12 rotate-80" />
              </div>
      <div className='w-full h-full flex items-center justify-center relative z-10'>
                <Image
                  src="/images/aboutPic.png"
                  alt="Default Picture for Cyra"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                </div>
                </div>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
    Welcome to my portfolio!


My journey in software development began with a deep curiosity for technology and a desire to solve real-world problems. 
Over the years, I&lsquo;ve honed my skills in
  <strong> React, JavaScript, Tailwind, Typescript, TRPC, HTML, & CSS </strong>
  and I&lsquo;m always excited to take on new challenges.
<br/>
<br/>
Whether it&lsquo;s building robust web applications, optimizing code for efficiency, or collaborating with diverse teams, 
I thrive in dynamic environments where creativity and problem-solving are paramount.

I&lsquo;m committed to continuous learning and growth, and I&lsquo;m excited to share my journey with you through this portfolio. 
<br/><br/>

Feel free to explore my latest project below, and don&lsquo;t hesitate to get in touch—I&lsquo;d love to connect and discuss how I 
can contribute to your next project.

Thanks for visiting!
    </blockquote>
    
    <div className='flex justify-center'>
<Button onClick={handleDownloadClick}>Download CV<Download/></Button>

    </div>
    </div>
  )
}
