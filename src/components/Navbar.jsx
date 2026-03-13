function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white shadow-lg">

      <h1 className="text-2xl font-bold text-blue-400">
        Aman
      </h1>

      <ul className="flex gap-8">
  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
  <li><a href="#about" className="hover:text-blue-400">About</a></li>
  <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
  <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
  <li><a href="#certificates" className="hover:text-blue-400">Certificates</a></li>
  <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
  
  
</ul>

    </nav>
  )
}

export default Navbar