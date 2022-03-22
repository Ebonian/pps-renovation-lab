import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { FiUserPlus } from "react-icons/fi";
import BackButton from "../../components/global/BackButton";
import Input from "../../components/global/Input";
import ProfileButton from "../../components/global/ProfileButton";
import Textarea from "../../components/global/TextArea";
import { AuthState } from "../../contexts/AuthContext";
import { BaiorghorState } from "../../contexts/BaiorghorContext";

const Baiorghor: NextPage = () => {
  const {
    membersHandler,
    addMembersHandler,
    members,
    classSelection,
    setClassSelection,
    supervisor,
    responsibleTeacher,
    responsibleTeacherHandler,
    supervisorHandler,
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
  } = useContext(BaiorghorState);

  return (
    <div className="flex flex-col items-center pt-[15vh] bg-background-100 min-h-screen w-full">
      <BackButton />
      <ProfileButton />

      <div className="flex space-x-14">
        {/* 1st row */}
        <div className="space-y-12">
          <div>
            <h4 className="font-athiti font-bold text-2xl text-primary-black mb-4 ">
              ใครออกบ้าง
            </h4>
            <div className="flex flex-col bg-white shadow-secondary rounded-[30px] p-8">
              {members.map((members, idx) => (
                <div
                  key={idx}
                  className="flex space-x-4 items-center font-athiti font-semibold mb-4"
                >
                  <input
                    type="text"
                    name="student"
                    placeholder="คนที่จะออก"
                    value={members.student}
                    onChange={(e) => membersHandler(idx, e)}
                    className="w-48 outline-none px-3 py-1.5 border-2 border-primary-black rounded-2xl font-semibold placeholder:font-semibold"
                  />
                  <select
                    name="class"
                    className="outline-none border-2 rounded-2xl px-2 py-[4.5px] border-primary-black font-semibold text-primary-black"
                    onChange={(e) => membersHandler(idx, e)}
                  >
                    <option disabled selected value={members.class}></option>
                    <option value="ม.1">ม.1</option>
                    <option value="ม.2">ม.2</option>
                    <option value="ม.3">ม.3</option>
                    <option value="ม.4">ม.4</option>
                    <option value="ม.5">ม.5</option>
                    <option value="ม.6">ม.6</option>
                  </select>
                </div>
              ))}
              <div className="flex mt-4">
                <div
                  className="bg-primary rounded-2xl px-8 py-2.5 shadow-button text-white text-xl cursor-pointer"
                  onClick={() => addMembersHandler()}
                >
                  <FiUserPlus />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-athiti font-bold text-2xl text-primary-black mb-4 ">
              ออกทั้งชั้นติ๊กตรงนี้เลย
            </h4>
            <div className="grid grid-cols-3 gap-10 font-athiti">
              <div>
                <input
                  type="checkbox"
                  name="m1"
                  checked={classSelection.m1}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m1: !classSelection.m1,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m1"> ม.1</label>
                <br />
                <input
                  type="checkbox"
                  name="m4"
                  checked={classSelection.m4}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m4: !classSelection.m4,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m4"> ม.4</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="m2"
                  checked={classSelection.m2}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m2: !classSelection.m2,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m2"> ม.2</label>
                <br />
                <input
                  type="checkbox"
                  name="m5"
                  checked={classSelection.m5}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m5: !classSelection.m5,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m5"> ม.5</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="m3"
                  checked={classSelection.m3}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m3: !classSelection.m3,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m3"> ม.3</label>
                <br />
                <input
                  type="checkbox"
                  name="m6"
                  checked={classSelection.m6}
                  onClick={() =>
                    setClassSelection({
                      ...classSelection,
                      m6: !classSelection.m6,
                    })
                  }
                  className="outline-none"
                />
                <label htmlFor="m6"> ม.6</label>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="space-y-8 font-athiti">
          <Input
            placeholder="ชื่อครูผู้ดูแล"
            type="text"
            label="ครูผู้ดูแล"
            onChange={supervisorHandler}
            value={supervisor}
          />
          <Input
            placeholder="ชื่อครูผู้รับผิดชอบ"
            type="text"
            label="ครูผู้รับผิดชอบ"
            onChange={responsibleTeacherHandler}
            value={responsibleTeacher}
          />
          <Input
            placeholder="ที่ไหน?"
            type="text"
            label="สถานที่"
            onChange={placeHandler}
            value={place}
          />
          <Textarea
            placeholder="ขออนุญาตออกจากหอเพื่อ..."
            label="เหตุผล"
            onChange={reasonHandler}
            value={reason}
          />
        </div>
        {/* 3rd row */}
        <div className="space-y-8 font-athiti">
          <Input
            type="datetime-local"
            label="ตั้งแต่"
            onChange={startDateHandler}
            value={startDate}
          />
          <Input
            type="datetime-local"
            label="จนถึง"
            onChange={endDateHandler}
            value={endDate}
          />
          <Textarea
            placeholder="เช่นขอไม่เข้าแถว"
            label="หมายเหตุ"
            onChange={noteHandler}
            value={note}
          />
        </div>
      </div>

      <div className="mt-32">
        <span
          className="bg-gradient-to-r from-gradient-100 to-gradient-200 font-poppins font-semibold text-white py-3 px-20 rounded-xl shadow-color select-none cursor-pointer"
          onClick={postHandler}
        >
          Submit
        </span>
      </div>
    </div>
  );
};

export default Baiorghor;
