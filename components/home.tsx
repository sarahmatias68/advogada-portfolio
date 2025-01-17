import  Image  from "next/image"

export function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary/10 to-secondary/10 pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-2 leading-snug bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quelly Honorato
              </h1>
              <h2 className="text-3xl font-semibold mb-2 text-gray-700">
                Advogada Especialista em Direito Civil e Empresarial
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Defendendo seus direitos com excelência e dedicação há mais de 10 anos
              </p>
              <div className="flex gap-4">
                <a href="#contato" className="btn">
                  Entre em Contato
                </a>
                <a href="#servicos" className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
                  Ver Serviços
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[95%] mx-auto aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image
                  src="/images/foto.png"
                  alt="Quelly Honorato"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    )
}