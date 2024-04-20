import ProtectPage from "@/modules/shared/ProtectPage";
import WithTeachersLayoutContent from "./withTeachersLayoutContent";

export default function WithTeachersLayout({ children }) {
  return (
    <ProtectPage subscriptionIsNeeded={false} adminNeeded={false}>
      <WithTeachersLayoutContent>{children}</WithTeachersLayoutContent>
    </ProtectPage>
  );
}
