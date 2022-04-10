import Image from "next/image";
import Link from "next/link";
import { useSession } from "../../contexts/AuthContext";

interface Props {
  img: any;
  name: String;
  route: String;
  reqSession?: true;
  reqTeacher?: true;
  reqParentTeacher?: true;
  reqPrefect?: true;
  reqAdmin?: true;
  reqStudent?: true;
}

const MenuTile: React.FC<Props> = ({
  name,
  img,
  reqSession = false,
  reqPrefect = false,
  reqTeacher = false,
  reqParentTeacher = false,
  reqAdmin = false,
  reqStudent = false,
  route,
}) => {
  const session = useSession();

  const Body = () => {
    return (
      <Link href={`${route}`}>
        <a className="grid place-content-center text-center select-none">
          <span className="text-7xl flex justify-center flex-grow mb-4">
            <Image src={img} width={110} height={110} />
          </span>
          <div className="grid place-content-center shadow-secondary bg-white w-44 rounded-[20px] py-4 text-xl font-bold font-athiti text-gray-800">
            {name}
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
        if (reqAdmin) {
          if (session?.role === "a") {
            return <Body />;
          } else {
            return null;
          }
        } else if (reqPrefect) {
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
        } else if (reqParentTeacher) {
          if (session?.role === "pt") {
            return <Body />;
          } else {
            return null;
          }
        } else if (reqStudent) {
          if (session?.role === "s") {
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
