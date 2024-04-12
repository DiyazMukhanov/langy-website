import styles from "./Schedule.module.scss";
import { formatRussianDate } from "../../shared/utils/formatRuDate";
import classNames from "classnames";
import { useState } from "react";
import { Modal } from "@/ui-kit/ModalCommon";
import Confirm from "../Confirm";

export default function Schedule({ slots }) {
  console.log(slots);
  // const [bookConfirmationShow, setBookConfirmationShow] = useState(false)

  // const mondaySlots = slots.filter(slot => slot.day === 'Mon')
  // const tuesdaySlots = slots.filter(slot => slot.day === 'Tue')
  // const wednesdaySlots = slots.filter(slot => slot.day === 'Wed')
  // const thursdaySlots = slots.filter(slot => slot.day === 'Thu')
  // const fridaySlots = slots.filter(slot => slot.day === 'Fri')
  // const saturdaySlots = slots.filter(slot => slot.day === 'Sat')
  // const sundaySlots = slots.filter(slot => slot.day === 'Sun')

  // const days = [mondaySlots, tuesdaySlots, wednesdaySlots, thursdaySlots, fridaySlots, saturdaySlots, sundaySlots]

  // const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // function getSlots(time) {
  //     let result: any[] = []

  //     for (let i = 0; i < daysOfWeek.length; i++) {
  //         const slotToPush = slots.filter(slot => slot.day === daysOfWeek[i] && slot.time === time)
  //         result.push(slotToPush[0])
  //     }

  //     return result
  // }

  // const nineSlots = getSlots('09:00 - 09:45')
  // const tenSlots = getSlots('10:00 - 10:45')
  // const elevenSlots = getSlots('11:00 - 11:45')
  // const twevleSlots = getSlots('12:00 - 12:45')
  // const oneSlots = getSlots('13:00 - 13:45')
  // const twoSLots = getSlots('14:00 - 14:45')
  // const threeSlots = getSlots('15:00 - 15:45')
  // const fourSlots = getSlots('16:00 - 16:45')
  // const fiveSlots = getSlots('17:00 - 17:45')

  // const timeSlots = [nineSlots, tenSlots, elevenSlots, twevleSlots, oneSlots, twoSLots, threeSlots, fourSlots, fiveSlots]

  // function getId() {
  //     return Math.random() * 1000
  // }

  return (
    <div className={styles.container}>
      {/* <Modal
        className={styles.confirm}
        isOpened={bookConfirmationShow}
        onClose={() => setBookConfirmationShow(false)}
      >
        <Confirm />
      </Modal> */}
      {/* <table>
                <tr>
                    <th>Время</th>
                    {days.map(day => (
                        <th key={getId()}>{formatRussianDate(day[0]?.date)}</th>
                    ))}
                </tr>
                {timeSlots.map((timeSlot) => (
                    <tr key={getId()}>
                        <td key={getId()}>
                            {timeSlot[0].time}
                        </td>
                        {timeSlot.map(slot => <td key={getId()} className={
                            classNames(
                                styles.book,
                                { [styles.free]: slot.status === 'free', [styles.booked]: slot.status !== 'free' })}
                            onClick={() => setBookConfirmationShow(true)}
                        >
                            {slot.status === 'free' ? 'Забронировать' : 'Занято'}
                        </td>
                        )
                        }
                    </tr>
                ))}
            </table> */}
    </div>
  );
}
