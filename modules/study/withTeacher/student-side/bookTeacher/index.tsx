import WithTeachersLayout from "../shared/withTeachersLayout";
import Schedule from "./Schedule";
import { slots } from "./fakeSchedule";

export default function BookTeacher() {

    return (
        <WithTeachersLayout>
            <Schedule slots={slots} />
        </WithTeachersLayout>
    )
}