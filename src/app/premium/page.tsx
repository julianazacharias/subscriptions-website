import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const Page = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	if (!user) return redirect("/");

	const userProfile = await prisma.user.findUnique({ where: { id: user.id } });
	if (userProfile?.plan === "free") return redirect("/");

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				<span className="bg-gradient-to-b from-[#66ea9d] to-[#59b8f3] uppercase text-transparent bg-clip-text">
					You are in the Premium Section
				</span>
			</h2>
			<div className="z-10 overflow-hidden rounded-md">
				<Image
					src="/whale.jpg"
					width={986}
					height={512}
					alt="Premium Content"
					className="w-full mt-20 rounded-md transition-opacity duration-300 transform hover:opacity-75 mx-auto"
				/>
			</div>
		</div>
	);
};

export default Page;
