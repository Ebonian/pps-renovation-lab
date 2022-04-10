import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import MenuTile from "../components/global/MenuTile";
import { AuthState, useSession } from "../contexts/AuthContext";

import MeetingIcon from "../../public/img/icons/schedule.png";
import UserIcon from "../../public/img/icons/user.png";
import DocumentIcon from "../../public/img/icons/document.png";

const Home: NextPage = () => {
  const router = useRouter();
  const { logout } = useContext(AuthState);

  const session = useSession();

  return (
    <div className="relative p-6 bg-background-100 min-h-screen w-full font-poppins">
      {/* header */}
      <div className="fixed flex justify-between items-center bg-primary shadow-color top-6 left-6 right-6 rounded-[30px] h-28 overflow-clip px-8">
        <div>
          <span className="hidden sm:block text-white font-bold text-3xl ml-4">
            Welcome {session?.firstName}
          </span>
        </div>
        <div
          className={`flex items-center bg-white shadow-secondary rounded-full h-[64px] py-2 ${
            session ? "px-4" : "px-2"
          }  text-gray-900 select-none cursor-pointer space-x-2`}
          onClick={async () => {
            await router.push("/auth");
            logout();
          }}
        >
          <div className="bg-no-repeat bg-center bg-contain bg-[url('/img/icons/user.png')] h-full w-12" />
          <span className={`${!session && "hidden"} text-2xl font-bold pr-4`}>
            {session?.id}
          </span>
        </div>
      </div>
      {/* menu */}
      <div className="flex justify-center mt-52">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
          <MenuTile
            name="จัดการบัญชี"
            img={UserIcon}
            route="/accounts"
            reqSession
            reqAdmin
          />
          <MenuTile
            name="ใบออกหอ"
            img={DocumentIcon}
            route="/baiorghor"
            reqSession
          />
          <MenuTile
            name="บันทึกการประชุม"
            img={MeetingIcon}
            route="/meeting"
            reqSession
            reqPrefect
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
