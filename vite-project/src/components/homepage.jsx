import react from 'react';
import AboutMe from './aboutMe.component';


export default function HomePage() {

  return (
    // This component will house all sub components in one central location
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        {/* <leftHalfComponent /> */}
        <div class="grid pt-10 px-5 text-left">
          <h1>Alexander Leech</h1>
          <h2 class="pt-3 pb-3">Frontend Developer</h2>
          <p>I build accessible, mobile first experiences for users.</p>
        </div>
        
        {/* <rightHalfComponent /> */}
        <div class="grid px-5">
          <AboutMe />
        </div>
      </div>
    </>
  )
}