

function Contact() {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen flex flex-col"
        id="contato"
      >
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <div className="w-full h-full container mx-auto">
              <h1 className="py-1 text-4xl font-medium mt-52">Fale Comigo</h1>
              <h1 className="py-1 text-8xl font-medium hover:text-[#D6223B] cursor-pointer">eloy.gomes@icloud.com</h1>
              <h5 className="py-5 text-sm max-w-lg">
                Nossos produtos e serviços são a escolha certa para quem busca
                qualidade e satisfação. Junte-se aos nossos clientes satisfeitos
                e descubra como podemos ajudá-lo a atingir seus objetivos.
                Clique abaixo e comece agora mesmo!”
              </h5>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
