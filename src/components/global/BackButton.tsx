import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

const BackButton: React.FC = () => {
  return (
    <Link href="/">
      <a className="absolute top-10 left-10 grid place-content-center w-[70px] h-[70px] rounded-full shadow-secondary bg-white text-black text-4xl pr-1.5 cursor-pointer z-50">
        <FiChevronLeft />
      </a>
    </Link>
  );
};

export default BackButton;
