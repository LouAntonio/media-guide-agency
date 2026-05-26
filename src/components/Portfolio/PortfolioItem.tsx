import React from "react";
import type { PortfolioProject } from "./data";
import clsx from "clsx";

interface PortfolioItemProps {
	project: PortfolioProject;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
	return (
		<div
			className={clsx(
				"p-8 md:p-10 border border-[#1a1a1a] flex flex-col justify-between hover:bg-[#111111] transition-colors duration-300",
				project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
			)}
		>
			<div>
				<div
					className={clsx(
						"h-[3px] w-8 mb-4",
						project.lineColor === "vermelho" ? "bg-vermelho" : "bg-amarelo",
					)}
				/>
				<p className="text-[10px] md:text-xs tracking-[0.2em] text-amarelo uppercase font-semibold mb-3 font-sans">
					{project.type}
				</p>
				<h3 className="font-sans text-base md:text-lg leading-snug font-bold tracking-wide whitespace-pre-line text-white/90">
					{project.title}
				</h3>
			</div>

			<div className="mt-8 text-[#444] text-[11px] md:text-xs font-semibold font-sans">
				{project.year}
			</div>
		</div>
	);
};
