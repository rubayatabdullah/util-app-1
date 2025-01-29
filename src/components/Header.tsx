import logo from "../assets/images/header-logo.png";

export default function Header() {
  return (
    <>
      <header className="flex justify-between shadow-md">
        <div className="w-16 h-16 flex">
          <img src={logo} alt="header-logo" className="w-full h-full" />
          <h1 className="font-normal text-3xl mt-auto mb-auto">EQN</h1>
        </div>
        <div className="mt-auto mb-auto mr-5">
          <a
            className="text-red-400 hover:text-red-600 hover:underline"
            href="#"
          >
            About
          </a>
        </div>
      </header>
    </>
  );
}
