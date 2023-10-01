"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark');

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.theme = 'light'
        }
    }, [isDarkMode])

    return <button className="w-8 h-8 flex items-center justify-center dark:text-stone-200 text-stone-600 rounded-lg dark:hover:text-stone-900 dark:hover:bg-stone-200 hover:text-stone-200 hover:bg-stone-600 transition-colors" onClick={() => {
        setIsDarkMode(!isDarkMode)
    }}>
        <FontAwesomeIcon icon={faMoon} />
    </button>
}

export default DarkModeToggle
