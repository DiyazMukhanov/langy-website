import { useEffect, useState } from "react";
import styles from "./InstallButton.module.scss";

export default function InstallButton() {
    const [installPromptEvent, setInstallPromptEvent] = useState(null);
    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setInstallPromptEvent(event);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, [])

    const installApp = () => {
        if (installPromptEvent) {
            installPromptEvent.prompt();
            installPromptEvent.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setInstallPromptEvent(null);
            });
        }
    };

    return (<button
        id="install-button"
        className={styles.installBtn}
        style={{ display: installPromptEvent ? 'block' : 'none' }}
        onClick={installApp}
    >
        Установить приложение
    </button>)
}