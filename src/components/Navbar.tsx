"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { LogOut } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "@tanstack/react-query";
import { isUserSubscribed } from "@/app/premium/actions";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/#pricing",
		label: "Pricing",
	},
	{
		href: "/#testimonials",
		label: "Testimonials",
	},
];

export const Navbar = () => {
	const { isAuthenticated } = useKindeBrowserClient();

	const { data } = useQuery({
		queryKey: ["isUserSubscribed"],
		queryFn: async () => isUserSubscribed(),
	});

	const isSubscribed = data?.subscribed;

	return (
		<header
			className="sticky border-b-[1px] top-0 z-40 w-full  dark:border-b-slate-700 overflow-x-hidden
			bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
		"
		>
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container min-h-14 w-screen flex justify-between ">
					<NavigationMenuItem className="font-bold md:flex hidden">
						<a
							rel="noreferrer noopener"
							href="/"
							className="ml-2 font-bold text-xl flex"
						>
							<span className="uppercase bg-gradient-to-r from-[#3ac2be] to-[#58a0f8] text-transparent bg-clip-text">
								🐋 Marine Animals
							</span>
						</a>
					</NavigationMenuItem>

					<nav className="flex flex-col md:flex-row gap-2">
						{/* Centralized links container */}
						<div className="flex flex-wrap justify-center md:justify-start mr-10">
							{routeList.map((route: RouteProps, i) => (
								<Link
									rel="noreferrer noopener"
									href={route.href}
									key={i}
									className={`text-[12px] md:text-[14px] ${buttonVariants({
										variant: "ghost",
									})}`}
								>
									{route.label}
								</Link>
							))}

							{isAuthenticated && (
								<Link
									rel="noreferrer noopener"
									href="/free"
									className={`text-[12px] md:text-[14px] ${buttonVariants({
										variant: "ghost",
									})}`}
								>
									Free Content
								</Link>
							)}
						</div>

						{/* Fixed links for authentication and premium user */}
						<div className="flex gap-2 md:gap-4">
							{isAuthenticated && (
								<Link
									rel="noreferrer noopener"
									href="/api/auth/logout"
									className={`border ${buttonVariants({
										variant: "secondary",
									})} text-[12px] md:text-[14px]`}
								>
									Logout
									<LogOut className="w-4 h-4 ml-2" />
								</Link>
							)}

							{!isAuthenticated && (
								<Link
									rel="noreferrer noopener"
									href="/api/auth/login"
									className={`border ${buttonVariants({
										variant: "secondary",
									})} text-[12px] md:text-[14px]`}
								>
									Login
								</Link>
							)}

							{isAuthenticated && isSubscribed && (
								<Link
									rel="noreferrer noopener"
									href="/premium"
									className={`border bg-gradient-to-r from-[#66ea90] to-[#4b76a2] text-white ${buttonVariants(
										{
											variant: "secondary",
										}
									)} text-[12px] md:text-[14px]`}
								>
									Premium User 🌟
								</Link>
							)}
						</div>

						<ModeToggle />
					</nav>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
