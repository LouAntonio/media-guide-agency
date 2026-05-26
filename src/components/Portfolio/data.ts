export interface PortfolioProject {
	id: string;
	type: string;
	title: string;
	year: string;
	lineColor: "vermelho" | "amarelo";
	colSpan: 1 | 2;
}

export const portfolioData: PortfolioProject[] = [
	{
		id: "campanha-2024",
		type: "AUDIOVISUAL · ACTIVAÇÃO",
		title: "CAMPANHA NACIONAL 2024\n— PRODUÇÃO COMPLETA",
		year: "2024",
		lineColor: "vermelho",
		colSpan: 2,
	},
	{
		id: "novatech",
		type: "BRANDING",
		title: "IDENTIDADE VISUAL\nNOVATECH",
		year: "2024",
		lineColor: "amarelo",
		colSpan: 1,
	},
	{
		id: "banco-sol",
		type: "SOCIAL MEDIA",
		title: "GESTÃO DIGITAL BANCO\nSOL",
		year: "2023",
		lineColor: "vermelho",
		colSpan: 1,
	},
	{
		id: "finibanco",
		type: "VÍDEO INSTITUCIONAL",
		title: "ANIVERSÁRIO 10 ANOS\nFINIBANCO",
		year: "2023",
		lineColor: "amarelo",
		colSpan: 1,
	},
	{
		id: "cuca",
		type: "ACTIVAÇÃO DE MARCA",
		title: "RE-LAUNCH BRAND CUCA",
		year: "2023",
		lineColor: "vermelho",
		colSpan: 1,
	},
	{
		id: "festival-juventude",
		type: "EVENTO",
		title: "FESTIVAL DA JUVENTUDE\n2023",
		year: "2023",
		lineColor: "amarelo",
		colSpan: 1,
	},
	{
		id: "unitel",
		type: "PUBLICIDADE TV",
		title: "SPOT PUBLICITÁRIO UNITEL",
		year: "2022",
		lineColor: "vermelho",
		colSpan: 1,
	},
	{
		id: "taag",
		type: "DESIGN EDITORIAL",
		title: "CATÁLOGO INSTITUCIONAL\nTAAG",
		year: "2022",
		lineColor: "amarelo",
		colSpan: 1,
	},
	{
		id: "multicaixa",
		type: "CAMPANHA DIGITAL · PERFORMANCE",
		title: "LANÇAMENTO APP MULTICAIXA EXPRESS - ESTRATÉGIA 360º",
		year: "2022",
		lineColor: "vermelho",
		colSpan: 2,
	},
];
