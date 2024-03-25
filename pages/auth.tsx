import { useCallback, useState } from "react";
import Input from "../components/input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("Login");

  const toggleVariant = useCallback(() => {
    setVarient((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url(/images/02.jpg)] bg-no-repeat bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-16 py-16 mt-2 bg-black rounded-md bg-opacity-85 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {varient==='login'? 'Sign in':'Register'}
            </h2>
            <div className="flex flex-col gap-2 ">
              {varient ==='register' && (
              <Input
                lable="User name:"
                onChange={(ev: any) => setName(ev.target.value)}
                id="name"
                value={name}
              />
              )}
              <Input
                lable="Email Address:"
                type="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                value={email}
              />
              <Input
                lable="Password:"
                type="password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                value={password}
              />

              <button className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
               {varient==='login'?'Login':'Sign up'}
              </button>

              <p className="mt-12 text-neutral-500">
                {varient==='login'?'First time using diano':'Already have an account ?'}
                <span
                  onClick={toggleVariant}
                  className="ml-1 text-white cursor-pointer hover:underline"
                >
                 { varient==='login'? 'Create an account':'Login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
