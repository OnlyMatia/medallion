
const Slogan = () => {
    return (
        <section className="min-h-[40vh] w-full flex items-center px-2 md:px-5">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:items-center gap-10 py-2 pb-10">
                <h3 className="text-6xl md:text-7xl italic flex flex-col gap-2 w-full lg:w-1/2">
                    <span>Tradicija u okusu.</span>
                    <span className="pl-[10vw] lg:pl-[5vw]">Godina u zalogaju.</span>
                </h3>
                <div className="flex justify-center lg:items-center flex-col lg:text-center gap-3 italic w-full lg:w-1/3 px-4">
                    <p>
                        U svakom komadiću skrivena je priča starih generacija. Ručno pravljen, od autohtonih sorti Žilavke i Blatine iz srca Hercegovine, ćupter nije samo slastica. On je povratak u djetinjstvo, u mirise bakinih kuhinja i okuse kojima se vraćamo.
                    </p>
                    <a href="#" className="underline hover:text-white/80">Otkrij Više ↗</a>
                </div>
            </div>
        </section>  
    )
}

export default Slogan