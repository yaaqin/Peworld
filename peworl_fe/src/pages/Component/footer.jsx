import React from 'react'

export default function footer() {
  return (
    <div>
      <section
        id="footer"
        className="bg-[#5E50A1] py-[50px] px-[100px]"
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
    </div>
  )
}
