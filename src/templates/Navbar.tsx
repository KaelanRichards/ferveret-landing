import { Logo } from "../components/logo/Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gray-1300">
        <div className="flex justify-center m-1 py-8 shadow rounded-md bg-primary-1100">
          <Logo />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
