import React from 'react'

const Home = () => {
  const info = JSON.parse(localStorage.getItem("info"))

  const startDate = new Date(info.admYear)
  const endDate = new Date(info.gradYear)
  const today = new Date()

  const percent = ((today - startDate) / (endDate - startDate)) * 100

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl flex flex-col items-center gap-6">
        <h1 style={{fontFamily:"Bungee Tint"}} className="text-5xl font-bold text-gray-800">
         Your {info.course} is
        </h1>

        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            style={{ width: `${Math.floor(percent)}%` }}
            className="bg-amber-500 h-full transition-all duration-500 ease-in-out"
          />
        </div>

        <p style={{fontFamily:"Bungee Tint"}} className="text-8xl w-6/10 text-gray-700 font-medium">
          {Math.floor(percent)}% done.
        </p>

        <div className="text-2xl text-gray-500">
          Go do something.
        </div>
      </div>
    </div>
  )
}

export default Home
