"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
	const [showNavModal, setShowNavModal] = useState(false);
	const [commonLoader, setCommonLoader] = useState(false);
	const [isAuthUser, setIsAuthUser] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (Cookies.get("token") !== undefined) {
			setIsAuthUser(true);
			const userData = JSON.parse(localStorage.getItem("user")) || {};
			setUser(userData);
		} else {
			setIsAuthUser(false);
			setUser({});
		}
	}, [Cookies]);

	return (
		<GlobalContext.Provider
			value={{ showNavModal, setShowNavModal, commonLoader, setCommonLoader, isAuthUser, setIsAuthUser, user, setUser }}
		>
			{children}
		</GlobalContext.Provider>
	);
}
