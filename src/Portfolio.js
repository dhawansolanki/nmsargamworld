import React,{useState} from 'react'
import "./assets/styles/portfolio_style.css"
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
const Portfolio = ()=>{
    const [isOpen, setOpen] = useState(false)
    
    return(
<div>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/Yv67ClpvxEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px"src="https://www.youtube.com/embed/s51or1qliBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px"  src="https://www.youtube.com/embed/u8Hr6IF0RyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/RRMEy9mPpnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/3FdWYjlsB14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/cu4gGIpHifY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/f4q02Q-z-Js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="w-full md:w-1/2 p-3">
    <div class="aspect-w-10 aspect-h-6">
      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/9gKdAFV3b2o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<br/>
<div class="flex justify-center">
<button className='viewallbtn'>View All Songs</button>
</div>
<br/><br/>
</div>
    )
}

export default Portfolio
