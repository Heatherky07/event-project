import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://th.bing.com/th/id/OIP.5xKdTW-MAyY__hsKmBFFcgHaE8?o=7&rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
       Spiderman pew pew pew
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero