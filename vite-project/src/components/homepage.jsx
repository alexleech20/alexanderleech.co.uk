import react from 'react';


export default function HomePage() {

  return (
    // This component will house all sub components in one central location
    <>
      {/* tailwind column system works in tell what column to use for mobile as default first  */}
      {/*  then tell what to use 'sm up' */}
      <div class="grid grid-cols-2 gap-4 pt-5">
        {/* <leftHalfComponent /> */}
        <div class="pt-10 pl-10 text-left">
          <h1>Alexander Leech</h1>
          <h2 class="pt-3 pb-3">Frontend Developer</h2>
          <p>I build accessible, mobile first experiences for users.</p>
        </div>
        
        {/* <rightHalfComponent /> */}
        <div>split 50/50</div>
      </div>
    </>
  )
}