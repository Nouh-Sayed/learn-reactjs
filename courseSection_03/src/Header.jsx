import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="flex items-center gap-4 bg-[#7639b3] p-4"> 
        <img src="src\assets\images\troll-face.png" alt="troll face" className="w-12 h-12"/>
        <h1 className="text-2xl font-bold">Meme Generator</h1>
      </header>
    </div>
  )
}

export default Header
