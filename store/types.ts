export interface Student {
  _id: string;
  name: string;
  email: string;
  gender: string;
}

export interface StudentProfile {
  studentProfile: Student;
}

export interface PackageState {
  package: number | null;
}

export interface TeacherState {
  id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  gender: string;
  description: string;
  isLoggedIn: boolean;
}

export interface RootState {
  teacher: TeacherState;
  package: PackageState;
  studentProfile: StudentProfile;
}
