import React, { useContext, useEffect, useState } from "react";
import { useSession } from "../../contexts/AuthContext";
import FileIcon from "../../../public/img/icons/file.png";
import Image from "next/image";

interface Props {
  profile: true;
}

const ProfileButton: React.FC<Props> = ({ profile = false }) => {
  const session = useSession();

  return (
    <div className="flex space-x-6 absolute right-14 top-12">
      <div className="flex items-center bg-white shadow-secondary rounded-full h-[64px] py-2 font-poppins px-4 text-gray-900 select-none cursor-pointer space-x-2">
        <div className="bg-no-repeat bg-center bg-contain bg-[url('/img/icons/user.png')] h-full w-12" />
        <span className="text-2xl font-bold pr-4">{session?.id}</span>
      </div>
      {!profile && (
        <div className="h-[64px] w-[64px] grid place-content-center bg-white shadow-secondary rounded-full p-4 cursor-pointer select-none">
          <Image src={FileIcon} />
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
