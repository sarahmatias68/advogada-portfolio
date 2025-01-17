
export function MenuBar() {
    return(
<nav className="fixed w-full bg-primary/95 backdrop-blur-sm shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <a href="#home" className="text-white text-2xl font-bold">
                Quelly Honorato
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-white hover:text-gray-300 transition-colors">
                  Início
                </a>
                <a href="#sobre" className="text-white hover:text-gray-300 transition-colors">
                  Sobre
                </a>
                <a href="#servicos" className="text-white hover:text-gray-300 transition-colors">
                  Serviços
                </a>
                <a href="#contato" className="text-white hover:text-gray-300 transition-colors">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </nav>

    )
}    