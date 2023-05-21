import React from "react";
import "./assets/styles/hero_style.css"
const Hero=()=>{
    return(
        <div className="herobody">
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center textbody">
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900" style={{'font-family': "'Ultra', serif"}}>Nitin Mahyavanshi</h1>
        <h2 class="sm:text-xl text-3xl mb-4 font-medium" style={{'font-family': "'Ultra', serif"}}>Singer | Actor | Advocate</h2>
      <p class="mb-8 leading-relaxed">Nitin Mahyavanshi is a Gujarati Hindi singer-performer. He was born in Silvassa, Dadra and Nagar Haveli. He is an Advocate by Profession.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg getintouchbtn">Explore NM Sargam World</button>
        <button onClick={(e)=>{window.location.href="https://www.youtube.com/@nmsargamworld637/"}} class="ml-4 inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg explorebtn">Visit Youtube</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="./images/NitinMahyavanshi1.png"/>
    </div>
  </div>
</section>
        </div>
    )
}
export default Hero