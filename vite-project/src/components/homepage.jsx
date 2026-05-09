import react from 'react';
import AboutMe from './aboutMe.component';
import NameHeader from './nameHeader.component';


export default function HomePage() {

  return (
    // This component will house all sub components in one central location
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        {/* <leftHalfComponent /> */}
        <div class="grid pt-10 px-5 text-left mh-50">
          <NameHeader />
        </div>
        
        {/* <rightHalfComponent /> */}
        <div class="grid pt-10 px-5 text-left">
          <AboutMe />
        </div>
      </div>
    </>
  )
}