import react from 'react';


export default function HomePage() {

  return (
    // This component will house all sub components in one central location
    <>
      <div class="grid grid-cols-2 gap-4 pt-5">
        {/* <leftHalfComponent /> */}
        <div>split 50/50</div>
        
        {/* <rightHalfComponent /> */}
        <div>split 50/50</div>
      </div>
    </>
  )
}