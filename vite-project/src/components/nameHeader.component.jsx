import react from 'react';
import { FaGithub, FaCodepen } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function NameHeader() {
  const nameHeader = "<Alexander Leech />";

  return (
    <>
      <h1>{nameHeader}</h1>
      <h2 class="pt-3 pb-3">Frontend Developer</h2>
      <p>I build accessible, mobile first experiences for users.</p>
      <div className="responsiveMediaPadding" style={{ display: 'flex', flexDirection: 'row'}}>
        <a 
          href="https://github.com/alexanderleech" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ paddingRight: '1.5rem'}}
        >
          <FaGithub size="30" />
        </a>
        <a 
          href="https://www.linkedin.com/in/alexander-l-96889817b/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ paddingRight: '1.5rem'}}
        >
          <CiLinkedin size="30" />
        </a>
        <a 
          href="https://www.codepen.io/Alex-Leech" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaCodepen size="30" />
        </a>
      </div>   
    </>
  )
}