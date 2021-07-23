import { Logo } from "../components/logo/Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center py-16 bg-gray-1300">
        <Logo />
      </div>
    </nav>
  );
};
export default Navbar;
