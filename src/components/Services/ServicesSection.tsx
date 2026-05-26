import { motion } from "framer-motion";
import { servicesData } from "./data";

export default function ServicesSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "tween", ease: "easeOut", duration: 0.6 },
		},
	} as const;

	return (
		<section className="bg-[#0a0a0a] text-white py-24 md:py-32 w-full border-t border-white/5 flex flex-col items-center">
			<div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
				{/* Section Header */}
				<div className="mb-20">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-8 h-[2px] bg-amarelo"></div>
						<span className="text-amarelo text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase">
							O que fazemos
						</span>
					</div>
					<h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-2">
						Serviços
					</h2>
				</div>

				{/* Grid Container */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-10%" }}
				>
					{servicesData.map((service, index) => {
						// Logic for the thick bottom border as seen in the reference image
						// We'll apply it globally at the bottom of the grid layout
						const isMobileLast = index === servicesData.length - 1;
						const isTabletLastRow = index >= servicesData.length - 2;
						const isDesktopLastRow = index >= servicesData.length - 3;

						return (
							<motion.div
								key={service.id}
								variants={itemVariants}
								className="group relative flex flex-col p-8 sm:p-10 xl:p-14 
									border-r border-b border-white/5 
									bg-[#0a0a0a] hover:bg-[#111111] overflow-hidden
									transition-colors duration-500 ease-out min-h-[320px] md:min-h-[380px]"
							>
								{/* Number Indicator */}
								<div className="text-amarelo text-sm font-bold tracking-widest mb-10">
									{service.id}
								</div>

								{/* Title */}
								<h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight whitespace-pre-line text-white/90 group-hover:text-white transition-colors duration-300">
									{service.title}
								</h3>

								{/* Description */}
								<p className="text-[#a1a1a1] text-sm leading-relaxed mt-auto max-w-[90%] font-medium">
									{service.description}
								</p>

								{/* The Thick Accent Border at the bottom (Static for Last Row, Hover for others) */}
								<div
									className={`absolute bottom-0 left-0 right-0 bg-amarelo transition-all duration-500 ease-out origin-left
										${isMobileLast ? "max-md:h-[3px] max-md:scale-x-100" : "max-md:h-[2px] max-md:scale-x-0 group-hover:max-md:scale-x-100"}
										${isTabletLastRow ? "md:h-[3px] md:scale-x-100 lg:h-[2px] lg:scale-x-0 group-hover:lg:scale-x-100" : "md:h-[2px] md:scale-x-0 group-hover:md:scale-x-100 lg:h-[2px] lg:scale-x-0 group-hover:lg:scale-x-100"}
										${isDesktopLastRow ? "lg:h-[3px] lg:scale-x-100" : ""}
									`}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
