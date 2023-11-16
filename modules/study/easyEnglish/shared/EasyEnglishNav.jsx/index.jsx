import { useState } from "react"
import { setNavRoutes } from "../navRoutes"
import { useRouter } from "next/router"
import styles from './EasyEnglishNav.module.scss'
import classNames from "classnames"

export default function EasyEnglishNav() {
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
                    <li onClick={() => toggleNavItemHandler(topic.id)} key={topic.id}>{topic.title}</li>
                    {topic.children.map(item => (
                        <li
                            key={item.title}
                            className={
                                classNames(
                                    { [styles.activeLink]: router.pathname === `${item.route}` },
                                    { [styles.shown]: navItemsOpened.includes(topic.id) },
                                    styles.hidden
                                )}
                            onClick={() => router.push(item.route)}
                        >
                            {item.title}
                        </li>
                    ))}
                </div>
            )
            )}
        </ul>
    </div>
    )
}
