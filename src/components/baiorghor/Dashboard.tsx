import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { document } from "../../interface/baiorghor";
import SmallFileIcon from "../../../public/img/icons/document_file.png";

interface Props {
  documents: Array<document>;
}

const Dashboard: React.FC<Props> = ({ documents }) => {
  const approvedDocuments = documents?.filter((document) => {
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

    if (
      parentTeacherApproval &&
      document.supervisorTeacherApproval &&
      document.responsibleTeacherApproval &&
      document.isToday
    )
      return document;
  });

  var dorm1Members: any = approvedDocuments.map((document: document) => {
    return document.membersDorm1;
  });
  var dorm2Members: any = approvedDocuments.map((document: document) => {
    return document.membersDorm2;
  });
  var dorm3Members: any = approvedDocuments.map((document: document) => {
    return document.membersDorm3;
  });
  var dorm4Members: any = approvedDocuments.map((document: document) => {
    return document.membersDorm4;
  });

  const finallizeArr = (arr: Array<any>) => {
    arr = [].concat.apply([], arr);
    arr = [...new Set(arr)];

    return arr;
  };

  dorm1Members = finallizeArr(dorm1Members);
  dorm2Members = finallizeArr(dorm2Members);
  dorm3Members = finallizeArr(dorm3Members);
  dorm4Members = finallizeArr(dorm4Members);

  interface MembersListProps {
    title: string;
    dormMembers: Array<string>;
  }

  const MembersList: React.FC<MembersListProps> = ({ title, dormMembers }) => {
    return (
      <div
        className={`rounded-[3rem] p-8 font-athiti ${
          dormMembers.length > 0
            ? "bg-white shadow-secondary"
            : "shadow-glass backdrop-blur-lg"
        }`}
        style={{
          background: `${
            dormMembers.length === 0 &&
            "linear-gradient(178.52deg, rgba(217, 217, 217, 0.09) 2.76%, rgba(255, 255, 255, 0.075) 98.82%), rgba(250, 250, 250, 0.3)"
          }`,
        }}
      >
        <h3
          className={`font-semibold text-2xl text-primary-black mb-1.5 ${
            dormMembers.length === 0 && "opacity-40"
          }`}
        >
          {title}
        </h3>
        {dormMembers.map((member: string, idx: number) => (
          <p
            key={idx}
            className={`font-medium ${
              dormMembers.length === 0 && "opacity-40"
            }`}
          >
            {member}
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col w-[70%] space-y-4">
        <h1 className="font-poppins font-bold text-primary-black text-4xl">
          Today
        </h1>
        <h2 className="font-poppins font-semibold text-primary-black text-2xl">
          {moment(new Date()).format("DD MMM YYYY")}
        </h2>
        <div className="grid grid-cols-2 h-full gap-10">
          <MembersList title="หอครูเบิร์ด" dormMembers={dorm1Members} />
          <MembersList title="หออู" dormMembers={dorm2Members} />
          <MembersList title="หออิ๋ว" dormMembers={dorm3Members} />
          <MembersList title="หอน้ำ" dormMembers={dorm4Members} />
        </div>
      </div>
      <div className="w-[30%] overflow-y-auto -mb-10 mt-20 flex flex-col px-4 space-y-5">
        <h1 className="font-poppins font-bold text-primary-black text-4xl">
          Active
        </h1>
        {approvedDocuments.map((document, idx) => {
          return (
            <Link href={`/baiorghor/${document._id}`} key={idx}>
              <a className="bg-white rounded-3xl shadow-secondary font-athiti p-6 flex items-center space-x-4">
                <div>
                  <Image src={SmallFileIcon} width={46} height={46} />
                </div>
                <div>
                  <h1 className="font-semibold text-lg">{document.reason}</h1>
                  <h3 className="font-medium">{document.requester}</h3>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
