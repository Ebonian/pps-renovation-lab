import { createContext, useState } from "react";

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
});

const BaiorghorContext: React.FC = ({ children }) => {
  function mergeTodayProp(objectWithArray: Array<any>, array: Array<any>) {
    objectWithArray.map((e, i) => {
      e["isToday"] = array[i];
    });

    return objectWithArray;
  }

  // requester
  const [requester, setRequester] = useState("");
  const requesterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequester(e.target.value);
  };

  const [requesterClass, setRequesterClass] = useState("");
  const requesterClassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequesterClass(e.target.value);
  };

  const requesterWithClass = requester + " " + requesterClass;

  // members
  const [members, setMembers] = useState([
    { student: "", class: "" },
    { student: "", class: "" },
    { student: "", class: "" },
  ]);
  var membersInList = members.map((x) => x.student + " " + x.class);
  membersInList.push(requesterWithClass);
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

  return (
    <BaiorghorState.Provider
      value={{
        membersHandler,
        addMembersHandler,
        removeMembersHandler,
        members,
        classSelection,
        setClassSelection,
      }}
    >
      {children}
    </BaiorghorState.Provider>
  );
};

export default BaiorghorContext;
