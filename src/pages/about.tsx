import Image from "next/image";
import FlagIcon from "../../public/img/about/flag.png";
import ComputerIcon from "../../public/img/about/computer.png";
import MobileIcon from "../../public/img/about/mobile.png";
import FolderIcon from "../../public/img/about/folder.png";
import PencilIcon from "../../public/img/about/pencil.png";
import FilesIcon from "../../public/img/about/files.png";
import CalendarIcon from "../../public/img/about/calendar.png";
import TitanPicture from "../../public/img/about/titan.jpg";
import PoonPicture from "../../public/img/about/poon.jpg";

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background-100 font-poppins">
      {/* hero */}
      <div className="relative bg-black flex flex-grow h-[120vh] p-20 pb-60">
        <div className="flex justify-center items-center relative w-full h-full border-white border-[12px] z-20 text-white">
          <div className="absolute left-44 flex flex-col flex-grow">
            <h1 className="font-bold text-6xl">
              School
              <br />
              Digitalizing
              <br />
              Project
            </h1>
            <h3 className="italic font-medium mt-3">
              By PPS Renovation Lab Team
            </h3>
          </div>
          <div className="h-[50%] w-1.5 bg-white"></div>
          <div className="absolute left-[55%] right-32 flex flex-col flex-grow">
            <p>
              The outset digitalized version of the Panyaprateep school document
              system. We are aiming to optimize the efficiency and develop the
              system until hitting its finest.✨
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-banner1 bg-bottom h-full w-full opacity-50 z-10"></div>
      </div>
      {/* goals */}
      <div className="h-[55vh] relative bg-black z-20 text-white">
        <div className="absolute h-[20vh] w-full -top-[19.9vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute -top-[12rem] -left-[12rem] rotate-12">
          <Image src={FlagIcon} width={900} height={900} />
        </div>
        <div className="absolute left-[50%] right-48 top-0 bottom-0 font-athiti">
          <div>
            <h1 className="font-poppins font-bold text-5xl">Goals</h1>
            <p className="font-semibold text-xl mt-4">
              หนึ่งในเป้าหมายของ PPS Renovation Lab
              คือเราอยากนำความรู้ที่เก็บเกี่ยวมาตลอดหกปี
              เพื่อสร้างประโยชน์คืนให้กับชุมชนผ่านการพัฒนาระบบให้กับโรงเรียนให้ดีขึ้น
            </p>
          </div>
          <div className="font-semibold text-xl mt-8">
            <ul className="list-disc ml-6 space-y-4">
              <li>ลดความซับซ้อนของการทำงานทั้งครู และนักเรียน</li>
              <li>รู้จักอดีต เห็นปัจจุบัน และวางแผนอนาคตได้ดียิ่งขึ้น</li>
              <li>สร้างประสิทธิภาพและความชัดเจนในการปฏิบัติงาน</li>
            </ul>
          </div>
        </div>
      </div>
      {/* outcomes */}
      <div className="flex flex-col items-center bg-black text-white min-h-[55vh] pt-20 pb-40">
        <h1 className="font-bold text-5xl">Outcomes</h1>
        <div className="grid grid-cols-2 gap-32 mt-20">
          <div className="text-center">
            <Image src={ComputerIcon} width={200} height={200} />
            <h1 className="font-semibold text-2xl">Web Application</h1>
            <p className="max-w-xs">
              For students and teachers who have their own computer.
            </p>
          </div>
          <div className="text-center">
            <Image src={MobileIcon} width={200} height={200} />
            <h1 className="font-semibold text-2xl">Mobile Application</h1>
            <p className="max-w-xs">
              For students and teachers who have their own computer.
            </p>
          </div>
          <div className="text-center">
            <Image src={FolderIcon} width={200} height={200} />
            <h1 className="font-semibold text-2xl">Pre-Installed Software</h1>
            <p className="max-w-xs">
              For students and teachers who have their own computer.
            </p>
          </div>
          <div className="text-center">
            <Image src={PencilIcon} width={180} height={200} />
            <h1 className="font-semibold text-2xl">Renovation-Lab-101</h1>
            <p className="max-w-xs">
              For students and teachers who have their own computer.
            </p>
          </div>
        </div>
      </div>
      {/* baiorghor */}
      <div className="bg-white h-[80vh] relative z-20">
        <div className="absolute left-40 top-32 font-athiti">
          <h1 className="font-bold text-5xl">ใบออกหอ</h1>
          <p className="font-medium text-xl mt-4">
            หลักฐานแบบลายลักษณ์อักษรสำหรับขออนุญาตจากครูพ่อครูแม่เพื่อออกจากหอพักในเวลากลางคืน
          </p>
          <ul className="list-disc ml-8 mt-4 space-y-2 font-medium text-xl">
            <li>ประหยัดเวลาเรื่องการตามหาครูพ่อครูแม่</li>
            <li>หลักฐานไม่สูญหาย</li>
            <li>ลงชื่อได้ปลอดภัยและน่าเชื่อถือ</li>
            <li>
              ครูพ่อครูแม่สามารถดูภาพรวมวันเวลาของการออกหอแต่ละชั้นได้ในที่เดียว
            </li>
            <li>และซับเหงื่อโลกด้วยนะ 😍</li>
          </ul>
        </div>
        <div className="absolute -right-[0rem] -top-[4rem]">
          <Image src={FilesIcon} width={700} height={700} />
        </div>
      </div>
      {/* meeting */}
      <div className="bg-white h-[60vh] relative z-20">
        <div className="absolute -left-[4rem] -top-[6rem]">
          <Image src={CalendarIcon} width={700} height={700} />
        </div>
        <div className="absolute left-[50%] top-12 font-athiti">
          <h1 className="font-bold text-5xl">บันทึกการประชุม</h1>
          <p className="font-medium text-xl mt-4">
            เพื่อสร้างคุณค่าและประสิทธิภาพสูงสุดจากการประชุม
          </p>
          <ul className="list-disc ml-8 mt-4 space-y-2 font-medium text-xl">
            <li>วางแผนการประชุมล่วงหน้า ทุกคนสามารถเห็นได้</li>
            <li>มี agenda ที่ชัดเจน</li>
            <li>มี action plan ที่ชัดเจน</li>
            <li>สามารถนำบันทึกไปอ้างอิงได้</li>
            <li>สามารถอ้างอิงถึงบันทึกเก่าได้</li>
            <li>บันทึกไม่สูญหาย</li>
          </ul>
        </div>
      </div>
      {/* potential development */}
      <div className="bg-white h-[65vh] flex flex-col items-center py-40">
        <h1 className="font-bold text-5xl">Potential Development</h1>
        <div className="relative bg-black h-2 w-[55%] mt-28">
          {/* phase 1 */}
          <div className="absolute flex flex-col items-center -left-6 -top-2 text-center">
            <div className="rounded-full w-6 h-6 bg-black p-2">
              <div className="rounded-full bg-white h-full w-full"></div>
            </div>
            <span className="mt-2 font-semibold">Phase 1</span>
            <p className="w-60 absolute top-16">
              Night Activity Permission
              <br />
              Meeting Notes
            </p>
          </div>
          {/* phase 2 */}
          <div className="absolute flex flex-col items-center left-[46%] -top-2 text-center">
            <div className="rounded-full w-6 h-6 bg-black p-2">
              <div className="rounded-full bg-white h-full w-full"></div>
            </div>
            <span className="mt-2 font-semibold">Phase 2</span>
            <p className="w-60 absolute top-16">
              Morning Routine
              <br />
              Centralized Database
            </p>
          </div>
          {/* phase 3 */}
          <div className="absolute flex flex-col items-center -right-6 -top-2 text-center">
            <div className="rounded-full w-6 h-6 bg-black p-2">
              <div className="rounded-full bg-white h-full w-full"></div>
            </div>
            <span className="mt-2 font-semibold">Phase 3</span>
            <p className="w-60 absolute top-16">
              Information Management System
            </p>
          </div>
        </div>
      </div>
      {/* means of evaluation */}
      <div className="bg-black flex flex-col items-center py-40">
        <h1 className="font-bold text-5xl text-white">Means of Evaluation</h1>
        <div className="flex flex-col w-[30%] text-white space-y-4 font-medium font-poppins text-xl mt-10">
          <div className="flex flex-grow justify-between">
            <div>Ourselves</div>
            <div>20%</div>
          </div>
          <div className="flex flex-grow justify-between">
            <div>Team</div>
            <div>20%</div>
          </div>
          <div className="flex flex-grow justify-between">
            <div>{"Mentor (TKT Squad)"}</div>
            <div>20%</div>
          </div>
          <div className="flex flex-grow justify-between">
            <div>Testers</div>
            <div>20%</div>
          </div>
          <div className="flex flex-grow justify-between">
            <div>{"K'Kwan 😲"}</div>
            <div>20%</div>
          </div>
        </div>
      </div>
      {/* teams */}
      <div className="flex flex-col bg-black items-center pt-20 pb-40">
        <h1 className="font-bold text-5xl text-white">Teams</h1>
        <div className="grid grid-cols-2 gap-20 text-white font-poppins mt-16">
          <div className="text-center">
            <Image src={TitanPicture} width="280" height="400" />
            <h1 className="font-bold text-3xl mt-10">Zachariah</h1>
          </div>
          <div className="text-center">
            <Image src={PoonPicture} width="280" height="400" />
            <h1 className="font-bold text-3xl mt-10">Tanadon</h1>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="h-[45vh] bg-black flex flex-col relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 flex-col text-white flex justify-center items-center font-poppins text-center z-20 -mt-14 space-y-3">
          <h1 className="font-semibold text-xl mt-20">Our Mentors</h1>
          <div className="opacity-[85%] space-y-2">
            <p>Teacher Wichet</p>
            <p>Teacher Branden</p>
            <p>Teacher Sarikpong</p>
            <p>{"P'Farm M8"}</p>
            <p>{"N'Ken M4"}</p>
          </div>
        </div>
        <div className="bg-banner1 bg-center opacity-20 h-full"></div>
      </div>
    </div>
  );
};

export default About;
