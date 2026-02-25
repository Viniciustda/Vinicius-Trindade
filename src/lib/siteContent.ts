export type Locale = 'pt' | 'en';

export type Project = {
	title: string;
	description: string;
	tags: string[];
	links?: Array<{ label: string; href: string }>;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	location?: string;
	highlights: string[];
};

export type EducationItem = {
	program: string;
	school: string;
	period: string;
};

export type AwardItem = {
	title: string;
	detail?: string;
	fullText?: string;
	image?: {
		src: string;
		thumbSrc?: string;
		alt: string;
	};
};

export type AchievementGroup = {
	title: string;
	items: AwardItem[];
};

export type ContactLink = {
	label: string;
	href: string;
};

export type PageContent = {
	meta: {
		title: string;
		description: string;
	};
	header: {
		name: string;
		tagline: string;
		summary: string;
		ctaPrimary: { label: string; href: string };
		ctaSecondary: { label: string; href: string };
	};
	sections: {
		nav: Array<{ label: string; href: string }>;
		about: {
			title: string;
			bullets: string[];
		};
		projects: {
			title: string;
			items: Project[];
		};
		experience: {
			title: string;
			items: TimelineItem[];
		};
		education: {
			title: string;
			items: EducationItem[];
		};
		certificates: {
			title: string;
			items: AwardItem[];
		};
		achievements: {
			title: string;
			groups: AchievementGroup[];
		};
		contact: {
			title: string;
			locationLine: string;
			links: ContactLink[];
		};
	};
	languageSwitch: {
		label: string;
		href: string;
	};
	footer: {
		text: string;
	};
};

