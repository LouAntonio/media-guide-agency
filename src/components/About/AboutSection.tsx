import React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

const timelineData = [
	{
		year: "2018",
		description:
			"Fundação em Luanda. Início com foco em design gráfico e gestão de redes sociais.",
	},
	{
		year: "2019",
		description:
			"Expansão para produção audiovisual. Primeiras campanhas publicitárias para clientes nacionais.",
	},
	{
		year: "2020",
		description:
			"50 clientes atingidos. Lançamento do departamento de activações e eventos ao vivo.",
	},
	{
		year: "2022",
		description:
			"Consolidação como referência em marketing digital em Angola. 75+ clientes na carteira.",
	},
	{
		year: "2024",
		description: "Marco de 100+ clientes. Rebranding e expansão para mercados internacionais.",
	},
	{
		year: "2025",
		description:
			"Novos horizontes: IA aplicada ao marketing e soluções criativas de próxima geração.",
	},
];

const statsData = [
	{ count: 100, suffix: "+", label: "CLIENTES", colorClass: "text-vermelho" },
	{ count: 7, suffix: "", label: "ANOS DE\nEXPERIÊNCIA", colorClass: "text-amarelo" },
	{ count: 200, suffix: "+", label: "PROJECTOS", colorClass: "text-vermelho" },
	{ count: 360, suffix: "º", label: "SOLUÇÕES\nINTEGRADAS", colorClass: "text-amarelo" },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
} as const;

const timelineVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const AboutSection: React.FC = () => {
	return (
		<section
			className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
			id="sobre"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="mb-16 md:mb-24"
				>
					<span className="text-vermelho font-sans font-semibold tracking-[0.2em] text-sm uppercase block mb-3">
						A NOSSA HISTÓRIA
					</span>
					<h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide flex flex-wrap gap-x-4">
						<span className="relative">
							QUEM
							<span className="absolute -bottom-2 md:-bottom-4 left-0 w-[80%] h-1 md:h-2 bg-vermelho"></span>
						</span>
						<span className="text-amarelo">SOMOS</span>
					</h2>
				</motion.div>

				{/* Content Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					{/* Left Column: Text & Stats */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="flex flex-col gap-10"
					>
						<div className="prose prose-invert max-w-none text-cinza-claro font-sans text-base md:text-lg leading-relaxed flex flex-col gap-6">
							<motion.p variants={itemVariants}>
								Nascemos em 2018 com uma visão clara: transformar a forma como as
								marcas angolanas comunicam com o mundo. Somos uma agência criativa e
								estratégica especializada em marketing digital, publicidade e
								comunicação 360º.
							</motion.p>
							<motion.p variants={itemVariants}>
								Em 7 anos de actividade, já servimos mais de 100 clientes dos mais
								variados sectores - de startups a grandes corporações - sempre com o
								mesmo compromisso:{" "}
								<strong className="font-semibold text-amarelo">
									criatividade com resultados.
								</strong>
							</motion.p>
							<motion.p variants={itemVariants}>
								A nossa equipa multidisciplinar combina estratégia, criatividade e
								tecnologia para entregar campanhas que deixam marca. Cada projeto é
								tratado como único, com dedicação total ao sucesso do cliente.
							</motion.p>
						</div>

						{/* Stats Grid */}
						<motion.div
							variants={containerVariants}
							className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
						>
							{statsData.map((stat, idx) => (
								<motion.div
									key={idx}
									variants={itemVariants}
									className="bg-[#111] border border-vermelho/20 p-8 flex flex-col justify-center
                             hover:border-vermelho/50 transition-colors duration-500 rounded-none group relative overflow-hidden"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-vermelho/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<h3
										className={`font-display text-5xl md:text-6xl font-bold mb-4 flex items-center ${stat.colorClass}`}
									>
										<Counter
											from={0}
											to={stat.count}
											duration={2.5 + idx * 0.2}
											suffix={stat.suffix}
										/>
									</h3>
									<p className="font-sans text-xs md:text-sm tracking-[0.2em] text-[#888] font-medium uppercase whitespace-pre-line">
										{stat.label}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Right Column: Timeline */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative lg:pl-10"
					>
						<span className="text-vermelho font-sans font-semibold tracking-[0.2em] text-sm uppercase block mb-12">
							CRONOLOGIA
						</span>

						<div className="relative border-l-2 border-vermelho/30 ml-2 md:ml-3">
							{/* Animated red line fill */}
							<motion.div
								className="absolute top-0 left-[-2px] bottom-0 w-[2px] bg-vermelho origin-top"
								initial={{ scaleY: 0 }}
								whileInView={{ scaleY: 1 }}
								viewport={{ once: true, margin: "-10%" }}
								transition={{ duration: 1.5, ease: "easeInOut" }}
							/>

							<div className="flex flex-col gap-10 lg:gap-14">
								{timelineData.map((item, idx) => (
									<motion.div
										key={item.year}
										variants={timelineVariants}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, margin: "-10%" }}
										transition={{ delay: idx * 0.15 }}
										className="relative pl-8 md:pl-12 group"
									>
										{/* Red dot */}
										<motion.div
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{
												delay: 0.3 + idx * 0.15,
												type: "spring",
												stiffness: 200,
											}}
											className="absolute w-4 h-4 rounded-full bg-vermelho left-[-9px] top-1.5 shadow-[0_0_10px_rgba(212,0,0,0.5)] z-10"
										/>

										<h4 className="font-display text-vermelho text-xl md:text-2xl font-bold tracking-widest mb-3">
											{item.year}
										</h4>
										<p className="font-sans text-cinza-claro/80 text-sm md:text-base leading-relaxed">
											{item.description}
										</p>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
