import { useState } from "react";
import { setNavRoutes } from "../navRoutes";
import { useRouter } from "next/router";
import styles from "./EverydayEnglishNav.module.scss";
import classNames from "classnames";
import PhrasesIcon from "public/icons/phrases-icon.svg";
import CardsIcon from "public/icons/cards-icon.svg";
import DialogueIcon from "public/icons/dialog-icon.svg";
import BricksIcon from "public/icons/bricks-icon.svg";
import SpeakingIcon from "public/icons/speaking-icon.svg";

const navItems = setNavRoutes();

const getIcons = (id: string, color: string) => {
  const ICONS = {
    phrases: <PhrasesIcon color={color} />,
    cards: <CardsIcon color={color} />,
    dialogue: <DialogueIcon color={color} />,
    bricks: <BricksIcon color={color} />,
    speaking: <SpeakingIcon color={color} />,
  };

  return ICONS[id];
};

type Props = {
  lessonNumber: number;
};

export default function EverydayEnglishNav({ lessonNumber }: Props) {
  const [navItemsOpened, setNavItemsOpened] = useState<number[]>([]);
  const router = useRouter();

  const toggleNavItemHandler = (id: number) => {
    if (navItemsOpened.includes(id)) {
      setNavItemsOpened(navItemsOpened.filter((item) => id !== item));
    } else {
      setNavItemsOpened([...navItemsOpened, id]);
    }
  };

  return (
    <ul className={styles.lessonsListContainer}>
      {navItems.map((topic) => (
        <div key={topic.id} className={styles.navContainer}>
          <li
            onClick={() => toggleNavItemHandler(topic.id)}
            key={topic.id}
            className={styles.title}
          >
            {topic.title}
          </li>
          <div className={styles.navItems}>
            {topic.children.map((item) => (
              <li
                key={item.title}
                className={classNames({
                  [styles.activeLink]: router.asPath === `${item.route}`,
                })}
                onClick={() => router.push(item.route)}
              >
                {getIcons(
                  item?.id,
                  router.asPath === `${item.route}` ? "#FCFCFC" : "#0D0D0D"
                )}

                {item?.title}
              </li>
            ))}
          </div>
        </div>
      ))}
    </ul>
  );
}
