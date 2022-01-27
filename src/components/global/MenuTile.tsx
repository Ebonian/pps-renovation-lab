import Image from "next/image";
import Link from "next/link";
import { useSession } from "../../contexts/AuthContext";

interface Props {
  img: any;
  name: String;
  route: String;
  reqSession?: true;
  reqTeacher?: true;
  reqPrefect?: true;
}

const MenuTile: React.FC<Props> = ({
  name,
  img,
  reqSession = false,
  reqPrefect = false,
  reqTeacher = false,
  route,
}) => {
  const session = useSession();

  const Body = () => {
    return (
      <Link href={`${route}`}>
        <a className="grid place-content-center mr-10 mb-10">
          <div className="flex flex-col items-center justify-between shadow-secondary bg-white h-44 w-44 rounded-[30px] cursor-pointer overflow-clip p-4">
            <span className="text-7xl flex flex-grow items-center">
              <Image src={img} width={110} height={110} />
            </span>
            <span className="text-xl font-bold text-gray-800">{name}</span>
          </div>
        </a>
      </Link>
    );
  };

  if (session?.role === "a") {
    return <Body />;
  } else {
    if (reqSession) {
      if (session) {
        if (reqPrefect) {
          if (session?.role === "p") {
            return <Body />;
          } else {
            return null;
          }
        } else if (reqTeacher) {
          if (session?.role === "t") {
            return <Body />;
          } else {
            return null;
          }
        } else {
          return <Body />;
        }
      } else {
        return null;
      }
    } else {
      return <Body />;
    }
  }
};

export default MenuTile;
