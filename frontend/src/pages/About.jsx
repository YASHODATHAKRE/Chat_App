import React from 'react'

const About = () => {
  return (
    // <div>About  </div>
     <div className="bg-gray-100 py-50 px-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Chat App</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        A simple and fast chat platform to connect, talk and share instantly. Secure, real-time, and accessible from anywhere.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">💬 Real-Time Chat</h3>
          <p className="text-gray-600 text-sm">
            Send and receive messages instantly with anyone in the world.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-2">🔒 End-to-End Encryption</h3>
          <p className="text-gray-600 text-sm">
            All your messages are secured and private, just between you and your contact.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">🌐 Access Anywhere</h3>
          <p className="text-gray-600 text-sm">
            Chat from any device, anytime, without interruptions.
          </p>
        </div>
      </div>
          </div>


  )
}

export default About