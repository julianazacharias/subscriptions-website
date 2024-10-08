import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import PaymentLink from "./PaymentLink";

enum PopularPlanType {
	NO = 0,
	YES = 1,
}

enum BestDealPlanType {
	NO = 0,
	YES = 1,
}

interface PricingProps {
	title: string;
	popular: PopularPlanType;
	deal: BestDealPlanType;
	price: number;
	description: string;
	buttonText: string;
	benefitList: string[];
	href: string;
	billing: string;
	paymentLink?: string;
}

const pricingList: PricingProps[] = [
	{
		title: "Free",
		popular: 0,
		deal: 0,
		price: 0,
		description: "The best introdutory courses on the market",
		buttonText: "Get Started",
		benefitList: [
			"1-month access",
			"10 Engaging Video Courses",
			"20 Downloadable eBooks",
			"50 Practice Exercises",
			"AI-powered learning",
			"Access to a supportive Community",
		],
		href: "/api/auth/login",
		billing: "/month",
	},
	{
		title: "Premium",
		popular: 1,
		deal: 0,
		price: 25,
		description: "Intermediate and advanced courses to become a PRO",
		buttonText: "Get Instant Access",
		benefitList: [
			"Access to 50+ Video Courses",
			"Personalized Learning Paths",
			"100+ Downloadable eBooks",
			"300+ Practice Exercises",
			"AI-powered learning",
			"Priority Support via WhatsApp",
		],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_MONTHLY_PLAN_LINK,
		billing: "/month",
	},
	{
		title: "Annual",
		popular: 0,
		deal: 1,
		price: 250,
		description: "Access with discount and more benefits!",
		buttonText: "Start Your Journey",
		benefitList: [
			"Access to 50+ Video Courses",
			"Personalized Learning Paths",
			"100+ Downloadable eBooks",
			"300+ Practice Exercises",
			"AI-powered learning",
			"Priority Support via WhatsApp and Video Calls",
			"2-Month discount",
		],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_YEARLY_PLAN_LINK,
		billing: "/year",
	},
];

export const Pricing = () => {
	return (
		<section id="pricing" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				Get
				<span className="bg-gradient-to-b from-[#66ea9d] to-[#59b8f3] uppercase text-transparent bg-clip-text">
					{" "}
					Premium{" "}
				</span>
				Access today!
			</h2>
			<h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
				Lean everything about the cutest animals in the world!
			</h3>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={
							pricing.popular === PopularPlanType.YES ||
							pricing.deal === BestDealPlanType.YES
								? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
								: ""
						}
					>
						<CardHeader>
							<CardTitle className="flex item-center justify-between">
								{pricing.title}
								{pricing.popular === PopularPlanType.YES ? (
									<Badge variant="secondary" className="text-sm text-primary">
										Most popular
									</Badge>
								) : null}
								{pricing.deal === BestDealPlanType.YES ? (
									<Badge variant="secondary" className="text-sm text-primary">
										Best deal
									</Badge>
								) : null}
							</CardTitle>
							<div>
								<span className="text-3xl font-bold">${pricing.price}</span>
								<span className="text-muted-foreground">
									{" "}
									{pricing.billing}
								</span>
							</div>

							<CardDescription>{pricing.description}</CardDescription>
						</CardHeader>

						<CardContent>
							<PaymentLink
								href={pricing.href}
								text={pricing.buttonText}
								paymentLink={pricing.paymentLink}
							/>
						</CardContent>

						<hr className="w-4/5 m-auto mb-4" />

						<CardFooter className="flex">
							<div className="space-y-4">
								{pricing.benefitList.map((benefit: string) => (
									<span key={benefit} className="flex">
										<Check className="text-cyan-500" />{" "}
										<h3 className="ml-2">{benefit}</h3>
									</span>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
