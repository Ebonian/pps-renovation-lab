import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "../../contexts/AuthContext";
import { document } from "../../interface/baiorghor";
import SmallFileIcon from "../../../public/img/icons/document_file.png";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
  filteredDocuments: Array<document>;
  activeDocument: document;
  documentHandler: (idx: number) => void;
  parentTeacher?: boolean;
}

const Personal: React.FC<Props> = ({
  filteredDocuments,
  activeDocument,
  documentHandler,
  parentTeacher = false,
}) => {
  const session = useSession();

  const [parentTeacherReject, setParentTeacherReject] = useState(false);
  const [supervisorTeacherReject, setSupervisorTeacherReject] = useState(false);
  const [responsibleTeacherReject, setResponsibleTeacherReject] =
    useState(false);

  useEffect(() => {
    if (
      !activeDocument?.parentTeacherApproval &&
      activeDocument?.parentTeacherNote
    )
      setParentTeacherReject(true);

    if (
      !activeDocument?.supervisorTeacherApproval &&
      activeDocument?.supervisorTeacherNote
    )
      setSupervisorTeacherReject(true);

    if (
      !activeDocument?.responsibleTeacherApproval &&
      activeDocument?.responsibleTeacherNote
    )
      setResponsibleTeacherReject(true);
  }, [activeDocument]);

  // patch data
  const [note, setNote] = useState<string>("");

  const [newData, setNewData] = useState<object>({});

  const router = useRouter();

  const patchData = () => {
    axios
      .patch(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/baiorghor/edit/${activeDocument._id}`,
        newData
      )
      .then(() => {
        console.log(newData);
        router.reload();
      });
  };

  useEffect(() => {
    if (Object.keys(newData).length) patchData();
  }, [newData]);

  const approveHandler = () => {
    if (parentTeacher) {
      // parent teacher
      if (
        session?.nickName === activeDocument.supervisorTeacher &&
        session?.nickName === activeDocument.responsibleTeacher
      ) {
        if (session?.nickName === "เบิร์ด") {
          setNewData({
            supervisorTeacherApproval: true,
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: true,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: note,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อู") {
          setNewData({
            supervisorTeacherApproval: true,
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: true,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: note,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อิ๋ว") {
          setNewData({
            supervisorTeacherApproval: true,
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: true,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: note,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "น้ำ") {
          setNewData({
            supervisorTeacherApproval: true,
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: true,
            },
            supervisorTeacherNote: note,
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: note,
            },
          });
        }
      } else if (session?.nickName === activeDocument.supervisorTeacher) {
        if (session?.nickName === "เบิร์ด") {
          setNewData({
            supervisorTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: true,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            parentTeacherNote: {
              dorm1: note,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อู") {
          setNewData({
            supervisorTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: true,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: note,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อิ๋ว") {
          setNewData({
            supervisorTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: true,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            supervisorTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: note,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "น้ำ") {
          setNewData({
            supervisorTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: true,
            },
            supervisorTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: note,
            },
          });
        }
      } else if (session?.nickName === activeDocument.responsibleTeacher) {
        if (session?.nickName === "เบิร์ด") {
          setNewData({
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: true,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: note,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อู") {
          setNewData({
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: true,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: note,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "อิ๋ว") {
          setNewData({
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: true,
              dorm4: activeDocument.parentTeacherApproval.dorm4,
            },
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: note,
              dorm4: activeDocument.parentTeacherNote.dorm4,
            },
          });
        }
        if (session?.nickName === "น้ำ") {
          setNewData({
            responsibleTeacherApproval: true,
            parentTeacherApproval: {
              dorm1: activeDocument.parentTeacherApproval.dorm1,
              dorm2: activeDocument.parentTeacherApproval.dorm2,
              dorm3: activeDocument.parentTeacherApproval.dorm3,
              dorm4: true,
            },
            responsibleTeacherNote: note,
            parentTeacherNote: {
              dorm1: activeDocument.parentTeacherNote.dorm1,
              dorm2: activeDocument.parentTeacherNote.dorm2,
              dorm3: activeDocument.parentTeacherNote.dorm3,
              dorm4: note,
            },
          });
        }
      }
    } else {
      // normal teacher
      if (
        session?.nickName === activeDocument.supervisorTeacher &&
        session?.nickName === activeDocument.responsibleTeacher
      ) {
        setNewData({
          supervisorTeacherApproval: true,
          responsibleTeacherApproval: true,
          supervisorTeacherNote: note,
          responsibleTeacherNote: note,
        });
      } else if (session?.nickName === activeDocument.supervisorTeacher) {
        setNewData({
          supervisorTeacherApproval: true,
          supervisorTeacherNote: note,
        });
      } else if (session?.nickName === activeDocument.responsibleTeacher) {
        setNewData({
          responsibleTeacherApproval: true,
          responsibleTeacherNote: note,
        });
      }
    }
  };

  const [rejectNoNote, setRejectNoNote] = useState(false);

  const rejectHandler = () => {
    if (note) {
      if (
        session?.nickName === activeDocument.supervisorTeacher &&
        session.nickName === activeDocument.responsibleTeacher
      ) {
        setNewData({
          supervisorTeacherApproval: false,
          responsibleTeacherApproval: false,
          supervisorTeacherNote: note,
          responsibleTeacherNote: note,
        });
      } else if (session?.nickName === activeDocument.supervisorTeacher) {
        setNewData({
          supervisorTeacherApproval: false,
          supervisorTeacherNote: note,
        });
      } else if (session?.nickName === activeDocument.responsibleTeacher) {
        setNewData({
          responsibleTeacherApproval: false,
          responsibleTeacherNote: note,
        });
      }
    } else {
      setRejectNoNote(true);
    }
  };

  // check parent teacher apporval
  const checkParentTeacherApproval = () => {
    const check = [];

    if (activeDocument?.membersDorm1.length > 0)
      check.push(activeDocument.parentTeacherApproval.dorm1);
    if (activeDocument?.membersDorm2.length > 0)
      check.push(activeDocument.parentTeacherApproval.dorm2);
    if (activeDocument?.membersDorm3.length > 0)
      check.push(activeDocument.parentTeacherApproval.dorm3);
    if (activeDocument?.membersDorm4.length > 0)
      check.push(activeDocument.parentTeacherApproval.dorm4);

    return check;
  };

  const [parentTeacherApproval, setParentTeacherApproval] = useState(false);

  useEffect(() => {
    setParentTeacherApproval(
      checkParentTeacherApproval().every((v) => v === true)
    );
  }, [activeDocument]);

  return (
    <>
      <div
        className="flex flex-col justify-between w-[35%] shadow-glass backdrop-blur-lg rounded-[32px] p-12"
        style={{
          background:
            "linear-gradient(178.52deg, rgba(217, 217, 217, 0.09) 2.76%, rgba(255, 255, 255, 0.075) 98.82%), rgba(250, 250, 250, 0.3)",
        }}
      >
        {/* pending */}
        <div className="flex flex-grow flex-col space-y-6">
          <h1 className="font-poppins font-bold text-4xl text-primary-black">
            Pending
          </h1>
          {filteredDocuments?.map((document, idx: number) => {
            var parentTeacherReject = false;
            var supervisorTeacherReject = false;
            var responsibleTeacherReject = false;

            if (!document.parentTeacherApproval && document.parentTeacherNote) {
              parentTeacherReject = true;
            }

            if (
              !document.supervisorTeacherApproval &&
              document.supervisorTeacherNote
            ) {
              supervisorTeacherReject = true;
            }

            if (
              !document.responsibleTeacherApproval &&
              document.responsibleTeacherNote
            ) {
              responsibleTeacherReject = true;
            }

            var teacherType = "";

            if (
              session?.nickName === document.responsibleTeacher &&
              session?.nickName === document.supervisorTeacher
            ) {
              teacherType = "both";
            } else if (session?.nickName === document.supervisorTeacher) {
              teacherType = "st";
            } else if (session?.nickName === document.responsibleTeacher) {
              teacherType = "rt";
            }

            var status = "";

            if (teacherType === "both") {
              if (
                document.supervisorTeacherApproval &&
                document.responsibleTeacherApproval
              ) {
                status = "both confirmed";
              } else if (
                (!document.supervisorTeacherApproval &&
                  !document.supervisorTeacherNote) ||
                (!document.responsibleTeacherApproval &&
                  !document.responsibleTeacherNote)
              ) {
                status = "both pending";
              } else if (
                (!document.supervisorTeacherApproval &&
                  document.supervisorTeacherNote) ||
                (!document.responsibleTeacherApproval &&
                  document.responsibleTeacherNote)
              ) {
                status = "both rejected";
              }
            } else if (teacherType === "st") {
              if (document.supervisorTeacherApproval) {
                status = "st confirmed";
              } else if (
                !document.supervisorTeacherApproval &&
                !document.supervisorTeacherNote
              ) {
                status = "st pending";
              } else if (
                !document.supervisorTeacherApproval &&
                document.supervisorTeacherNote
              ) {
                status = "st rejected";
              }
            } else if (teacherType === "rt") {
              if (document.responsibleTeacherApproval) {
                status = "rt confirmed";
              } else if (
                !document.responsibleTeacherApproval &&
                !document.responsibleTeacherNote
              ) {
                status = "rt pending";
              } else if (
                !document.responsibleTeacherApproval &&
                document.responsibleTeacherNote
              ) {
                status = "rt rejected";
              }
            }

            // check parent teacher apporval
            const checkParentTeacherApproval = () => {
              const check = [];

              if (document.membersDorm1.length > 0)
                check.push(document.parentTeacherApproval.dorm1);
              if (document.membersDorm2.length > 0)
                check.push(document.parentTeacherApproval.dorm2);
              if (document.membersDorm3.length > 0)
                check.push(document.parentTeacherApproval.dorm3);
              if (document.membersDorm4.length > 0)
                check.push(document.parentTeacherApproval.dorm4);

              return check;
            };

            const parentTeacherApproval = checkParentTeacherApproval().every(
              (v) => v === true
            );

            const render = () => {
              return (
                <div
                  key={idx}
                  className={`flex justify-between items-center bg-white w-full rounded-xl py-2 px-3 cursor-pointer select-none h-16 ${
                    document._id !== activeDocument._id && "bg-opacity-30"
                  }`}
                  onClick={() => documentHandler(idx)}
                >
                  <div
                    className={`flex items-center space-x-2 ${
                      document._id !== activeDocument._id && "opacity-30"
                    }`}
                  >
                    <Image src={SmallFileIcon} width="36" height="36" />
                    <h1 className="space-x-3">
                      <span className="font-robotoMono font-semibold text-primary-black">
                        {moment(document.startDate).format("DD/MM/YYYY")}
                      </span>
                      <span className="font-kanit opacity-80">
                        {document.requester}
                      </span>
                    </h1>
                  </div>
                  <div>
                    {parentTeacherApproval &&
                    document.supervisorTeacherApproval &&
                    document.responsibleTeacherApproval
                      ? "🟢"
                      : !(
                          parentTeacherReject ||
                          supervisorTeacherReject ||
                          responsibleTeacherReject
                        )
                      ? "🟡"
                      : "🔴"}
                  </div>
                </div>
              );
            };

            if (status.includes("pending")) {
              return render();
            } else null;
          })}
        </div>
        {/* approved */}
        <div className="space-y-6">
          <h1 className="font-poppins font-bold text-4xl text-primary-black">
            Approved
          </h1>
          {filteredDocuments?.map((document: document, idx: number) => {
            var parentTeacherReject = false;
            var supervisorTeacherReject = false;
            var responsibleTeacherReject = false;

            if (!document.parentTeacherApproval && document.parentTeacherNote) {
              parentTeacherReject = true;
            }

            if (
              !document.supervisorTeacherApproval &&
              document.supervisorTeacherNote
            ) {
              supervisorTeacherReject = true;
            }

            if (
              !document.responsibleTeacherApproval &&
              document.responsibleTeacherNote
            ) {
              responsibleTeacherReject = true;
            }

            var teacherType = "";

            if (
              session?.nickName === document.responsibleTeacher &&
              session?.nickName === document.supervisorTeacher
            ) {
              teacherType = "both";
            } else if (session?.nickName === document.supervisorTeacher) {
              teacherType = "st";
            } else if (session?.nickName === document.responsibleTeacher) {
              teacherType = "rt";
            }

            var status = "";

            if (teacherType === "both") {
              if (
                document.supervisorTeacherApproval &&
                document.responsibleTeacherApproval
              ) {
                status = "both confirmed";
              } else if (
                (!document.supervisorTeacherApproval &&
                  !document.supervisorTeacherNote) ||
                (!document.responsibleTeacherApproval &&
                  !document.responsibleTeacherNote)
              ) {
                status = "both pending";
              } else if (
                (!document.supervisorTeacherApproval &&
                  document.supervisorTeacherNote) ||
                (!document.responsibleTeacherApproval &&
                  document.responsibleTeacherNote)
              ) {
                status = "both rejected";
              }
            } else if (teacherType === "st") {
              if (document.supervisorTeacherApproval) {
                status = "st confirmed";
              } else if (
                !document.supervisorTeacherApproval &&
                !document.supervisorTeacherNote
              ) {
                status = "st pending";
              } else if (
                !document.supervisorTeacherApproval &&
                document.supervisorTeacherNote
              ) {
                status = "st rejected";
              }
            } else if (teacherType === "rt") {
              if (document.responsibleTeacherApproval) {
                status = "rt confirmed";
              } else if (
                !document.responsibleTeacherApproval &&
                !document.responsibleTeacherNote
              ) {
                status = "rt pending";
              } else if (
                !document.responsibleTeacherApproval &&
                document.responsibleTeacherNote
              ) {
                status = "rt rejected";
              }
            }

            // check parent teacher apporval
            const checkParentTeacherApproval = () => {
              const check = [];

              if (document.membersDorm1.length > 0)
                check.push(document.parentTeacherApproval.dorm1);
              if (document.membersDorm2.length > 0)
                check.push(document.parentTeacherApproval.dorm2);
              if (document.membersDorm3.length > 0)
                check.push(document.parentTeacherApproval.dorm3);
              if (document.membersDorm4.length > 0)
                check.push(document.parentTeacherApproval.dorm4);

              return check;
            };

            const parentTeacherApproval = checkParentTeacherApproval().every(
              (v) => v === true
            );

            const render = () => {
              return (
                <div
                  key={idx}
                  className={`flex justify-between items-center bg-white w-full rounded-xl py-2 px-3 cursor-pointer select-none h-16 ${
                    document._id !== activeDocument._id && "bg-opacity-30"
                  }`}
                  onClick={() => documentHandler(idx)}
                >
                  <div
                    className={`flex items-center space-x-2 ${
                      document._id !== activeDocument._id && "opacity-30"
                    }`}
                  >
                    <Image src={SmallFileIcon} width="36" height="36" />
                    <h1 className="space-x-3">
                      <span className="font-robotoMono font-semibold text-primary-black">
                        {moment(document.startDate).format("DD/MM/YYYY")}
                      </span>
                      <span className="font-kanit opacity-80">
                        {document.requester}
                      </span>
                    </h1>
                  </div>
                  <div>
                    {parentTeacherApproval &&
                    document.supervisorTeacherApproval &&
                    document.responsibleTeacherApproval
                      ? "🟢"
                      : !(
                          parentTeacherReject ||
                          supervisorTeacherReject ||
                          responsibleTeacherReject
                        )
                      ? "🟡"
                      : "🔴"}
                  </div>
                </div>
              );
            };

            if (status.includes("confirmed")) {
              return render();
            } else null;
          })}
        </div>
      </div>
      {/* document content */}
      {activeDocument && (
        <div className="flex flex-col w-[65%] bg-white shadow-secondary rounded-[32px] p-10">
          <h1 className="font-poppins font-bold text-primary-black text-4xl">
            {moment(activeDocument?.startDate).format("DD") ===
            moment(activeDocument?.endDate).format("DD")
              ? moment(activeDocument?.startDate).format("DD MMM YYYY")
              : moment(activeDocument?.startDate).format("MMM") ===
                moment(activeDocument?.endDate).format("MMM")
              ? moment(activeDocument?.startDate).format("DD") +
                "-" +
                moment(activeDocument?.endDate).format("DD MMM YYYY")
              : moment(activeDocument?.startDate).format("DD MMM") +
                "-" +
                moment(activeDocument?.startDate).format("DD MMM YYYY")}
            {}
          </h1>
          <div className="font-athiti space-y-7 mt-6">
            {/* requester */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ผู้ขอ</h3>
              <div className="relative">
                <p className="h-6">{activeDocument?.requester}</p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* members */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ใครออกบ้าง</h3>
              <div className="relative">
                <p className="h-6">
                  {activeDocument?.members.map((member: string) => {
                    return member + ", ";
                  })}
                </p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* dorm */}
            <div className="flex items-center space-x-5">
              {activeDocument?.membersDorm1.length > 0 && (
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-black ${
                      activeDocument?.parentTeacherApproval.dorm1 &&
                      "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                    }`}
                  ></div>
                  <p>ครูเบิร์ด</p>
                </div>
              )}

              {activeDocument?.membersDorm2.length > 0 && (
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-black ${
                      activeDocument?.parentTeacherApproval.dorm2 &&
                      "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                    }`}
                  ></div>
                  <p>ครูอู</p>
                </div>
              )}

              {activeDocument?.membersDorm3.length > 0 && (
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-black ${
                      activeDocument?.parentTeacherApproval.dorm3 &&
                      "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                    }`}
                  ></div>
                  <p>ครูอิ๋ว</p>
                </div>
              )}

              {activeDocument?.membersDorm4.length > 0 && (
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-black ${
                      activeDocument?.parentTeacherApproval.dorm4 &&
                      "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                    }`}
                  ></div>
                  <p>ครูน้ำ</p>
                </div>
              )}
            </div>

            {/* reason */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">เหตุผล</h3>
              <div className="relative">
                <p className="h-6">{activeDocument?.reason}</p>
                <div className="absolute -bottom-2 -left-2 -right-14 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* place */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">สถานที่</h3>
              <div className="relative">
                <p className="h-6">{activeDocument?.place}</p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* interval */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ช่วงเวลา</h3>
              <div className="relative">
                <p className="h-6">
                  {moment(activeDocument?.startDate).format("LT") +
                    "-" +
                    moment(activeDocument?.endDate).format("LT")}
                </p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* supervisor */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ครูผู้ดูแล</h3>
              <div className="relative">
                <p className="h-6">
                  ครู{activeDocument?.supervisorTeacher}
                  {activeDocument?.supervisorTeacherApproval ? " ✔" : " ❌"}
                </p>

                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* responsible */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ครูผู้รับผิดชอบ</h3>
              <div className="relative">
                <p className="h-6">
                  ครู{activeDocument?.responsibleTeacher}
                  {activeDocument?.responsibleTeacherApproval ? " ✔" : " ❌"}
                </p>

                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* note */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">หมายเหตุ</h3>
              <div className="relative">
                <p className="h-6">{activeDocument?.note}</p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
          </div>
          {/* add teacher note */}
          <div className="flex mt-14 space-x-10">
            <div className="flex flex-col space-y-7">
              <div
                className="w-36 h-12 bg-white shadow-lightWhiteButton rounded-2xl grid place-content-center font-poppins font-semibold cursor-pointer select-none"
                onClick={rejectHandler}
              >
                Reject
              </div>
              <div
                className="w-36 h-12 bg-gradient-to-r from-gradient-100 to-gradient-200 shadow-color text-white rounded-2xl grid place-content-center font-poppins font-semibold cursor-pointer select-none"
                onClick={approveHandler}
              >
                Approve
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="เหตุผล: เช่น สถานที่ไม่พร้อม"
                className={`w-[20rem] xl:w-[32rem] outline-none font-athiti placeholder:font-athiti rounded-2xl p-3 ${
                  !rejectNoNote
                    ? "border-black border-opacity-20 border-2"
                    : "border-[#A81D30] border-2"
                }`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <span className="absolute -top-3 -right-2 text-[#A81D30] text-5xl font-poppins font-medium select-none">
                *
              </span>
              <p className="font-athiti font-medium text-sm select-none">
                <span className="text-[#A81D30] text-2xl">*</span>
                ต้องระบุเหตุุผลเมื่อปฏิเสธคำขออนุญาต
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Personal;