export const content: Record<Locale, PageContent> = {
	pt: {
		meta: {
			title: 'Vinicius Trindade — Portfólio',
			description:
				'Portfólio bilingue (PT/EN) com projetos, iniciação científica (WiNet/UFMG), experiência, formação e conquistas — Ciência da Computação (UFMG).',
		},
		header: {
			name: 'Vinicius Trindade',
			tagline: 'Ciência da Computação @ UFMG • Segurança • IA • Redes',
			summary:
				'Graduando em Ciência da Computação (UFMG) e pesquisador de Iniciação Científica no Wireless Networks Lab (WiNet/UFMG) e no CCSC Research Lab (UFMG), com foco em segurança, inteligência artificial e redes. Experiência como oficial do Exército Brasileiro (Segundo Tenente): comandei pelotões em rotinas e atividades operacionais e liderei seções administrativas, com atuação por mais tempo no setor financeiro.',
			ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
			ctaSecondary: { label: 'Contato', href: '#contato' },
		},
		sections: {
			nav: [
				{ label: 'Sobre', href: '#sobre' },
				{ label: 'Projetos', href: '#projetos' },
				{ label: 'Experiência', href: '#experiencia' },
				{ label: 'Formação', href: '#formacao' },
				{ label: 'Certificados', href: '#certificados' },
				{ label: 'Conquistas', href: '#conquistas' },
				{ label: 'Contato', href: '#contato' },
			],
			about: {
				title: 'Sobre',
				bullets: [
					'Atuo e estudo nas áreas de cibersegurança, inteligência artificial e redes de computadores, buscando aplicar esses temas em projetos e pesquisa.',
					'Experiência prática com C/C++, Python, SQL e Git/GitHub; familiaridade com desenvolvimento web.',
					'Metodologias: conhecimento de Scrum e Kanban para organização e acompanhamento de trabalho.',
					'Arquitetura: conhecimento de microsserviços, monolítico e MVC.',
					'Tenho interesse em projetos pessoais e, quando possível, desenvolvo iniciativas próprias para consolidar aprendizados e explorar ideias.',
					'Soft skills: liderança, disciplina, organização, responsabilidade, abnegação e trabalho em grupo.',
				],
			},
			projects: {
				title: 'Projetos em destaque',
				items: [
					{
						title: 'Iniciação Científica — Redes de UAVs Resilientes a Ataques Homem do Meio às Informações de Localização',
						description:
							'Pesquisa no Wireless Networks Lab (WiNet/UFMG) e no CCSC Research Lab (UFMG) sobre resiliência a ataques Homem-do-Meio nas informações de localização em redes de UAVs. Trabalho com simulação em ns-3 e avaliação experimental. Esquema proposto: KEYSUAV. Artigo submetido ao SBRC (em avaliação): “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
						tags: ['Pesquisa', 'Redes de UAVs', 'Segurança', 'ns-3', 'CNPq'],
					},
					{
						title: 'Página pessoal (este site)',
						description:
							'Portfólio estático com Astro + Tailwind, pensado para ser rápido, acessível e fácil de manter (GitHub Pages).',
						tags: ['Astro', 'Tailwind', 'GitHub Pages'],
						links: [
							{ label: 'GitHub', href: 'https://github.com/Viniciustda/Vinicius-Trindade' },
						],
					},
					{
						title: 'Animae',
						description:
							'Jogo 2D estilo Metroidvania, desenvolvido individualmente, com foco em conexão com a natureza e reconstrução de um mundo devastado. Em desenvolvimento; link ainda não disponível.',
						tags: ['C++', 'SDL2', 'OpenGL', 'Game Dev', '2D'],
					},
					{
						title: 'Caixinha',
						description:
							'Aplicativo para divisão de despesas em grupo, desenvolvido em dupla. Em desenvolvimento; link ainda não disponível. Arquitetura por componentes: Front-Caixinha (SPA React/Vite, UI/UX e consumo de API), Api-Caixinha (NestJS + TypeScript, Prisma + PostgreSQL, autenticação/autorização e regras de negócio) e Mobile-Caixinha (React Native, UI e consumo da mesma API). Login via Google.',
						tags: ['React', 'Vite', 'React Native', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OAuth'],
					},
				],
			},
			experience: {
				title: 'Experiência',
				items: [
					{
						role: 'Pesquisador de Iniciação Científica (IC)',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Orientação: Prof. Aldri Luiz dos Santos',
						period: 'Out 2024 — Atual (voluntário: Out 2024 — Abr 2025 • bolsista CNPq: Mai 2025 — Atual)',
						highlights: [
							'Projeto: “Redes de UAVs Resilientes a Ataques Homem do Meio às Informações de Localização”.',
							'Pesquisa aplicada em segurança de redes e avaliação por simulação (ns-3.34).',
							'Esquema proposto (produto da pesquisa): KEYSUAV.',
							'Artigo submetido ao SBRC (em avaliação): “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
						],
					},
					{
						role: 'Segundo Tenente',
						org: 'Exército Brasileiro — 4ª Cia Com L Mth',
						period: 'Dez 2021 — Jun 2023',
						highlights: [
							'Comandei pelotões e coordenei prontidão, instrução e emprego operacional.',
							'Liderei seções administrativas (operações, logística e finanças), atuando por mais tempo no setor financeiro.',
							'Atuei como instrutor em cursos e estágios, apoiando a formação de cabos e soldados.',
						],
					},
					{
						role: 'Aluno',
						org: 'CPOR-BH',
						period: 'Fev 2021 — Dez 2021',
						highlights: ['Formação militar e liderança; desempenho acadêmico de destaque.'],
					},
					{
						role: 'Trainee',
						org: 'iJunior UFMG — Empresa Júnior',
						period: 'Ago 2020 — Jan 2021',
						highlights: ['Vivência em projetos, entrega e colaboração em equipe.'],
					},
				],
			},
			education: {
				title: 'Formação',
				items: [
					{
						program: 'Bacharelado em Ciência da Computação',
						school: 'Universidade Federal de Minas Gerais (UFMG)',
						period: '2020 — Atual',
					},
					{
						program: 'Técnico em Edificações',
						school: 'Instituto Federal de Minas Gerais (IFMG)',
						period: '2017 — 2019',
					},
				],
			},
			certificates: {
				title: 'Certificados',
				items: [
					{ title: 'Estágio Setorial de Gestão Financeira', detail: 'Exército Brasileiro' },
					{ title: 'Estágio Setorial para Auxiliar de Setor Financeiro', detail: 'Exército Brasileiro' },
					{ title: 'Estágio Setorial de Gestão de Almoxarifado', detail: 'Exército Brasileiro' },
					{ title: 'Estágio Setorial de Gestão de Estoques', detail: 'Exército Brasileiro' },
					{ title: 'Estágio Básico do Combatente de Montanha', detail: 'Exército Brasileiro' },
					{ title: 'Capacitação em Redes e Telefonia VOIP', detail: 'Exército Brasileiro' },
					{ title: 'Aperfeiçoamento em Cabeamento Estruturado', detail: 'SENAI MG' },
					{ title: 'Aperfeiçoamento em Instalação de Redes Wireless', detail: 'SENAI MG' },
					{ title: 'Aperfeiçoamento em Redes de Computadores', detail: 'SENAI MG' },
				],
			},
			achievements: {
				title: 'Conquistas',
				groups: [
					{
						title: 'Exército Brasileiro',
						items: [
							{ title: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth', detail: '4ª Companhia de Comunicações Leve de Montanha — 2022' },
							{
								title: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth',
								detail: '4ª Companhia de Comunicações Leve de Montanha — 2023',
							},
							{ title: 'Referência elogiosa do Fiscal Administrativo da 4ª Cia Com L Mth', detail: '4ª Companhia de Comunicações Leve de Montanha — 2023' },
							{
								title: 'Prêmio de melhor gestão financeira da 4ª Brigada de Infantaria Leve de Montanha',
								detail: '4ª Companhia de Comunicações Leve de Montanha — 2022',
							},
							{ title: 'Medalha Prêmio Correia Lima', detail: 'CPOR-BH — 2021' },
							{ title: '1º lugar geral', detail: 'CPOR-BH — 2021' },
							{ title: '1º lugar do curso de Comunicações', detail: 'CPOR-BH — 2021' },
							{ title: 'Melhor aptidão física', detail: 'CPOR-BH — 2021' },
							{ title: 'Destaque da Operação FIT (Fibra, Iniciativa e Tenacidade)', detail: 'CPOR-BH — 2021' },
							{ title: 'Assinatura do Livro de Ouro', detail: 'CPOR-BH — 2021' },
						],
					},
				],
			},
			contact: {
				title: 'Contato',
				locationLine: 'Belo Horizonte, Brasil • Disponível para oportunidades no Brasil e no exterior',
				links: [
					{ label: 'Email (UFMG)', href: 'mailto:viniciustda@ufmg.br' },
					{ label: 'Email (pessoal)', href: 'mailto:v.trindade.d.a@gmail.com' },
					{ label: 'LinkedIn', href: 'https://linkedin.com/in/v-trindade' },
					{ label: 'GitHub', href: 'https://github.com/Viniciustda' },
					{ label: 'Lattes', href: 'http://lattes.cnpq.br/3991476030874999' },
				],
			},
		},
		languageSwitch: { label: 'EN', href: '/en/' },
		footer: { text: `© ${new Date().getFullYear()} Vinicius Trindade. All rights reserved.` },
	},
	en: {
		meta: {
			title: 'Vinicius Trindade — Portfolio',
			description:
				'Bilingual (PT/EN) portfolio with projects, undergraduate research (WiNet/UFMG), experience, education and selected achievements — Computer Science (UFMG).',
		},
		header: {
			name: 'Vinicius Trindade',
			tagline: 'Computer Science @ UFMG • Security • AI • Networks',
			summary:
				'Computer Science student (UFMG) and undergraduate researcher at the Wireless Networks Lab (WiNet/UFMG) and the CCSC Research Lab (UFMG), focused on security, AI, and computer networks. Former Brazilian Army officer (Second Lieutenant): commanded platoon-level units in operational routines and led administrative sections, spending more time in the finance section.',
			ctaPrimary: { label: 'View projects', href: '#projects' },
			ctaSecondary: { label: 'Contact', href: '#contact' },
		},
		sections: {
			nav: [
				{ label: 'About', href: '#about' },
				{ label: 'Projects', href: '#projects' },
				{ label: 'Experience', href: '#experience' },
				{ label: 'Education', href: '#education' },
				{ label: 'Certificates', href: '#certificates' },
				{ label: 'Achievements', href: '#achievements' },
				{ label: 'Contact', href: '#contact' },
			],
			about: {
				title: 'About',
				bullets: [
					'I work and study across cybersecurity, AI, and computer networks, aiming to apply these areas in projects and research.',
					'Hands-on experience with C/C++, Python, SQL, and Git/GitHub; familiar with web development.',
					'Methodologies: knowledge of Scrum and Kanban for organizing and tracking work.',
					'Architecture: knowledge of microservices, monolithic applications, and MVC.',
					'I am interested in personal projects and, when possible, I build side initiatives to consolidate learning and explore new ideas.',
					'Soft skills: leadership, discipline, organization, responsibility, selflessness, and teamwork.',
				],
			},
			projects: {
				title: 'Featured projects',
				items: [
					{
						title: 'Undergraduate research — UAV Networks Resilient to Man-in-the-Middle Attacks on Location Information',
						description:
							'Research at the Wireless Networks Lab (WiNet/UFMG) and the CCSC Research Lab (UFMG) on resilience to Man-in-the-Middle attacks targeting location information in UAV networks. Work includes ns-3 simulation and experimental evaluation. Proposed scheme: KEYSUAV. Submitted to SBRC (under review): “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
						tags: ['Undergraduate Research', 'UAV Networks', 'Security', 'ns-3', 'CNPq'],
					},
					{
						title: 'Personal website (this site)',
						description:
							'Static portfolio built with Astro + Tailwind, designed to be fast, accessible, and easy to maintain (GitHub Pages).',
						tags: ['Astro', 'Tailwind', 'GitHub Pages'],
						links: [
							{ label: 'GitHub', href: 'https://github.com/Viniciustda/Vinicius-Trindade' },
						],
					},
					{
						title: 'Animae',
						description:
							'Indie 2D Metroidvania game developed solo, focused on connection with nature and rebuilding a devastated world. In progress; link not available yet.',
						tags: ['C++', 'SDL2', 'OpenGL', 'Game Dev', '2D'],
					},
					{
						title: 'Caixinha',
						description:
							'Group expense-splitting app developed with a partner. In progress; link not available yet. Component-based setup: Front-Caixinha (React/Vite SPA, UI/UX and API consumption), Api-Caixinha (NestJS + TypeScript, Prisma + PostgreSQL, authentication/authorization and business rules), and Mobile-Caixinha (React Native, mobile UI and consumption of the same API). Google login.',
						tags: ['React', 'Vite', 'React Native', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OAuth'],
					},
				],
			},
			experience: {
				title: 'Experience',
				items: [
					{
						role: 'Undergraduate Researcher',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Advisor: Prof. Aldri Luiz dos Santos',
						period: 'Oct 2024 — Present (volunteer: Oct 2024 — Apr 2025 • CNPq scholarship: May 2025 — Present)',
						highlights: [
							'Project: “UAV Networks Resilient to Man-in-the-Middle Attacks on Location Information”.',
							'Applied research in network security with simulation (ns-3.34).',
							'Proposed scheme (research output): KEYSUAV.',
							'Submitted to SBRC (under review): “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
						],
					},
					{
						role: 'Second Lieutenant',
						org: 'Brazilian Army — 4th Light Mountain Signals Company',
						period: 'Dec 2021 — Jun 2023',
						highlights: [
							'Commanded platoon-level teams and coordinated readiness, training, and operational routines.',
							'Led administrative sections across operations, logistics, and finance, spending more time in the finance section.',
							'Delivered instruction in courses and training programs, supporting the development of soldiers and corporals.',
						],
					},
					{
						role: 'Officer Candidate',
						org: 'CPOR-BH',
						period: 'Feb 2021 — Dec 2021',
						highlights: ['Military leadership training; top academic performance.'],
					},
					{
						role: 'Trainee',
						org: 'iJunior UFMG — Junior Enterprise',
						period: 'Aug 2020 — Jan 2021',
						highlights: ['Exposure to project delivery, teamwork, and client-oriented work.'],
					},
				],
			},
			education: {
				title: 'Education',
				items: [
					{
						program: 'B.Sc. in Computer Science',
						school: 'Federal University of Minas Gerais (UFMG)',
						period: '2020 — Present',
					},
					{
						program: 'Technical Degree in Building Construction',
						school: 'Federal Institute of Minas Gerais (IFMG)',
						period: '2017 — 2019',
					},
				],
			},
			certificates: {
				title: 'Certificates',
				items: [
					{ title: 'Sector internship in financial management', detail: 'Brazilian Army' },
					{ title: 'Sector internship for finance assistant', detail: 'Brazilian Army' },
					{ title: 'Sector internship in warehouse management', detail: 'Brazilian Army' },
					{ title: 'Sector internship in stock management', detail: 'Brazilian Army' },
					{ title: 'Basic mountain combatant course', detail: 'Brazilian Army' },
					{ title: 'Networking and VoIP telephony training', detail: 'Brazilian Army' },
					{ title: 'Advanced structured cabling', detail: 'SENAI MG' },
					{ title: 'Advanced wireless network installation', detail: 'SENAI MG' },
					{ title: 'Advanced computer networks', detail: 'SENAI MG' },
				],
			},
			achievements: {
				title: 'Achievements',
				groups: [
					{
						title: 'Brazilian Army',
						items: [
							{ title: 'Commendation from the Commander of the 4th Light Mountain Signals Company', detail: '4th Light Mountain Signals Company — 2022' },
							{
								title: 'Commendation from the Commander of the 4th Light Mountain Signals Company',
								detail: '4th Light Mountain Signals Company — 2023',
							},
							{ title: 'Commendation from the Administrative Inspector of the 4th Light Mountain Signals Company', detail: '4th Light Mountain Signals Company — 2023' },
							{
								title: 'Best financial management award of 4th Light Mountain Infantry Brigade',
								detail: '4th Light Mountain Signals Company — 2022',
							},
							{ title: 'Correia Lima Award Medal', detail: 'CPOR-BH — 2021' },
							{ title: '1st overall in class', detail: 'CPOR-BH — 2021' },
							{ title: '1st place — Communications course', detail: 'CPOR-BH — 2021' },
							{ title: 'Best physical fitness', detail: 'CPOR-BH — 2021' },
							{ title: 'FIT Operation distinction (Fiber, Initiative, and Tenacity)', detail: 'CPOR-BH — 2021' },
							{ title: 'Signed the Golden Book', detail: 'CPOR-BH — 2021' },
						],
					},
				],
			},
			contact: {
				title: 'Contact',
				locationLine: 'Belo Horizonte, Brazil • Open to opportunities in Brazil and abroad',
				links: [
					{ label: 'Email (UFMG)', href: 'mailto:viniciustda@ufmg.br' },
					{ label: 'Email (personal)', href: 'mailto:v.trindade.d.a@gmail.com' },
					{ label: 'LinkedIn', href: 'https://linkedin.com/in/v-trindade' },
					{ label: 'GitHub', href: 'https://github.com/Viniciustda' },
					{ label: 'Lattes', href: 'http://lattes.cnpq.br/3991476030874999' },
				],
			},
		},
		languageSwitch: { label: 'PT', href: '/pt/' },
		footer: { text: `© ${new Date().getFullYear()} Vinicius Trindade. All rights reserved.` },
	},
};
