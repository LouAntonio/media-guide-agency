import AboutSection from "./components/About";
import { ServicesSection } from "./components/Services";
import { PortfolioSection } from "./components/Portfolio";
import { ContactSection } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
	const logoLayers = [1, 2, 5, 6, 7];

	return (
		<main className="bg-[#0a0a0a]">
			<div className="min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-32 py-8 md:py-10">
				<div className="max-w-[1200px] w-full">
					{/* Header - Logo and Brand Name */}
					<header className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
						{/* Stacked Logo */}
						<div className="relative w-14 h-14 md:w-20 md:h-20 shrink-0">
							{logoLayers.map((layer) => (
								<img
									key={layer}
									src={`/images/logo/Camada ${7}.png`}
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
					<div className="border-[1.5px] border-vermelho px-6 py-1.5 md:py-2 w-max text-vermelho text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-5 md:mb-6">
						Angola &middot; Est. 2018
					</div>

					{/* Hero Title */}
					<div className="font-hero flex flex-col font-bold uppercase tracking-tighter text-[3.75rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] leading-[0.85] mb-3 md:mb-4">
						<div className="text-vermelho">Media</div>
						<div className="text-amarelo mt-[-0.05em]">Guide</div>
						<div className="text-white mt-[-0.05em]">Agency</div>
					</div>

					{/* Tagline */}
					<div className="text-[#555555] text-[10px] md:text-sm tracking-[0.35em] uppercase font-semibold mt-3 md:mt-4 mb-6 md:mb-8">
						Criatividade Com Resultados
					</div>

					{/* Statistics Footer */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-14 w-max">
						{/* Stat 1 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
								100+
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Clientes
							</span>
						</div>
						{/* Stat 2 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
								7
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Anos
							</span>
						</div>
						{/* Stat 3 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
								200+
							</span>
							<span className="text-[#6b6b6b] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-semibold">
								Projectos
							</span>
						</div>
						{/* Stat 4 */}
						<div className="flex flex-col">
							<span className="text-amarelo font-hero text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
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
			<ContactSection />
			<Footer />
		</main>
	);
}

export default App;
