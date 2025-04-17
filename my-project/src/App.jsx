import React, { useEffect, useState } from 'react'

import './styles/animations.css' // Import the animations CSS file

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Animated theme toggle button */}
      <button
        onClick={handleThemeChange}
        className={`fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 
          ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          hover:animate-pulse`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Animated container for Landingpage */}
      <div className={`${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
        <Landingpage change={handleThemeChange} />
      </div>

      {/* Example of a bouncing element */}
      <div className="fixed bottom-4 right-4 animate-bounce">
        <span className="text-2xl">👋</span>
      </div>
    </div>
  )
}

export default App