import { useState } from "react"
import { setNavRoutes } from "../navRoutes"
import { useRouter } from "next/router"
import styles from './EasyEnglishNav.module.scss'
import classNames from "classnames"

export default function EasyEnglishNav({ lessonNumber }) {
    const [navItemsOpened, setNavItemsOpened] = useState([])
    const router = useRouter()

    const toggleNavItemHandler = (id) => {

        if (navItemsOpened.includes(id)) {
            setNavItemsOpened(navItemsOpened.filter(item => id !== item))
        } else {
            setNavItemsOpened([...navItemsOpened, id])
        }
    }

    const navItems = setNavRoutes()

    return (<div>
        <ul>
            {navItems.map(topic => (
                <div key={topic.id} className={styles.navContainer}>
                    <li onClick={() => toggleNavItemHandler(topic.id)} key={topic.id} className={styles.title}>{topic.title}</li>
                    <div>
                        {topic.children.map(item => (
                            <li
                                key={item.title}
                                className={
                                    classNames(
                                        { [styles.activeLink]: router.asPath === `${item.route}` },
                                        { [styles.shown]: lessonNumber === `${topic.id}` },
                                        { [styles.shown]: navItemsOpened.includes(topic.id) },
                                        styles.hidden
                                    )}
                                onClick={() => router.push(item.route)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </div>
                </div>
            )
            )}
        </ul>
    </div>
    )
}
