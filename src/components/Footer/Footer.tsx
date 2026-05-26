import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-6 md:py-8 px-6 md:px-12 lg:px-24">
			<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
				{/* Left side: Logo & Location */}
				<div className="flex items-center gap-6">
					{/* Small Stacked Logo */}
					<div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
						<img
							src={`/images/logo/Camada 7.png`}
							alt="Logo"
							className="absolute inset-0 w-full h-full object-contain"
						/>
					</div>

					{/* Brand & Location Text */}
					<div className="text-[#4a4a4a] text-[9px] md:text-[11px] font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase">
						MEDIA GUIDE AGENCY &nbsp;&middot;&nbsp; LUANDA, ANGOLA
					</div>
				</div>

				{/* Right side: Copyright */}
				<div className="flex items-center text-center md:text-right">
					<p className="text-[#4a4a4a] text-[10px] md:text-xs tracking-wider">
						&copy; 2018 - {new Date().getFullYear()} Media Guide Agency
						&nbsp;&middot;&nbsp; Todos os direitos reservados
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
