import ProtectPage from "@/modules/shared/ProtectPage";
import WithTeachersLayoutContent from "./withTeachersLayoutContent";
import Footer from "@/modules/shared/Footer";

type TabName =
  | "progress"
  | "chooseTeacher"
  | "plannedLessons"
  | "addLessons"
  | "download";

type Props = {
  children: React.ReactNode;
  tabName?: TabName;
};

export default function WithTeachersLayout({ children, tabName }: Props) {
  return (
    <ProtectPage subscriptionIsNeeded={false} adminNeeded={false}>
      <WithTeachersLayoutContent tabName={tabName}>
        {children}
      </WithTeachersLayoutContent>
      <Footer />
    </ProtectPage>
  );
}
