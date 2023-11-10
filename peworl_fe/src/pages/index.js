export default function Home() {
  return (
    <main>
      <section id="navbar" className="sticky top-0 bg-[white]">
        <nav className="shadow-md shadow-[#5E50A1] flex justify-between py-[20px] container mx-auto px-[100px]">
          <img src="/images/logo-purple.png" alt="logo"></img>
          <div className="flex justify-between gap-[20px]">
            <button className="border-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px]">
              Masuk
            </button>
            <button className="bg-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px] border-[#5E50A1] text-[white]">
              Daftar
            </button>
          </div>
        </nav>
      </section>
      <section
        id="content-1"
        className="py-[70px] container mx-auto px-[100px] grid grid-cols-2"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-[44px]">
            Talenta terbaik negri untuk perubahan revolusi 4.0
          </h1>
          <p className="py-[20px] text-[18]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div>
            <button className="bg-[#5E50A1] border-[2px] px-[15px] rounded-md py-[5px] border-[#5E50A1] text-[white]">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
        <img
          src="/images/content-1.png"
          height="600px"
          width="600px"
          alt="homeBanner"
        ></img>
      </section>
      <section
        id="content-2"
        className="container mx-auto px-[100px] grid grid-cols-2 py-[50px]"
      >
        <img src="/images/content-2.png" alt="homeBanner"></img>
        <div>
          <h2 className="my-[30px] text-[25px]">Kenapa harus mencari tallent di peworld</h2>
          {[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]?.map((item, key) => (
            <div key={key} className="flex gap-[20px] mt-[15px]">
              <img src="/images/check-purple.svg" alt="check"></img>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="content-3"className="container mx-auto px-[100px] grid grid-cols-2 py-[50px]" >
      <div>
          <h2 className="mt-[30px] mb-[15px] text-[35px]">Skill Tallent</h2>
          <p className="mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          <div className="grid grid-cols-2">
          {[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]?.map((item, key) => (
            <div key={key} className="flex gap-[20px] mt-[15px]">
              <img src="/images/check-yellow.svg" alt="check"></img>
              <p>{item}</p>
            </div>
          ))}
          {[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]?.map((item, key) => (
            <div key={key} className="flex gap-[20px] mt-[15px]">
              <img src="/images/check-yellow.svg" alt="check"></img>
              <p>{item}</p>
            </div>
          ))}

          </div>
        </div>
            <img src="/images/content-3.png"></img>
      </section>
      <section
        id="footer"
        className="bg-[#5E50A1] py-[50px] container mx-auto px-[100px]"
      >
        <img src="/images/logo-white.png" alt="logo"></img>
        <p className="text-[white] my-[30px]">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. In euismod ipsum et dui
          <br />
          rhoncus auctor.
        </p>
        <hr></hr>
        <div className="mt-[30px] flex justify-between">
          <p className="text-[white]">2023 Pewworld. All right reserved</p>
          <div className="flex gap-[20px]">
            <button className="text-[white]">Telepon</button>
            <button className="text-[white]">Email</button>
          </div>
        </div>
      </section>
    </main>
  );
}
