import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="w-full h-[90vh] flex items-center justify-center">
        <span className="text-4xl text-fuchsia-500" >Welcome to my Chatting App</span>
      </div> */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to ChatWave 💬
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
            A modern, fast and secure way to stay connected with your friends,
            teams, and communities in real-time.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition
        "
            onClick={() => navigate("/Register")}
          >
            Get Started
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              ⚡ Real-Time Chat
            </h3>
            <p className="text-gray-600 text-sm">
              Instant messaging with zero delay. Stay synced across devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              🔐 Privacy First
            </h3>
            <p className="text-gray-600 text-sm">
              End-to-end encryption to keep your conversations safe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              📱 Easy to Use
            </h3>
            <p className="text-gray-600 text-sm">
              Clean UI, fast performance, and no complicated setup.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
