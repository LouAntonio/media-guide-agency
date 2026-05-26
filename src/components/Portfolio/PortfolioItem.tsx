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
						"h-1 w-12 mb-6",
						project.lineColor === "vermelho"
							? "bg-[--color-vermelho]"
							: "bg-[--color-amarelo]",
					)}
				/>
				<p className="text-[10px] md:text-xs tracking-[0.2em] text-[#b3b3b3] uppercase font-bold mb-3 font-sans">
					{project.type}
				</p>
				<h3 className="font-hero text-lg md:text-xl leading-tight font-semibold tracking-wide whitespace-pre-line text-white">
					{project.title}
				</h3>
			</div>

			<div className="mt-12 text-[#666666] text-xs font-medium font-sans">{project.year}</div>
		</div>
	);
};
