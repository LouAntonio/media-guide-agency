import React from "react";
import { portfolioData } from "./data";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioSection: React.FC = () => {
	return (
		<section className="bg-[#0a0a0a] py-20 px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto">
			{/* Header */}
			<div className="mb-16">
				<p className="text-sm font-sans tracking-[0.25em] text-[#d40000] uppercase font-bold mb-2">
					OS NOSSOS TRABALHOS
				</p>
				<h2 className="font-hero text-5xl md:text-6xl font-black tracking-tight text-white inline-block mb-4">
					PORTFOLIO<span className="text-[#ffc20e]">.</span>
				</h2>
				<div className="w-16 h-1 bg-[--color-vermelho]" />
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
