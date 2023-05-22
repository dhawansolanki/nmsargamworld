import React from "react";
import "./assets/styles/navbar_style.css"
const Navbar=()=>{
    return(
        <div className="">
          <header class="text-white body-font bg-black">
            <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center mb-4 md:mb-0" href="./">
                <img src="./images/logo3.png" width="100px" alt="NM Sargam World Logo" />
              </a>
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-gray-900"  href="./">Home</a>
                {/* <a class="mr-5 hover:text-gray-900" href="/about">About</a> */}
                <a class="mr-5 hover:text-gray-900" href="/songs">Songs</a>
                {/* <a class="mr-5 hover:text-gray-900" href="/lyrics">Lyrics</a> */}
                {/* <a class="mr-5 hover:text-gray-900" href="/contact">Contact</a> */}
              </nav>
            </div>
          </header>                     
        </div>
    )
}
export default Navbar