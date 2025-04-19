import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Setup = () => {
  const [admYear, setAdmYear] = useState("")
  const [gradYear, setGradYear] = useState("")
  const [course, setCourse] = useState('')
  const navigate = useNavigate()

  const data = {
    admYear,
    gradYear,
    course,
  }

  const storeData = (e) => {
    e.preventDefault()
    localStorage.setItem('info', JSON.stringify(data))
    navigate('/')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={storeData}
        className="flex flex-col gap-4 bg-white shadow-md rounded-2xl p-8 w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">Setup</h2>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        <input
          type="date"
          value={admYear}
          onChange={(e) => setAdmYear(e.target.value)}
          placeholder="Admission Year"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        <input
          type="date"
          value={gradYear}
          onChange={(e) => setGradYear(e.target.value)}
          placeholder="Graduation Year"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        <button
          type="submit"
          className="bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Setup
