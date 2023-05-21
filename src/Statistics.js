import React from "react";
import "./assets/styles/statistics_style.css"
const Statistics = ()=>{
    return(
        <div className="statisticsbody">
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">32</h2>
        <p class="leading-relaxed">Songs</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">342K</h2>
        <p class="leading-relaxed">Views</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.53K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">24</h2>
        <p class="leading-relaxed">Originals</p>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Statistics