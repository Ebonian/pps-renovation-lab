import { useContext, useEffect, useState } from "react";
import { useSession } from "../../contexts/AuthContext";
import { BaiorghorState } from "../../contexts/BaiorghorContext";
import { document } from "../../interface/baiorghor";
import BaiorghorNavigation from "../global/BaiorghorNavigation";
import ProfileButton from "../global/ProfileButton";
import Archive from "../baiorghor/Archive";
import Personal from "../baiorghor/Personal";
import TeacherLayout from "../baiorghor/TeacherLayout";
import Dashboard from "../baiorghor/Dashboard";

const BaiorghorParentTeacher: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const session = useSession();

  const { documents } = useContext(BaiorghorState);

  const [activeDocument, setActiveDocument] = useState<document>({
    _id: "",
    requester: "",
    members: [""],
    membersDorm1: [""],
    membersDorm2: [""],
    membersDorm3: [""],
    membersDorm4: [""],
    classSelection: {
      m1: false,
      m2: false,
      m3: false,
      m4: false,
      m5: false,
      m6: false,
    },
    supervisorTeacher: "",
    responsibleTeacher: "",
    reason: "",
    place: "",
    note: "",
    startDate: new Date(),
    endDate: new Date(),
    parentTeacherApproval: {
      dorm1: false,
      dorm2: false,
      dorm3: false,
      dorm4: false,
    },
    supervisorTeacherApproval: false,
    responsibleTeacherApproval: false,
    parentTeacherNote: {
      dorm1: "",
      dorm2: "",
      dorm3: "",
      dorm4: "",
    },
    supervisorTeacherNote: "",
    responsibleTeacherNote: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    isToday: false,
  });

  const filteredDocuments = documents
    ?.filter((document) => {
      if (
        session?.nickName === document.supervisorTeacher ||
        session?.nickName === document.responsibleTeacher
      ) {
        return document;
      }
    })
    .reverse();

  useEffect(() => {
    setActiveDocument(filteredDocuments[0]);
  }, [page]);

  const documentHandler = (idx: number) => {
    setActiveDocument(filteredDocuments[idx]);
  };

  return (
    <>
      <BaiorghorNavigation page={page} setPage={setPage} />
      <ProfileButton profile />
      <TeacherLayout>
        {page === 0 && (
          <Personal
            filteredDocuments={filteredDocuments}
            activeDocument={activeDocument}
            documentHandler={documentHandler}
            parentTeacher
          />
        )}
        {page === 1 && <Dashboard documents={documents} />}
        {page === 2 && (
          <Archive
            filteredDocuments={filteredDocuments}
            activeDocument={activeDocument}
            documentHandler={documentHandler}
          />
        )}
      </TeacherLayout>
    </>
  );
};

export default BaiorghorParentTeacher;
