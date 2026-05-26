import React from "react";
import { motion } from "framer-motion";

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

const slideInRightVariants = {
	hidden: { opacity: 0, x: 30 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const ContactSection: React.FC = () => {
	return (
		<section
			className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
			id="contacto"
		>
			<div className="max-w-[1200px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					{/* Left Column - Contact Info */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="flex flex-col"
					>
						<motion.div variants={itemVariants} className="mb-12">
							<h3 className="text-vermelho tracking-[0.2em] uppercase text-sm font-semibold mb-4">
								FALE CONNOSCO
							</h3>
							<div className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none mb-4">
								<span className="text-white">VAMOS </span>
								<span className="text-amarelo">CRIAR</span>
							</div>
							<div className="h-1 w-[80px] bg-vermelho mt-4"></div>
						</motion.div>

						<div className="space-y-6 mb-16">
							{/* Contact Items */}
							<motion.div variants={itemVariants} className="flex items-start gap-4">
								<div className="w-12 h-12 shrink-0 border border-[#222] flex items-center justify-center text-vermelho text-xl">
									<div className="w-2 h-2 rounded-full bg-vermelho"></div>
								</div>
								<div className="flex flex-col pt-1">
									<span className="text-[#6b6b6b] text-[11px] tracking-[0.2em] uppercase font-semibold mb-1">
										LOCALIZAÇÃO
									</span>
									<span className="text-[#cccccc] text-sm md:text-base">
										Luanda, Angola
									</span>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="flex items-start gap-4">
								<div className="w-12 h-12 shrink-0 border border-[#222] flex items-center justify-center text-vermelho font-semibold text-lg">
									@
								</div>
								<div className="flex flex-col pt-1">
									<span className="text-[#6b6b6b] text-[11px] tracking-[0.2em] uppercase font-semibold mb-1">
										EMAIL
									</span>
									<span className="text-[#cccccc] text-sm md:text-base">
										geral@mediaguideagency.com
									</span>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="flex items-start gap-4">
								<div className="w-12 h-12 shrink-0 border border-[#222] flex items-center justify-center text-vermelho font-semibold text-lg">
									T
								</div>
								<div className="flex flex-col pt-1">
									<span className="text-[#6b6b6b] text-[11px] tracking-[0.2em] uppercase font-semibold mb-1">
										TELEFONE
									</span>
									<span className="text-[#cccccc] text-sm md:text-base">
										+244 900 000 000
									</span>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="flex items-start gap-4">
								<div className="w-12 h-12 shrink-0 border border-[#222] flex items-center justify-center text-vermelho font-semibold text-lg">
									W
								</div>
								<div className="flex flex-col pt-1">
									<span className="text-[#6b6b6b] text-[11px] tracking-[0.2em] uppercase font-semibold mb-1">
										WEBSITE
									</span>
									<span className="text-[#cccccc] text-sm md:text-base">
										www.mediaguideagency.com
									</span>
								</div>
							</motion.div>
						</div>

						{/* Social Networks */}
						<motion.div variants={itemVariants}>
							<h4 className="text-vermelho tracking-[0.2em] uppercase text-sm font-semibold mb-6">
								REDES SOCIAIS
							</h4>
							<div className="flex gap-4">
								{["FB", "IG", "LI", "YT"].map((social) => (
									<a
										key={social}
										href={`#${social.toLowerCase()}`}
										className="w-12 h-12 border border-[#222] flex items-center justify-center text-[#aaaaaa] text-xs font-semibold hover:border-white hover:text-white transition-all duration-300"
									>
										{social}
									</a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column - Project Banner & Values */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="flex flex-col lg:pt-2"
					>
						{/* Project Call to Action */}
						<motion.div
							variants={slideInRightVariants}
							className="bg-vermelho p-10 md:p-14 mb-8"
						>
							<h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
								TEM UM PROJECTO?
							</h3>
							<p className="text-[#f2f2f2] text-sm md:text-base leading-relaxed mb-10 max-w-sm">
								Transformamos a sua visão em realidade. Somos especialistas em criar
								campanhãs que comunicam, convencem e convertem.
							</p>
							<a
								href="#contacto"
								className="text-amarelo font-bold tracking-[0.15em] text-sm hover:text-white transition-colors duration-300"
							>
								www.mediaguideagency.com
							</a>
						</motion.div>

						{/* Values List */}
						<motion.div
							variants={slideInRightVariants}
							className="border border-[#1a1a1a] bg-[#0c0c0c] p-10 md:p-12"
						>
							<h4 className="text-vermelho tracking-[0.2em] uppercase text-sm font-semibold mb-8">
								OS NOSSOS VALORES
							</h4>
							<ul className="space-y-4">
								{[
									"Criatividade sem limites",
									"Resultados mensuráveis",
									"Compromisso com o cliente",
									"Inovação constante",
									"Excelência em cada projecto",
								].map((value, idx) => (
									<li
										key={idx}
										className="flex items-center text-[#888888] text-sm md:text-base"
									>
										<span className="text-[#888888] mr-4 text-xs">✓</span>
										{value}
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
