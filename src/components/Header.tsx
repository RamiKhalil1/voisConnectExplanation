export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkblue-900/98 backdrop-blur-lg border-b border-primary-800/30 shadow-xl shadow-black/30">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-4 group">
            <div className="h-12 flex items-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/pics/voisConnectlogo.svg" 
                alt="VOIS Connect Logo" 
                className="h-12 drop-shadow-lg"
              />
            </div>
            <div className="hidden sm:block border-l border-primary-800/50 pl-4">
              <div className="text-xs text-primary-400 uppercase tracking-widest font-semibold">Orchestrating Platform</div>
              <div className="text-xl font-bold text-white tracking-tight">VOIS Connect</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#team" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-900/30 transition-all duration-300 font-medium relative group">
              <span className="relative z-10">Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </a>
            <a href="#gap" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-900/30 transition-all duration-300 font-medium relative group">
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </a>
            <a href="#architecture" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-900/30 transition-all duration-300 font-medium relative group">
              <span className="relative z-10">Architecture</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </a>
            <a href="#challenges" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-900/30 transition-all duration-300 font-medium relative group">
              <span className="relative z-10">Challenges</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </a>
            <a href="#technology" className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-900/30 transition-all duration-300 font-medium relative group">
              <span className="relative z-10">Technology</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </a>
          </div>
          
          {/* Mobile Menu Icon Placeholder - Optional */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-primary-400 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
