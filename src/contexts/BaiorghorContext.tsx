import { createContext } from "react";

export const BaiorghorState = createContext({});

const BaiorghorContext: React.FC = ({ children }) => {
  function mergeTodayProp(objectWithArray: Array<any>, array: Array<any>) {
    objectWithArray.map((e, i) => {
      e["isToday"] = array[i];
    });

    return objectWithArray;
  }
  return (
    <BaiorghorState.Provider value={{}}>{children}</BaiorghorState.Provider>
  );
};

export default BaiorghorContext;
