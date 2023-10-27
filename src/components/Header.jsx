import React from "react";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
	return (
		<div className="w-full">
			<div className="container bg-white relative flex justify-between lg:justify-center items-center py-5">
				<div className="w-[140px] xl:w-[190px] relative">
					<a
						href="/"
						className="link absolute top-0 left-0 right-0 bottom-0"
					></a>
					<picture>
						<img
							src={Logo}
							alt="Logo Global fermetures"
							title=""
							loading="lazy"
							className="img object-center"
							style={{
								width: "190px",
								height: "50px",
								objectFit: "contain",
							}}
						/>
					</picture>
				</div>
				<a
					href="/"
					className="link font-semibold text-base gap-1 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 hover:text-brand-01 transition-color lg:pr-5"
				>
					<FontAwesomeIcon
						icon="fa-solid fa-xmark text-lg"
						className="icon icon--sm"
					></FontAwesomeIcon>
					Quitter
				</a>
			</div>
		</div>
	);
}

export default Header;
