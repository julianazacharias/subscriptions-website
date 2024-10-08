import Marquee from "react-fast-marquee";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
	return (
		<div className="hero-section">
			<section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 ">
				<div className="text-center lg:text-start space-y-6">
					<main className="text-5xl md:text-6xl font-bold text-balance">
						<h1 className="inline">Navigate the magical world of</h1>{" "}
						<h2 className="inline">
							<span className="inline bg-gradient-to-r from-[#66ea9d] to-[#59b8f3] text-transparent bg-clip-text">
								Marine Animals
							</span>{" "}
						</h2>
					</main>
					<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance">
						Uncover the mysteries of ocean life! Discover their habitats and the
						vital conservation initiatives protecting them.
					</p>
					<p className="text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance">
						* Explore the pricing and subscription features of Stripe (in test
						mode). Please remember to use only fake/test data, particularly for
						credit card info, during your exploration.
					</p>
					<div className="space-y-4 md:space-y-0 md:space-x-4">
						<div className="flex items-center">
							<span className="text-base font-bold md:text-xs m-1">
								Made with
							</span>
							<a
								className="m-2 logos--stripe"
								href="https://stripe.com/"
								target="_blank"
							></a>
							<a
								href="https://github.com/julianazacharias/subscriptions-website"
								target="_blank"
								className={`ml-8 w-full md:w-1/3 ${buttonVariants({
									variant: "outline",
								})}`}
							>
								<GitHubLogoIcon className="mr-2 w-5 h-5" />
								Github Repository
							</a>
						</div>

						{/* <a href=''>
						<img src='https://made-with.prisma.io/dark.svg' width={220} height={130} alt='' />
					</a> */}
					</div>
				</div>

				<div className="z-10 overflow-hidden rounded-md">
					<Image
						src="/turtle.jpg"
						width={986}
						height={512}
						alt=""
						className="transition-opacity duration-500 hover:opacity-75"
					/>
				</div>
			</section>
			<div className="flex left-0 right-0 overflow-x-auto">
				<Marquee autoFill>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"
							alt="logo"
						/>
					</div>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
							alt="logo"
						/>
					</div>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"
							alt="logo"
						/>
					</div>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white"
							alt="logo"
						/>
					</div>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/Stripe-008CDD.svg?style=for-the-badge&logo=Stripe&logoColor=white"
							alt="logo"
						/>
					</div>
					{/* <div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white"
							alt="logo"
						/>
					</div>
					<div className="flex items-center gap-1 px-8 py-2">
						<img
							src="https://img.shields.io/badge/Testing%20Library-E33332.svg?style=for-the-badge&logo=Testing-Library&logoColor=white"
							alt="logo"
						/>
					</div> */}
				</Marquee>
			</div>
		</div>
	);
};
