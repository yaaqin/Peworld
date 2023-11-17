import React from "react";
import Navbar from "../Component/navbar";
import Footer from "../Component/footer";
import axios from "axios";

function Hiring(props) {
  const { Data } = props;
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-[50px] px-[50px] bg-[#EEF5FF] ">
          <div className="h-[750px] w-[497px] bg-[#fff] rounded-xl py-[30px] shadow-qin px-[50px]">
            <div className="flex justify-center">
              <img
                alt="profile"
                src={Data.photo}
                width="150px"
                height="150px"
                className="bg-[cyan] rounded-full"
              ></img>
            </div>
            <h3 className="text-[35px] mt-[15px] mb-[10px]">{Data.fullname}</h3>
            <p>{Data.job}</p>
            <div className="flex gap-[15px] my-[15px]">
              <img
                width="20px"
                alt="icon location"
                src="/images/map-pin.png"
              ></img>
              <p>{Data.location}</p>
            </div>
            <h6>{Data.desk}</h6>
            <h5 className="mt-[20px] text-[25px]">Skill</h5>
            <div className="flex gap-[15px] mt-[15px] flex-wrap">
              {Data?.skills.map((item, key) => (
                <div key={key}>
                  <button className="hover:scale-[1.03] bg-[#FBB01799] border-2 border-[#FBB017] py-[5px] rounded-md px-[15px]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[green] col-span-3">ini kanan</div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(props) {
  const { id } = props.params;

  console.log(id);

  const req = await axios.get(`http://localhost:3000/api/list-talent?id=${id}`);
  return {
    props: req.data,
  };
}

export default Hiring;
