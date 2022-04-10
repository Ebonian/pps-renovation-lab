import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

import DocumentIcon from "../../../public/img/icons/document.png";
import ScheduleIcon from "../../../public/img/icons/schedule.png";
import LockerIcon from "../../../public/img/icons/locker.png";

import DocumentIconClay from "../../../public/img/icons/document-clay.png";
import ScheduleIconClay from "../../../public/img/icons/schedule-clay.png";
import LockerIconClay from "../../../public/img/icons/locker-clay.png";
import { useSession } from "../../contexts/AuthContext";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const BaiorghorNavigation: React.FC<Props> = ({ page, setPage }) => {
  const session = useSession();
  return (
    <div className="absolute left-0 top-24 h-[42rem] w-32 bg-white rounded-r-3xl shadow-secondary flex flex-col justify-between items-center pt-7 pb-10">
      <Link href="/">
        <a className="grid place-content-center w-[70px] h-[70px] rounded-full shadow-secondary bg-white text-black text-4xl pr-1.5 cursor-pointer">
          <FiChevronLeft />
        </a>
      </Link>
      <div
        className={`m-6 cursor-pointer select-none w-20 h-20 bg-contain ${
          page === 0
            ? "bg-[url('/img/icons/document.png')]"
            : "bg-[url('/img/icons/document-clay.png')]"
        }`}
        onClick={() => setPage(0)}
      ></div>
      {session?.role === "pt" && (
        <div
          className={`m-6 cursor-pointer select-none w-20 h-20 bg-contain ${
            page === 1
              ? "bg-[url('/img/icons/schedule.png')]"
              : "bg-[url('/img/icons/schedule-clay.png')]"
          }`}
          onClick={() => setPage(1)}
        ></div>
      )}

      <div
        className={`m-6 cursor-pointer select-none w-20 h-20 bg-contain ${
          page === 2
            ? "bg-[url('/img/icons/locker.png')]"
            : "bg-[url('/img/icons/locker-clay.png')]"
        }`}
        onClick={() => setPage(2)}
      ></div>
    </div>
  );
};

export default BaiorghorNavigation;
