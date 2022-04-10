import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import dorm from "../data/dorm.json";
import { AuthState } from "./AuthContext";

export const BaiorghorState = createContext({
  membersHandler: (idx: number, e: any) => {},
  addMembersHandler: () => {},
  removeMembersHandler: (idx: number) => {},
  members: [
    { student: "", class: "" },
    { student: "", class: "" },
    { student: "", class: "" },
  ],
  classSelection: {
    m1: false,
    m2: false,
    m3: false,
    m4: false,
    m5: false,
    m6: false,
  },
  setClassSelection: (classSelection: {
    m1: boolean;
    m2: boolean;
    m3: boolean;
    m4: boolean;
    m5: boolean;
    m6: boolean;
  }) => {},
  requester: "",
  supervisor: "",
  supervisorHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  responsibleTeacherHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  responsibleTeacher: "",
  reason: "",
  reasonHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  place: "",
  placeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  startDate: new Date(),
  startDateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  endDate: new Date(),
  endDateHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  note: "",
  noteHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  postHandler: () => {},
  menu: false,
  setMenu: (menu: boolean) => {},
  documents:
    [
      {
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
      },
    ] || null,
  users: [],
});

const BaiorghorContext: React.FC = ({ children }) => {
  // requester
  const { session } = useContext(AuthState);
  const requester = session?.nickName + " ม." + session?.grade;

  // members
  const [members, setMembers] = useState([
    { student: "", class: "" },
    { student: "", class: "" },
    { student: "", class: "" },
  ]);
  var membersInList = members.map((x) => x.student + " " + x.class);
  membersInList.push(requester);
  membersInList = membersInList.filter((entry) => {
    return entry.trim() !== "";
  });
  const membersHandler = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    var values = [...members];
    // @ts-ignore
    values[idx][e.target.name] = e.target.value;
    setMembers(values);
  };

  const addMembersHandler = () => {
    setMembers([...members, { student: "", class: "" }]);
  };

  const removeMembersHandler = (idx: number) => {
    const values = [...members];
    values.splice(idx, 1);
    setMembers(values);
  };

  // class
  const [classSelection, setClassSelection] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false,
    m5: false,
    m6: false,
  });

  // teacher
  const [supervisor, setSupervisor] = useState<string>("");
  const supervisorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupervisor(e.target.value);
  };

  const [responsibleTeacher, setResponsibleTeacher] = useState<string>("");
  const responsibleTeacherHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResponsibleTeacher(e.target.value);
  };

  // reason
  const [reason, setReason] = useState<string>("");
  const reasonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  // place
  const [place, setPlace] = useState<string>("");
  const placeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };

  // date
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const startDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setStartDate(e.target.value);
  };

  const endDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setEndDate(e.target.value);
  };

  // note
  const [note, setNote] = useState("");
  const noteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  // post body
  const postBody = {
    requester: requester,
    members: membersInList,
    membersDorm1: membersInList.filter((x) => dorm.dorm1.includes(x)),
    membersDorm2: membersInList.filter((x) => dorm.dorm2.includes(x)),
    membersDorm3: membersInList.filter((x) => dorm.dorm3.includes(x)),
    membersDorm4: membersInList.filter((x) => dorm.dorm4.includes(x)),
    classSelection: classSelection,
    supervisorTeacher: supervisor.substring(3),
    responsibleTeacher: responsibleTeacher.substring(3),
    reason: reason,
    place: place,
    note: note,
    startDate: startDate,
    endDate: endDate,
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
  };

  const resetHandler = () => {
    setMembers([
      { student: "", class: "" },
      { student: "", class: "" },
      { student: "", class: "" },
    ]);
    setClassSelection({
      m1: false,
      m2: false,
      m3: false,
      m4: false,
      m5: false,
      m6: false,
    });
    setSupervisor("");
    setResponsibleTeacher("");
    setPlace("");
    setReason("");
    setStartDate(new Date());
    setEndDate(new Date());
    setNote("");
  };

  const router = useRouter();

  const allDBStudents: Array<string> = [];
  const allDBTeachers: Array<string> = [];
  const teachersInList = [supervisor, responsibleTeacher];

  const postHandler = () => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/get`
      )
      .then((res) => {
        res.data.map(
          (res: { role: string; nickName: string; grade: number }) => {
            if (res.role === "s" || res.role === "p") {
              allDBStudents.push(res.nickName + " ม." + res.grade);
            }
            if (res.role === "t" || res.role === "pt") {
              allDBTeachers.push("ครู" + res.nickName);
            }
          }
        );

        // filter student w/ database
        const filteredMembers = membersInList.filter((student) =>
          allDBStudents.includes(student)
        );

        // filter teacher w/ database
        const filteredTeachers = teachersInList.filter((teacher) =>
          allDBTeachers.includes(teacher)
        );

        // check if it pass teacher filter
        if (
          Object.keys(filteredMembers).length ===
            Object.keys(membersInList).length &&
          Object.keys(filteredTeachers).length ===
            Object.keys(teachersInList).length
        ) {
          axios
            .post(
              `${
                process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
                  ? process.env.NEXT_PUBLIC_PRODUCTION_API
                  : process.env.NEXT_PUBLIC_DEVELOPMENT_API
              }/baiorghor/create`,
              postBody
            )
            .then((res) => {
              console.log(res.data);
              router.reload();
            });
        } else {
          console.log("Error!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // users
  const [users, setUsers] = useState([] || null);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/get`
      )
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  // displaying baiorghor
  // const [documents, setDocuments] = useState([] || null);

  const fetcher = (url: string) =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => console.log(err));

  const { data: documents, isValidating } = useSWR(
    `${
      process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
        ? process.env.NEXT_PUBLIC_PRODUCTION_API
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API
    }/baiorghor/get`,
    fetcher
  );

  // checking is it is today date and merge into the documents object
  function checkIsTodayDate(start: any, end: any) {
    const today = new Date();
    const formattedToday = moment(today).format("MM/DD/YYYY");

    const dateFrom = moment(start).format("MM/DD/YYYY");
    const dateTo = moment(end).format("MM/DD/YYYY");
    const dateCheck = formattedToday;

    const d1 = dateFrom.split("/");
    const d2 = dateTo.split("/");
    const c = dateCheck.split("/");

    // @ts-ignore
    const from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    // @ts-ignore
    const to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    // @ts-ignore
    const check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    return check >= from && check <= to;
  }

  function mergeTodayProp(objectWithArray: any, array: any) {
    objectWithArray.map((e: any, i: number) => {
      e["isToday"] = array[i];
    });

    return objectWithArray;
  }

  function showDatesHandler() {
    const allCreatedDates = documents.map((x: any) => x.createdAt);
    const allEndDates = documents.map((x: any) => x.endDate);

    const showDates = allCreatedDates.map((e: any, i: any) =>
      checkIsTodayDate(e, allEndDates[i])
    );

    return showDates;
  }

  useEffect(() => {
    if (!isValidating) mergeTodayProp(documents, showDatesHandler());
  }, [documents]);

  const [menu, setMenu] = useState(false);

  return (
    <BaiorghorState.Provider
      value={{
        membersHandler,
        addMembersHandler,
        removeMembersHandler,
        members,
        classSelection,
        setClassSelection,
        requester,
        supervisor,
        responsibleTeacher,
        supervisorHandler,
        responsibleTeacherHandler,
        reason,
        reasonHandler,
        place,
        placeHandler,
        startDate,
        startDateHandler,
        endDate,
        endDateHandler,
        note,
        noteHandler,
        postHandler,
        menu,
        setMenu,
        documents,
        users,
      }}
    >
      {children}
    </BaiorghorState.Provider>
  );
};

export default BaiorghorContext;
