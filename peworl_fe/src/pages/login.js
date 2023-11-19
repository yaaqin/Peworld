import React from "react";
import Link from "next/link";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { Result } from "postcss";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        setCookie("token", result?.data?.data?.token);
        setCookie("user", JSON.stringify(result?.data?.data?.user));

        window.location.href = "/";

        // setTimeout(() => {
        //   window.location.reload();
        // },50000);
      })
      .catch((err) => {
        const { email, password } = err?.response?.data?.messages ?? {};
        setIsSuccess(false);
        setErrMsg(
          email?.messages ??
            password?.messages ??
            err?.response?.data?.messages ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="grid grid-cols-2 bg-[#EEF5FF]">
        <div className="h-[100vh]">
          <Link href={"/"}>
            <img
              alt="logo"
              src="/images/logo-white.png"
              className=" hover:scale-[1.03] absolute z-10 mt-[30px] ml-[50px]"
            ></img>
          </Link>
          <div className="flex absolute items-center h-[100vh]">
            <p className="w-[50%] text-[45px] drop-shadow-lg text-[white] z-10 ml-[50px]">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
          </div>
          <div className="h-[100%] w-[50%] opacity-75 absolute bg-[#5E50A1]"></div>
          <img
            alt="background"
            src="/images/aut-bg.jpg"
            className="h-[100%] w-[100%] object-cover"
          ></img>
        </div>
        <div className="z-50 bg-[#EEF5FF] h-[100vh] mx-[50px] pt-[130px]">
          <h1 className="text-[32px]">Halo, Pewpeople</h1>
          <p className="capitalize">
            Temukan Talent yang sesuai dengan Kebutuhan Anda dengan fitur
            pencarian berdasarkan skill dari Peworld.
          </p>
          {isSuccess ? (
            <div className="alert alert-success" role="alert">
              <p>Login success, please wait for redirect to our app</p>
            </div>
          ) : null}

          {errMsg ? (
            <div className="alert alert-danger" role="alert">
              {errMsg}
            </div>
          ) : null}
          <label className="text-[#9EA0A5] text-muted mt-[20px] block">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
            className=" w-[100%] px-[20px] py-[10px] mt-[5px] rounded-md"
          ></input>
          <label className="text-[#9EA0A5] text-muted mt-[20px] block">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Password"
            className=" w-[100%] px-[20px] py-[10px] mt-[5px] rounded-md"
          ></input>
          <div className=" mt-[5px] flex justify-end">
            <Link href={"/forgot-password"}>
              <p className="text-[black] mt-[15px]">Lupa kata sandi?</p>
            </Link>
          </div>
          <button
            className="bg-[#FBB017] text-[white] w-[100%] mt-[15px] rounded-md hover:scale-[1.01] py-[10px]"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>
          <p className="text-center mt-[15px]">
            Anda belum punya akun?{" "}
            <Link href={"/register"}>
              <span className="text-[#FBB017]">Daftar disini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  if (user && token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {}
  }
}
export default Login;
