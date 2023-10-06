"use client";

import { Fragment } from "react";

const isAdminView = false;
const isAuthUser = false;

export default function Navbar() {
	return (
		<>
			<nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<div className="flex items-center cursor-pointer">
						<span className="self-center text-2xl font-semibold whitespace-nowrap">E commercery</span>
					</div>
					<div className="flex md:order-2 gap-2">
						<Fragment>
							<button>Account</button>
						</Fragment>
					</div>
				</div>
			</nav>
		</>
	);
}
