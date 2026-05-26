import React from "react";
import { portfolioData } from "./data";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioSection: React.FC = () => {
	return (
		<section className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
			{/* Header */}
			<div className="mb-16 md:mb-24">
				<span className="text-vermelho font-sans font-semibold tracking-[0.2em] text-sm uppercase block mb-3">
					OS NOSSOS TRABALHOS
				</span>
				<h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide flex flex-wrap">
					<span className="relative">
						PORT
						<span className="absolute -bottom-2 md:-bottom-4 left-0 w-[80%] h-1 md:h-2 bg-vermelho"></span>
					</span>
					<span className="text-amarelo">FOLIO</span>
				</h2>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 bg-[#0a0a0a]">
				{portfolioData.map((project) => (
					<PortfolioItem key={project.id} project={project} />
				))}
				{/* Fill the empty slot in the grid because the last item spans 2 cols on a 3 col grid */}
				<div className="hidden md:block md:col-span-1 border border-[#1a1a1a]"></div>
			</div>
		</section>
	);
};
