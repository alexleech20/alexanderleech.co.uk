import react from 'react';
import AboutMe from './aboutMe.component';
import NameHeader from './nameHeader.component';
import ExperienceCards from './experiencecards/experiencecards';

export default function HomePage() {

  return (
    // This component will house all sub components in one central location
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
        {/* <leftHalfComponent /> */}
        <div className="pt-10 px-5 text-left mh-50">
          <NameHeader />
        </div>
        
        {/* <rightHalfComponent /> */}
        <div className="pt-10 px-5 text-left">
          <AboutMe />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 pt-5">
        {/* <div className="col-span-6"></div> */}
        <div class="md:col-start-16 col-span-6 pt-10 px-5 text-left">
          <div>
            <ExperienceCards 
              cardLinkTo="https://www.capita.com" 
              duration="2023 - Current"
              jobTitleCompany="Software Support Developer - Capita"
              description="In my role as a Software Support Developer within a Live Services team, I maintained strong direct relationships with clients while supporting and improving their applications. I handled P1 incidents under pressure, resolving critical issues quickly to minimise disruption, and worked on maintaining and upgrading existing client sites. I collaborated closely with QA engineers to identify and fix defects, and regularly contributed to deployments through structured change and release processes. With strong AWS knowledge, I was able to independently troubleshoot and solve issues, while consistently delivering high-quality code through a peer review process that ensured reliability and maintainability."
            />
          </div>
          <div className="pt-4">
            <ExperienceCards 
              cardLinkTo="https://www.capita.com" 
              duration="2019 - 2023"
              jobTitleCompany="Frotend React Developer - Capita Consulting"
              description="I led a team responsible for planning, decision-making, and delivering four sites for a large-scale UK insurance provider, ensuring secure, PCI-compliant solutions with seamless Worldpay payment integration. I contributed to building a reusable component system and theme to support consistency and scalability across the client’s architecture, while also maintaining high development standards. Alongside delivery work, I mentored junior developers and supported their onboarding, helping them integrate quickly into the team’s processes and improve overall productivity."
            />
          </div>
        </div>
      </div>
    </>
  )
}