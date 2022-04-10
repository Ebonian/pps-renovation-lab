import moment from "moment";
import { useEffect, useState } from "react";
import { document } from "../../interface/baiorghor";

interface Props {
  filteredDocuments: Array<document>;
  activeDocument: document;
  documentHandler: (idx: number) => void;
}

const Archive: React.FC<Props> = ({
  filteredDocuments,
  activeDocument,
  documentHandler,
}) => {
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
      <div className="w-[45%] overflow-y-auto -mb-10 space-y-10 px-4">
        {filteredDocuments?.map((document, idx: number) => {
          var parentTeacherReject = false;
          var supervisorTeacherReject = false;
          var responsibleTeacherReject = false;

          if (!document.parentTeacherApproval && document.parentTeacherNote)
            parentTeacherReject = true;

          if (
            !document.supervisorTeacherApproval &&
            document.supervisorTeacherNote
          )
            supervisorTeacherReject = true;

          if (
            !document.responsibleTeacherApproval &&
            document.responsibleTeacherNote
          )
            responsibleTeacherReject = true;

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

          return (
            <div
              className={`bg-white shadow-secondary rounded-3xl p-7 space-y-3 cursor-pointer select-none ${
                document?._id !== activeDocument?._id && "opacity-[35%]"
              }`}
              key={idx}
              onClick={() => documentHandler(idx)}
            >
              <div className="flex justify-between">
                <h1 className="font-poppins font-bold text-primary-black text-3xl">
                  {moment(document?.startDate).format("DD") ===
                  moment(document?.endDate).format("DD")
                    ? moment(document?.startDate).format("DD MMM YYYY")
                    : moment(document?.startDate).format("MMM") ===
                      moment(document?.endDate).format("MMM")
                    ? moment(document?.startDate).format("DD") +
                      "-" +
                      moment(document?.endDate).format("DD MMM YYYY")
                    : moment(document?.startDate).format("DD MMM") +
                      "-" +
                      moment(document?.startDate).format("DD MMM YYYY")}
                </h1>
                <span>
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
                </span>
              </div>
              <div className="font-athiti space-y-3">
                <p>
                  {document?.members.map((member: string) => {
                    return member + ", ";
                  })}
                </p>
                <p>{document?.place}</p>
                <p>
                  {moment(document.startDate).format("LT") +
                    "-" +
                    moment(document.endDate).format("LT")}
                </p>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-black ${
                        document.membersDorm1.length > 0 &&
                        "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                      }`}
                    ></div>
                    <p>ครูเบิร์ด</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-black ${
                        document.membersDorm2.length > 0 &&
                        "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                      }`}
                    ></div>
                    <p>ครูอู</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-black ${
                        document.membersDorm3.length > 0 &&
                        "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                      }`}
                    ></div>
                    <p>ครูอิ๋ว</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-black ${
                        document.membersDorm4.length > 0 &&
                        "bg-gradient-to-r from-gradient-100 to bg-gradient-200"
                      }`}
                    ></div>
                    <p>ครูน้ำ</p>
                  </div>
                </div>
              </div>
              <h3 className="font-athiti font-semibold text-xl">
                {document?.requester}
              </h3>
            </div>
          );
        })}
      </div>
      {/* document content */}
      {activeDocument && (
        <div className="flex flex-col w-[55%] bg-white shadow-secondary rounded-[32px] p-10">
          <div className="flex justify-between">
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
            </h1>
            <span>
              {parentTeacherApproval &&
              activeDocument?.supervisorTeacherApproval &&
              activeDocument?.responsibleTeacherApproval
                ? "🟢"
                : !(
                    parentTeacherReject ||
                    supervisorTeacherReject ||
                    responsibleTeacherReject
                  )
                ? "🟡"
                : "🔴"}
            </span>
          </div>
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
                  {activeDocument?.members.map((member) => {
                    return member + ", ";
                  })}
                </p>
                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
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
                <p className="h-6">ครู{activeDocument?.supervisorTeacher}</p>

                <div className="absolute -bottom-2 -left-2 w-40 h-0.5 bg-gray-200"></div>
              </div>
            </div>
            {/* responsible */}
            <div className="flex items-center">
              <h3 className="font-semibold text-xl w-48">ครูผู้รับผิดชอบ</h3>
              <div className="relative">
                <p className="h-6">ครู{activeDocument?.responsibleTeacher}</p>

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
        </div>
      )}
    </>
  );
};

export default Archive;
