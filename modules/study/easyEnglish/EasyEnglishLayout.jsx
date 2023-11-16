import Header from "@/modules/shared/Header/index.jsx"
import EasyEnglishNav from "./shared/EasyEnglishNav.jsx"

export default function EasyEnglishLayout({ lessonNumber }) {

    return <>
        <EasyEnglishNav lessonNumber={lessonNumber} />
    </>
}