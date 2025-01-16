

export function Contact() {
    return (
        <section id="contato" className="min-h-screen flex items-center  from-primary/10 to-secondary/10 bg-gradient-to-br  text-gray-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de Assistência Jurídica?
          </h2>
          <p className="text-xl mb-12">
            Entre em contato para uma consulta e descubra como posso ajudar você
          </p>
          <form className="max-w-md mx-auto">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20  text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Sua Mensagem"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
              <button type="submit" className="btn bg-white text-primary hover:bg-gray-100 w-full">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
    )
}