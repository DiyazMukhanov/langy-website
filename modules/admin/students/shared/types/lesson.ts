export type TeacherInfo = {
  name: string;
  email: string;
  surname: string;
};

export type Lesson = {
  _id: string;
  bookedBy: string | null;
  isPublished: boolean;
  lessonDate: string;
  teacherId: string;
  teacherInfo: TeacherInfo;
};
