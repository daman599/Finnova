export default function Hero() {
    return (
        <>
            <div className="bg-black w-[1330px] h-[871px] flex flex-col my-20 mx-auto rounded-4xl overflow-hidden z-20">

                <div className="w-full h-full relative "
                    style={{
                        backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.07)  1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.07)  1px, transparent 1px)`,
                        backgroundSize: '95px 95px'
                    }}>

                    <div className="flex flex-col items-center justify-center space-y-6 py-4">
                        <p className="font-normal text-8xl text-center max-w-2xl py-2 mt-7
                           bg-gradient-to-r from-[#FFFFFF] via-[#999999] to-[#999999] bg-clip-text text-transparent"
                        >Your money is where you are</p>
                        <p className="font-medium text-xl text-[#7A7A7A] text-center max-w-xl">Spend,save and manage your money, all in one place. Open a full
                            bank account fro your phone, for free.</p>

                        <div className="bg-[#7A7A7A] rounded-4xl w-fit p-4 my-2">
                            <p className="text-base font-normal text-white">Open Finnova account</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}