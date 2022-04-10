import { NextPage } from "next";
import { useSession } from "../../contexts/AuthContext";
import BaiorghorParentTeacher from "../../components/parent_teacher/baiorghor";
import BaiorghorStudent from "../../components/student/baiorghor";
import BaiorghorTeacher from "../../components/teacher/baiorghor";

const BaiorghorPage: NextPage = () => {
  const session = useSession();
  if (session?.role === "pt") {
    return <BaiorghorParentTeacher />;
  } else if (session?.role === "t") {
    return <BaiorghorTeacher />;
  } else {
    return <BaiorghorStudent />;
  }
};

export default BaiorghorPage;
