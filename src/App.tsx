import AboutSection from "./components/About";
import { ServicesSection } from "./components/Services";
import { PortfolioSection } from "./components/Portfolio";

function App() {
	const logoLayers = [1, 2, 5, 6, 7];

	return (
		<main className="bg-[#0a0a0a]">
			<div className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-16">
				<div className="max-w-[1200px]">
					{/* Header - Logo and Brand Name */}
					<header className="flex items-center gap-6 mb-16">
						{/* Stacked Logo */}
						<div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
							{logoLayers.map((layer) => (
								<img
									key={layer}
									src={`/images/logo/Camada ${layer}.png`}
									alt={`Logo layer ${layer}`}
									className="absolute inset-0 w-full h-full object-contain"
								/>
							))}
						</div>

						<div className="flex flex-col justify-center gap-1.5 mt-[-10px]">
							<h2 className="text-amarelo font-bold tracking-[0.3em] md:tracking-[0.4em] text-sm md:text-xl">
								MEDIA GUIDE AGENCY
							</h2>
							<p className="text-[#6b6b6b] text-[10px] md:text-[13px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-semibold">
								BRANDING &middot; DESIGN &middot; MARKETING &middot; AUDIOVISUAL
							</p>
						</div>
					</header>

					{/* Location Badge */}
					<div className="border-[1.5px] border-vermelho px-8 py-2 md:py-3 w-max text-vermelho text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-10 md:mb-12">
						Angola &middot; Est. 2018
					</div>

					{/* Hero Title */}
					<div className="font-hero flex flex-col font-bold uppercase tracking-tighter text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] leading-[0.85] mb-8">
						<div className="text-vermelho">Media</div>
						<div className="text-amarelo mt-[-0.05em]">Guide</div>
						<div className="text-white mt-[-0.05em]">Agency</div>
					</div>

					{/* Tagline */}
					<div className="text-[#555555] text-sm md:text-lg tracking-[0.35em] uppercase font-semibold mt-8 mb-20 md:mb-24">
						Criatividade Com Resultados
					</div>

					{/* Statistics Footer */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24 w-max">
						{/* Stat 1 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-5xl md:text-7xl font-bold mb-2 md:mb-4">
								100+
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Clientes
							</span>
						</div>
						{/* Stat 2 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-5xl md:text-7xl font-bold mb-2 md:mb-4">
								7
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Anos
							</span>
						</div>
						{/* Stat 3 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-5xl md:text-7xl font-bold mb-2 md:mb-4">
								200+
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Projectos
							</span>
						</div>
						{/* Stat 4 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-5xl md:text-7xl font-bold mb-2 md:mb-4">
								360&deg;
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Soluções
							</span>
						</div>
					</div>
				</div>
			</div>
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
		</main>
	);
}

export default App;
