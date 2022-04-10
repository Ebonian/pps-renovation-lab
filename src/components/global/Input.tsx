import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BaiorghorState } from "../../contexts/BaiorghorContext";

interface Props {
  placeholder?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  label: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  onChange,
  value,
  label,
}) => {
  const { users } = useContext(BaiorghorState);

  return (
    <div>
      <h4 className="font-athiti font-bold text-2xl text-primary-black mb-4">
        {label}
      </h4>
      <form>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="w-52 outline-none px-3 py-1.5 border-2 border-primary-black rounded-2xl font-semibold placeholder:font-semibold bg-transparent"
          list={label}
        />
        <datalist id="ครูผู้ดูแล">
          {users.map(
            (
              user: {
                nickName: string;
                role: string;
              },
              idx
            ) => {
              if (user.role.includes("t")) {
                return <option key={idx} value={"ครู" + user.nickName} />;
              } else {
                return null;
              }
            }
          )}
        </datalist>
        <datalist id="ครูผู้รับผิดชอบ">
          {users.map(
            (
              user: {
                nickName: string;
                role: string;
              },
              idx
            ) => {
              if (user.role.includes("t")) {
                return <option key={idx} value={"ครู" + user.nickName} />;
              } else {
                return null;
              }
            }
          )}
        </datalist>
      </form>
    </div>
  );
};

export default Input;
