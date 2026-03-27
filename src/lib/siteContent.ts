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

export type AwardImage = {
	src: string;
	thumbSrc?: string;
	alt: string;
};

export type AwardItem = {
	title: string;
	detail?: string;
	fullText?: string;
	image?: AwardImage;
	images?: AwardImage[];
};

export type AchievementGroup = {
	title: string;
	items: AwardItem[];
};

export type ResearchAdvisor = {
	name: string;
	role: string;
	href?: string;
};

export type ResearchPaper = {
	title: string;
	venue: string;
	venueFullName: string;
	venueDescription: string;
	year: number;
	language: string;
	doi?: string;
	note?: string;
};

export type ResearchItem = {
	title: string;
	project: string;
	labs: Array<{ name: string; href: string }>;
	period: string;
	advisors: ResearchAdvisor[];
	description: string;
	scheme?: string;
	papers: ResearchPaper[];
	tags: string[];
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
		research: {
			title: string;
			items: ResearchItem[];
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
			tagline: 'Ciência da Computação @ UFMG • Cibersegurança • IA • Redes',
			summary:
				'Graduando em Ciência da Computação (UFMG) e pesquisador de Iniciação Científica no Wireless Networks Lab (WiNet/UFMG) e no CCSC Research Lab (UFMG), com foco em cibersegurança, inteligência artificial (aprendizado por reforço) e redes. Experiência como oficial do Exército Brasileiro (Segundo Tenente): comandei pelotões em rotinas e atividades operacionais e liderei seções administrativas, com atuação por mais tempo no setor financeiro.',
			ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
			ctaSecondary: { label: 'Contato', href: '#contato' },
		},
		sections: {
			nav: [
				{ label: 'Sobre', href: '#sobre' },
				{ label: 'Pesquisa', href: '#pesquisa' },
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
					'Atuo e pesquiso nas áreas de cibersegurança, inteligência artificial (aprendizado por reforço) e redes de computadores.',
					'Experiência prática com C/C++, Python, SQL e Git/GitHub; familiaridade com desenvolvimento web.',
					'Metodologias: conhecimento de Scrum e Kanban para organização e acompanhamento de trabalho.',
					'Arquitetura: conhecimento de microsserviços, monolítico e MVC.',
					'Interesse em desenvolvimento de jogos e robótica, explorando essas áreas em projetos pessoais.',
					'Soft skills: liderança, disciplina, organização, responsabilidade, abnegação e trabalho em grupo.',
				],
			},
			research: {
				title: 'Pesquisa',
				items: [
					{
						title: 'Iniciação Científica (IC)',
						project: 'Redes de UAVs Resilientes a Ataques Homem do Meio às Informações de Localização',
						labs: [
							{ name: 'Wireless Networks Lab (WiNet)', href: 'https://www.winet.dcc.ufmg.br/' },
							{ name: 'CCSC Research Lab', href: 'https://ccsc.dcc.ufmg.br/' },
						],
						period: 'Out 2024 — Mai 2026 (voluntário: Out 2024 — Abr 2025 • bolsista CNPq: Mai 2025 — Mai 2026)',
						advisors: [
							{ name: 'Prof. Dr. Aldri Luiz dos Santos', role: 'Orientador (UFMG)', href: 'https://dcc.ufmg.br/professor/aldri-luiz-dos-santos/' },
							{ name: 'Dr. Agnaldo de Souza Batista', role: 'Coorientador (UFPR)' },
						],
						description: 'Redes de VANTs (FANETs) dependem do compartilhamento de localização para coordenação de voo, porém canais sem fio expõem esses dados a ataques Homem-do-Meio. Para resolver esse problema, desenvolvemos o KEYSUAV, um esquema de troca oportunística de chaves com criptografia leve (ECC + ASCON-128) e detecção de anomalias. Implementado em C++ no simulador ns-3 sobre o serviço FlySafe, o esquema alcançou 100% de detecção de mensagens comprometidas.',
						scheme: 'KEYSUAV',
						papers: [
							{
								title: 'An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks',
								venue: 'SBRC 2026',
								venueFullName: 'Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos',
								venueDescription: 'Principal evento científico de redes e sistemas distribuídos do Brasil.',
								year: 2026,
								language: 'Inglês',
								note: 'Primeiro artigo escrito — aceito na primeira submissão.',
							},
						],
						tags: ['Redes de UAVs', 'Cibersegurança', 'Ataque MiM', 'ns-3', 'CNPq'],
					},
				],
			},
			projects: {
				title: 'Projetos',
				items: [
					{
						title: 'Caixinha',
						description:
							'Aplicativo para divisão de despesas em grupo, desenvolvido em dupla. Em desenvolvimento; link ainda não disponível. Arquitetura por componentes: Front-Caixinha (SPA React/Vite, UI/UX e consumo de API), Api-Caixinha (NestJS + TypeScript, Prisma + PostgreSQL, autenticação/autorização e regras de negócio) e Mobile-Caixinha (React Native, UI e consumo da mesma API). Login via Google.',
						tags: ['React', 'Vite', 'React Native', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OAuth', 'GitHub Actions'],
					},
					{
						title: 'Animae',
						description:
							'Jogo 2D estilo Metroidvania, desenvolvido individualmente, com foco em conexão com a natureza e reconstrução de um mundo devastado. Em desenvolvimento; link ainda não disponível.',
						tags: ['C++', 'SDL2', 'OpenGL', 'Game Dev', '2D'],
					},
					{
						title: 'Página pessoal (este site)',
						description:
							'Portfólio estático com Astro + Tailwind, pensado para ser rápido, acessível e fácil de manter (GitHub Pages).',
						tags: ['Astro', 'Tailwind', 'GitHub Pages', 'GitHub Actions'],
						links: [
							{ label: 'GitHub', href: 'https://github.com/Viniciustda/Vinicius-Trindade' },
						],
					},
				],
			},
			experience: {
				title: 'Experiência',
				items: [
					{
						role: 'Pesquisador de Iniciação Científica (IC)',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Orientação: Prof. Dr. Aldri Luiz dos Santos',
						period: 'Out 2024 — Mai 2026 (voluntário: Out 2024 — Abr 2025 • bolsista CNPq: Mai 2025 — Mai 2026)',
						highlights: [
							'Projeto: “Redes de UAVs Resilientes a Ataques Homem do Meio às Informações de Localização”.',
							'Pesquisa aplicada em segurança de redes com simulação no ns-3.',
							'Esquema proposto (produto da pesquisa): KEYSUAV.',
							'Artigo aceito no SBRC 2026: “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
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
					{
						title: 'Estágio Setorial de Gestão Financeira',
						detail: 'Exército Brasileiro',
						images: [
							{ src: 'Certificados/fin_1.jpeg', alt: 'Estágio Setorial de Gestão Financeira — 1' },
							{ src: 'Certificados/fin_2.jpeg', alt: 'Estágio Setorial de Gestão Financeira — 2' },
						],
					},
					{
						title: 'Estágio Setorial para Auxiliar de Setor Financeiro',
						detail: 'Exército Brasileiro',
						images: [
							{
								src: 'Certificados/aux_set_fin_1.jpeg',
								alt: 'Estágio Setorial para Auxiliar de Setor Financeiro — 1',
							},
							{
								src: 'Certificados/aux_set_fin_2.jpeg',
								alt: 'Estágio Setorial para Auxiliar de Setor Financeiro — 2',
							},
						],
					},
					{
						title: 'Estágio Setorial de Gestão de Almoxarifado',
						detail: 'Exército Brasileiro',
						images: [
							{ src: 'Certificados/almox_1.jpeg', alt: 'Estágio Setorial de Gestão de Almoxarifado — 1' },
							{ src: 'Certificados/almox_2.jpeg', alt: 'Estágio Setorial de Gestão de Almoxarifado — 2' },
						],
					},
					{
						title: 'Estágio Setorial de Gestão de Estoques',
						detail: 'Exército Brasileiro',
						images: [
							{ src: 'Certificados/est_1.jpeg', alt: 'Estágio Setorial de Gestão de Estoques — 1' },
							{ src: 'Certificados/est_2.jpeg', alt: 'Estágio Setorial de Gestão de Estoques — 2' },
						],
					},
					{
						title: 'Estágio Básico do Combatente de Montanha',
						detail: 'Exército Brasileiro',
						image: { src: 'Certificados/mth.jpeg', alt: 'Estágio Básico do Combatente de Montanha' },
					},
					{
						title: 'Capacitação em Redes e Telefonia VOIP',
						detail: 'Exército Brasileiro',
						image: { src: 'Certificados/voip.jpeg', alt: 'Capacitação em Redes e Telefonia VOIP' },
					},
					{
						title: 'Aperfeiçoamento em Cabeamento Estruturado',
						detail: 'SENAI MG',
						image: { src: 'Certificados/cabeamento.jpeg', alt: 'Aperfeiçoamento em Cabeamento Estruturado' },
					},
					{
						title: 'Aperfeiçoamento em Instalação de Redes Wireless',
						detail: 'SENAI MG',
						image: { src: 'Certificados/wireless.jpeg', alt: 'Aperfeiçoamento em Instalação de Redes Wireless' },
					},
					{
						title: 'Aperfeiçoamento em Redes de Computadores',
						detail: 'SENAI MG',
						image: { src: 'Certificados/redes.jpeg', alt: 'Aperfeiçoamento em Redes de Computadores' },
					},
				],
			},
			achievements: {
				title: 'Conquistas',
				groups: [
					{
						title: 'Exército Brasileiro',
						items: [
							{
								title: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth',
								detail: '4ª Companhia de Comunicações Leve de Montanha — 2022',
								image: {
									src: 'Conquistas/re_cmd_22.jpeg',
									alt: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth (2022)',
								},
							},
							{
								title: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth',
								detail: '4ª Companhia de Comunicações Leve de Montanha — 2023',
							images: [
								{
									src: 'Conquistas/re_cmd_23-1.jpeg',
									alt: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth (2023) — 1',
								},
								{
									src: 'Conquistas/re_cmd_23-2.jpeg',
									alt: 'Referência elogiosa do Comandante da 4ª Cia Com L Mth (2023) — 2',
								},
							],
							},
						{
							title: 'Referência elogiosa do Fiscal Administrativo da 4ª Cia Com L Mth',
							detail: '4ª Companhia de Comunicações Leve de Montanha — 2023',
							image: {
								src: 'Conquistas/re_fis.jpeg',
								alt: 'Referência elogiosa do Fiscal Administrativo da 4ª Cia Com L Mth (2023)',
							},
						},
							{
								title: 'Prêmio de melhor gestão financeira da 4ª Brigada de Infantaria Leve de Montanha',
								detail: '4ª Companhia de Comunicações Leve de Montanha — 2022',
							},
						{
							title: 'Medalha Prêmio Correia Lima',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/medalha.jpeg',
								alt: 'Medalha Prêmio Correia Lima (2021)',
							},
						},
						{
							title: '1º lugar geral',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/geral.jpeg',
								alt: '1º lugar geral (2021)',
							},
						},
							{ title: '1º lugar do curso de Comunicações', detail: 'CPOR-BH — 2021' },
						{
							title: 'Melhor aptidão física',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/apt_fis.jpeg',
								alt: 'Melhor aptidão física (2021)',
							},
						},
						{
							title: 'Destaque da Operação FIT (Fibra, Iniciativa e Tenacidade)',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/fit.jpeg',
								alt: 'Destaque da Operação FIT (2021)',
							},
						},
							{ title: 'Assinatura do Livro de Ouro', detail: 'CPOR-BH — 2021' },
						],
					},
				],
			},
			contact: {
				title: 'Contato',
				locationLine: 'Belo Horizonte, Brasil',
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
			tagline: 'Computer Science @ UFMG • Cybersecurity • AI • Networks',
			summary:
				'Computer Science student (UFMG) and undergraduate researcher at the Wireless Networks Lab (WiNet/UFMG) and the CCSC Research Lab (UFMG), focused on cybersecurity, AI (reinforcement learning), and computer networks. Former Brazilian Army officer (Second Lieutenant): commanded platoon-level units in operational routines and led administrative sections, spending more time in the finance section.',
			ctaPrimary: { label: 'View projects', href: '#projects' },
			ctaSecondary: { label: 'Contact', href: '#contact' },
		},
		sections: {
			nav: [
				{ label: 'About', href: '#about' },
				{ label: 'Research', href: '#research' },
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
					'I work and research in cybersecurity, AI (reinforcement learning), and computer networks.',
					'Hands-on experience with C/C++, Python, SQL, and Git/GitHub; familiar with web development.',
					'Methodologies: knowledge of Scrum and Kanban for organizing and tracking work.',
					'Architecture: knowledge of microservices, monolithic applications, and MVC.',
					'Interested in game development and robotics, exploring these areas through personal projects.',
					'Soft skills: leadership, discipline, organization, responsibility, selflessness, and teamwork.',
				],
			},
			research: {
				title: 'Research',
				items: [
					{
						title: 'Undergraduate Research (IC)',
						project: 'UAV Networks Resilient to Man-in-the-Middle Attacks on Location Information',
						labs: [
							{ name: 'Wireless Networks Lab (WiNet)', href: 'https://www.winet.dcc.ufmg.br/' },
							{ name: 'CCSC Research Lab', href: 'https://ccsc.dcc.ufmg.br/' },
						],
						period: 'Oct 2024 — May 2026 (volunteer: Oct 2024 — Apr 2025 • CNPq scholar: May 2025 — May 2026)',
						advisors: [
							{ name: 'Prof. PhD Aldri Luiz dos Santos', role: 'Advisor (UFMG)', href: 'https://dcc.ufmg.br/professor/aldri-luiz-dos-santos/' },
							{ name: 'PhD Agnaldo de Souza Batista', role: 'Co-advisor (UFPR)' },
						],
						description: 'UAV networks (FANETs) rely on location sharing for flight coordination, but wireless channels expose this data to Man-in-the-Middle attacks. To address this, we developed KEYSUAV, an opportunistic key exchange scheme with lightweight cryptography (ECC + ASCON-128) and anomaly detection. Implemented in C++ on the ns-3 simulator over the FlySafe service, the scheme achieved 100% detection of compromised messages.',
						scheme: 'KEYSUAV',
						papers: [
							{
								title: 'An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks',
								venue: 'SBRC 2026',
								venueFullName: 'Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos',
								venueDescription: 'The most important scientific event on computer networks and distributed systems in Brazil.',
								year: 2026,
								language: 'English',
								note: 'First paper written — accepted on first submission.',
							},
						],
						tags: ['UAV Networks', 'Cybersecurity', 'MiM Attack', 'ns-3', 'CNPq'],
					},
				],
			},
			projects: {
				title: 'Projects',
				items: [
					{
						title: 'Caixinha',
						description:
							'Group expense-splitting app developed with a partner. In progress; link not available yet. Component-based setup: Front-Caixinha (React/Vite SPA, UI/UX and API consumption), Api-Caixinha (NestJS + TypeScript, Prisma + PostgreSQL, authentication/authorization and business rules), and Mobile-Caixinha (React Native, mobile UI and consumption of the same API). Google login.',
						tags: ['React', 'Vite', 'React Native', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OAuth', 'GitHub Actions'],
					},
					{
						title: 'Animae',
						description:
							'Indie 2D Metroidvania game developed solo, focused on connection with nature and rebuilding a devastated world. In progress; link not available yet.',
						tags: ['C++', 'SDL2', 'OpenGL', 'Game Dev', '2D'],
					},
					{
						title: 'Personal website (this site)',
						description:
							'Static portfolio built with Astro + Tailwind, designed to be fast, accessible, and easy to maintain (GitHub Pages).',
						tags: ['Astro', 'Tailwind', 'GitHub Pages', 'GitHub Actions'],
						links: [
							{ label: 'GitHub', href: 'https://github.com/Viniciustda/Vinicius-Trindade' },
						],
					},
				],
			},
			experience: {
				title: 'Experience',
				items: [
					{
						role: 'Undergraduate Researcher',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Advisor: Prof. PhD Aldri Luiz dos Santos',
						period: 'Oct 2024 — May 2026 (volunteer: Oct 2024 — Apr 2025 • CNPq scholarship: May 2025 — May 2026)',
						highlights: [
							'Project: “UAV Networks Resilient to Man-in-the-Middle Attacks on Location Information”.',
							'Applied research in network security with simulation in ns-3.',
							'Proposed scheme (research output): KEYSUAV.',
							'Paper accepted at SBRC 2026: “An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks”.',
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
					{
						title: 'Sector internship in financial management',
						detail: 'Brazilian Army',
						images: [
							{ src: 'Certificados/fin_1.jpeg', alt: 'Sector internship in financial management — 1' },
							{ src: 'Certificados/fin_2.jpeg', alt: 'Sector internship in financial management — 2' },
						],
					},
					{
						title: 'Sector internship for finance assistant',
						detail: 'Brazilian Army',
						images: [
							{ src: 'Certificados/aux_set_fin_1.jpeg', alt: 'Sector internship for finance assistant — 1' },
							{ src: 'Certificados/aux_set_fin_2.jpeg', alt: 'Sector internship for finance assistant — 2' },
						],
					},
					{
						title: 'Sector internship in warehouse management',
						detail: 'Brazilian Army',
						images: [
							{ src: 'Certificados/almox_1.jpeg', alt: 'Sector internship in warehouse management — 1' },
							{ src: 'Certificados/almox_2.jpeg', alt: 'Sector internship in warehouse management — 2' },
						],
					},
					{
						title: 'Sector internship in stock management',
						detail: 'Brazilian Army',
						images: [
							{ src: 'Certificados/est_1.jpeg', alt: 'Sector internship in stock management — 1' },
							{ src: 'Certificados/est_2.jpeg', alt: 'Sector internship in stock management — 2' },
						],
					},
					{
						title: 'Basic mountain combatant course',
						detail: 'Brazilian Army',
						image: { src: 'Certificados/mth.jpeg', alt: 'Basic mountain combatant course' },
					},
					{
						title: 'Networking and VoIP telephony training',
						detail: 'Brazilian Army',
						image: { src: 'Certificados/voip.jpeg', alt: 'Networking and VoIP telephony training' },
					},
					{
						title: 'Advanced structured cabling',
						detail: 'SENAI MG',
						image: { src: 'Certificados/cabeamento.jpeg', alt: 'Advanced structured cabling' },
					},
					{
						title: 'Advanced wireless network installation',
						detail: 'SENAI MG',
						image: { src: 'Certificados/wireless.jpeg', alt: 'Advanced wireless network installation' },
					},
					{
						title: 'Advanced computer networks',
						detail: 'SENAI MG',
						image: { src: 'Certificados/redes.jpeg', alt: 'Advanced computer networks' },
					},
				],
			},
			achievements: {
				title: 'Achievements',
				groups: [
					{
						title: 'Brazilian Army',
						items: [
							{
								title: 'Commendation from the Commander of the 4th Light Mountain Signals Company',
								detail: '4th Light Mountain Signals Company — 2022',
								image: {
									src: 'Conquistas/re_cmd_22.jpeg',
									alt: 'Commendation from the Commander of the 4th Light Mountain Signals Company (2022)',
								},
							},
							{
								title: 'Commendation from the Commander of the 4th Light Mountain Signals Company',
								detail: '4th Light Mountain Signals Company — 2023',
							images: [
								{
									src: 'Conquistas/re_cmd_23-1.jpeg',
									alt: 'Commendation from the Commander of the 4th Light Mountain Signals Company (2023) — 1',
								},
								{
									src: 'Conquistas/re_cmd_23-2.jpeg',
									alt: 'Commendation from the Commander of the 4th Light Mountain Signals Company (2023) — 2',
								},
							],
							},
						{
							title: 'Commendation from the Administrative Inspector of the 4th Light Mountain Signals Company',
							detail: '4th Light Mountain Signals Company — 2023',
							image: {
								src: 'Conquistas/re_fis.jpeg',
								alt: 'Commendation from the Administrative Inspector of the 4th Light Mountain Signals Company (2023)',
							},
						},
							{
								title: 'Best financial management award of 4th Light Mountain Infantry Brigade',
								detail: '4th Light Mountain Signals Company — 2022',
							},
						{
							title: 'Correia Lima Award Medal',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/medalha.jpeg',
								alt: 'Correia Lima Award Medal (2021)',
							},
						},
						{
							title: '1st overall in class',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/geral.jpeg',
								alt: '1st overall in class (2021)',
							},
						},
							{ title: '1st place — Communications course', detail: 'CPOR-BH — 2021' },
						{
							title: 'Best physical fitness',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/apt_fis.jpeg',
								alt: 'Best physical fitness (2021)',
							},
						},
						{
							title: 'FIT Operation distinction (Fiber, Initiative, and Tenacity)',
							detail: 'CPOR-BH — 2021',
							image: {
								src: 'Conquistas/fit.jpeg',
								alt: 'FIT Operation distinction (2021)',
							},
						},
							{ title: 'Signed the Golden Book', detail: 'CPOR-BH — 2021' },
						],
					},
				],
			},
			contact: {
				title: 'Contact',
				locationLine: 'Belo Horizonte, Brazil',
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
