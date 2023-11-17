import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
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
            <Link href={"/talent-list"}>
              <button className="hover:scale-[1.03] bg-[#5E50A1] border-[2px] px-[15px] rounded-md py-[5px] border-[#5E50A1] text-[white]">
                Mulai Dari Sekarang
              </button>
            </Link>
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
        className="bg-[#FAFBFC] container mx-auto px-[100px] grid grid-cols-2 py-[50px]"
      >
        <img src="/images/content-2.png" alt="homeBanner"></img>
        <div>
          <h2 className="my-[30px] text-[25px]">
            Kenapa harus mencari tallent di peworld
          </h2>
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
      <section
        id="content-3"
        className="container mx-auto px-[100px] grid grid-cols-2 py-[50px]"
      >
        <div>
          <h2 className="mt-[30px] mb-[15px] text-[35px]">Skill Tallent</h2>
          <p className="mb-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="grid grid-cols-2">
            {[
              "javascript",
              "golang",
              "react",
              "PHP",
              "native",
            ]?.map((item, key) => (
              <div key={key} className="flex gap-[20px] mt-[15px]">
                <img src="/images/check-yellow.svg" alt="check"></img>
                <p className="capitalize">{item}</p>
              </div>
            ))}
            {[
              "postgre",
              "express",
              "next",
              "elixir",
              "bund",
            ]?.map((item, key) => (
              <div key={key} className="flex gap-[20px] mt-[15px]">
                <img src="/images/check-yellow.svg" alt="check"></img>
                <p className="capitalize">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <img src="/images/content-3.png"></img>
      </section>
      <section id="CTA" className="container mx-auto px-[100px]">
        <div
          className="flex justify-between bg-[#5E50A1] rounded-tr-xl rounded-bl-xl px-[50px] py-[60px] rounded-br-[80px] rounded-tl-[80px] mb-[100px]"
          width="100%"
        >
          <h2 className="capitalize text-[30px] text-[white]">
            temukan talent terbaik,
            <br />
            yang handal dibidangnya
          </h2>
          <div className="flex flex-col justify-center">
            <button className="text-[#5E50A1] hover:scale-[1.03] font-semibold px-[13px] py-[10px] rounded-md bg-[white]">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
