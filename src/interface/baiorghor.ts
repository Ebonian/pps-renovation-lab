export interface document {
  _id: string;
  requester: string;
  members: Array<string>;
  membersDorm1: Array<string>;
  membersDorm2: Array<string>;
  membersDorm3: Array<string>;
  membersDorm4: Array<string>;
  classSelection: {
    m1: boolean;
    m2: boolean;
    m3: boolean;
    m4: boolean;
    m5: boolean;
    m6: boolean;
  };
  supervisorTeacher: string;
  responsibleTeacher: string;
  reason: string;
  place: string;
  note: string;
  startDate: Date;
  endDate: Date;
  parentTeacherApproval: {
    dorm1: boolean;
    dorm2: boolean;
    dorm3: boolean;
    dorm4: boolean;
  };
  supervisorTeacherApproval: boolean;
  responsibleTeacherApproval: boolean;
  parentTeacherNote: {
    dorm1: string;
    dorm2: string;
    dorm3: string;
    dorm4: string;
  };
  supervisorTeacherNote: string;
  responsibleTeacherNote: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isToday: boolean;
}
