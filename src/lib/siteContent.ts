export type Locale = 'pt' | 'en' | 'fr';

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
	link?: { label: string; href: string };
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

export type ResearchLab = {
	name: string;
	href: string;
};

/** Rendered as an IEEE-style reference; `doi` is the bare identifier (no https://doi.org/). */
export type Citation = {
	authors: string;
	title: string;
	proceedings: string;
	location: string;
	year: number;
	pages: string;
	doi: string;
};

export type ResearchItem = {
	title: string;
	project: string;
	labs: ResearchLab[];
	period: string;
	advisors: ResearchAdvisor[];
	coauthors?: Array<{ name: string; role: string }>;
	repository?: { name: string; href: string };
	description: string;
	citation?: Citation;
	tags: string[];
};

export type ContactIcon = 'mail' | 'gmail' | 'linkedin' | 'github' | 'youtube' | 'lattes' | 'orcid';

export type ContactLink = {
	label: string;
	href: string;
	icon: ContactIcon;
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
	/** Each section's `id` is its anchor; the navbar is built from `id` + `title`. */
	sections: {
		about: {
			id: string;
			title: string;
			bullets: string[];
		};
		research: {
			id: string;
			title: string;
			items: ResearchItem[];
		};
		projects: {
			id: string;
			title: string;
			items: Project[];
		};
		experience: {
			id: string;
			title: string;
			items: TimelineItem[];
		};
		education: {
			id: string;
			title: string;
			items: EducationItem[];
		};
		certificates: {
			id: string;
			title: string;
			items: AwardItem[];
		};
		achievements: {
			id: string;
			title: string;
			groups: AchievementGroup[];
		};
		contact: {
			id: string;
			title: string;
			locationLine: string;
			links: ContactLink[];
		};
	};
	/** Interface labels that are not tied to a specific piece of content. */
	ui: {
		skipToContent: string;
		languageSwitchLabel: string;
		themeToggleLabel: string;
		photoAlt: string;
		labs: string;
		advisors: string;
		coauthors: string;
		repository: string;
		publication: string;
		projectsHint: string;
		previousProject: string;
		nextProject: string;
		timeline: string;
		certificatesHint: string;
		images: string;
		read: string;
		close: string;
		previous: string;
		next: string;
		previousImage: string;
		nextImage: string;
	};
	footer: {
		text: string;
	};
};

const icLabs: ResearchLab[] = [
	{ name: 'Wireless Networks Lab (WiNet)', href: 'https://www.winet.dcc.ufmg.br/' },
	{ name: 'CCSC Research Lab', href: 'https://ccsc.dcc.ufmg.br/' },
];

const aldri: Record<Locale, ResearchAdvisor> = {
	pt: { name: 'Prof. Dr. Aldri Luiz dos Santos', role: 'Orientador (UFMG)', href: 'https://dcc.ufmg.br/professor/aldri-luiz-dos-santos/' },
	en: { name: 'Prof. PhD Aldri Luiz dos Santos', role: 'Advisor (UFMG)', href: 'https://dcc.ufmg.br/professor/aldri-luiz-dos-santos/' },
	fr: { name: 'Prof. Aldri Luiz dos Santos', role: 'Directeur de recherche (UFMG)', href: 'https://dcc.ufmg.br/professor/aldri-luiz-dos-santos/' },
};

const icAdvisors: Record<Locale, ResearchAdvisor[]> = {
	pt: [aldri.pt, { name: 'Dr. Agnaldo de Souza Batista', role: 'Coorientador (UFPR)' }],
	en: [aldri.en, { name: 'PhD Agnaldo de Souza Batista', role: 'Co-advisor (UFPR)' }],
	fr: [aldri.fr, { name: 'Dr Agnaldo de Souza Batista', role: 'Codirecteur de recherche (UFPR)' }],
};

const keysuavPaper: Citation = {
	authors: 'A. Batista, V. Trindade, and A. Santos',
	title: 'An Opportunistic Key Exchange Scheme for Location Information Sharing on UAV Networks Resilient to MiM Attacks',
	proceedings: 'Anais do XLIV Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos',
	location: 'Praia do Forte/BA',
	year: 2026,
	pages: '141–154',
	doi: '10.5753/sbrc.2026.19890',
};

const keysuavRepository = { name: 'github.com/agnaldosb/flysafe_MiM', href: 'https://github.com/agnaldosb/flysafe_MiM' };

/** Languages offered by the language menu. Names are written in their own language. */
export const languages: { locale: Locale; name: string; href: string }[] = [
	{ locale: 'en', name: 'English', href: '/en/' },
	{ locale: 'fr', name: 'Français', href: '/fr/' },
	{ locale: 'pt', name: 'Português', href: '/pt/' },
];

export const content: Record<Locale, PageContent> = {
	pt: {
		meta: {
			title: 'Vinicius Trindade — Portfólio',
			description:
				'Portfólio trilíngue (PT/EN/FR) com projetos, iniciação científica (WiNet/UFMG), experiência, formação e conquistas — Ciência da Computação (UFMG).',
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
			about: {
				id: 'sobre',
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
				id: 'pesquisa',
				title: 'Pesquisa',
				items: [
					{
						title: 'Iniciação Científica (IC)',
						project: keysuavPaper.title,
						labs: icLabs,
						period: 'Out 2024 — Abr 2026 (voluntário: Out 2024 — Abr 2025 • bolsista CNPq: Mai 2025 — Abr 2026)',
						advisors: icAdvisors.pt,
						description:
							'Como os veículos aéreos não tripulados (UAVs) demandam tecnologias sem fio para sua comunicação, eles se tornam suscetíveis a sérias ameaças de segurança que visam comprometer a integridade e a confidencialidade dos dados de controle trocados, destacando-se os ataques homem do meio (MiM) como um dos mais danosos. Além disso, as redes de UAVs requerem serviços críticos essenciais para sua operação regular, como o serviço de localização de UAVs. A troca de chaves é uma forma de proteger as comunicações dos UAVs contra ataques MiM. Este artigo propõe o KEYSUAV, um esquema de troca de chaves que viabiliza um compartilhamento de informações de localização resiliente a ataques MiM em redes de UAVs. O KEYSUAV se baseia em abordagens oportunísticas e no padrão de criptografia leve ASCON, um algoritmo projetado para dispositivos com recursos limitados, como os UAVs. Resultados de simulação mostram que o KEYSUAV, sobre o sistema FlySafe, detectou 100% das mensagens comprometidas enviadas por um atacante MiM, com uma leve redução na consciência espacial dos UAVs, em torno de 4,5%, favorecendo assim a resiliência do serviço de localização para redes de UAVs.',
						citation: keysuavPaper,
						repository: keysuavRepository,
						tags: ['Redes de UAVs', 'Cibersegurança', 'Ataque MiM', 'ns-3', 'CNPq'],
					},
					{
						title: 'Iniciação Científica (IC)',
						project: 'Detecção e Identificação de Ataques MiM no Serviço de Compartilhamento de Localização para FANETs com MARL',
						labs: icLabs,
						period: 'Mai 2026 — Abr 2027 (bolsista CNPq)',
						advisors: icAdvisors.pt,
						description:
							'A operação segura de redes de UAVs depende de sistemas de infraestrutura crítica com altos níveis de robustez, confiabilidade e segurança durante sua operação. O serviço de compartilhamento de localização é fundamental para que os UAVs tenham consciência espacial da rede, apoiando assim a execução de diversos sistemas críticos. No entanto, esse serviço está sujeito a ataques homem do meio (MiM) que visam interromper sua operação. Este artigo apresenta o CIRRUS, um mecanismo distribuído no qual o aprendizado por reforço multiagente (MARL), sob treinamento centralizado e execução descentralizada (CTDE), detecta tais ataques e identifica o atacante por trás da identidade de suas vítimas, e um consenso entre vizinhos corrobora cada identificação. Sobre o FlySafe, o CIRRUS detectou 99,67% das mensagens de localização forjadas, identificou o MiM em todas as simulações com 0,36% de alarmes falsos e manteve o erro de localização em 0,50 m, contra 3,55 m sob ataque.',
						tags: ['FANETs', 'Cibersegurança', 'Ataque MiM', 'MARL', 'CTDE', 'CNPq'],
					},
					{
						title: 'Projeto de Disciplina — Redes Sem Fio',
						project: 'Multisource Dual Path Same Parity Routing (MDPSPR)',
						labs: [],
						period: 'Mar 2026 — Fev 2027',
						advisors: [
							{ name: 'Prof. Dr. Luiz Filipe Menezes Vieira', role: 'Orientador (UFMG)', href: 'https://dcc.ufmg.br/professor/luiz-filipe-menezes-vieira/' },
						],
						coauthors: [{ name: 'Gustavo Ferreira Dias', role: 'Segundo autor (UFMG)' }],
						description:
							'As redes de sensores sem fio passaram a transportar tráfego multimídia e de streaming, que demanda alta vazão. Plataformas de rádio duplo respondem a essa demanda, e o protocolo de caminho duplo de mesma paridade envia os dados por dois caminhos disjuntos em nós e com a mesma paridade de saltos, de modo que origem e destino usem os dois rádios ao mesmo tempo, mas apenas para um único par origem–destino. Este trabalho estende o roteamento de caminho duplo de mesma paridade a múltiplos pares origem–destino simultâneos. Formulamos o roteamento conjunto como um programa linear inteiro com exclusividade de nós entre os pares, incluindo uma variante que maximiza o número de pares admitidos antes de minimizar o custo das rotas, projetamos heurísticas gulosas com diferentes regras de ordenação dos pares e acrescentamos uma atribuição de canais baseada na geometria da rede. O protocolo é avaliado no ns-3.38 com tráfego UDP e TCP reais sobre IPv6/6LoWPAN e IEEE 802.15.4, medindo admissão, vazão útil, entrega e atraso conforme variam a demanda, a topologia e o transporte. O trabalho nasceu como projeto da disciplina de Redes Sem Fio e está sendo preparado para publicação a convite do professor.',
						tags: ['Redes de Sensores Sem Fio', 'Rádio Duplo', 'Roteamento', 'PLI', 'ns-3'],
					},
					{
						title: 'Projeto Orientado em Computação (POC) — TCC',
						project: 'Detecção e Identificação de Ataques MitM em Serviços de Consenso Local para FANETs com MARL',
						labs: icLabs,
						period: 'Ago 2026 — Jul 2027',
						advisors: [aldri.pt],
						description:
							'Enxames de UAVs organizados como FANETs dependem de serviços de consenso local, nos quais cada UAV atualiza um estado compartilhado por trocas com seus vizinhos; a sincronização de relógios é o caso de aplicação estudado. Como as mensagens de controle não têm autenticação, um atacante homem do meio (MitM) que pertence ao enxame pode capturar a mensagem de consenso de um vizinho, alterar o valor que ela carrega e reinjetá-la sob a identidade da vítima, e o próprio mecanismo de convergência propaga o valor corrompido por todo o componente conectado. A defesa usa aprendizado por reforço multiagente (MARL), sob treinamento centralizado e execução descentralizada (CTDE), para detectar esse ataque e identificar o UAV responsável: cada UAV carrega seu próprio agente e decide apenas com a informação disponível em sua vizinhança, rotulando cada mensagem para que uma contribuição forjada seja descartada antes de ser absorvida pelo serviço e apontando o atacante. O serviço e a defesa são construídos no ns-3.38 com ns3-ai e avaliados com 40 UAVs em uma topologia esparsa e permanentemente particionada.',
						tags: ['FANETs', 'Cibersegurança', 'Ataque MitM', 'Consenso', 'MARL', 'ns-3'],
					},
				],
			},
			projects: {
				id: 'projetos',
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
				id: 'experiencia',
				title: 'Experiência',
				items: [
					{
						role: 'Pesquisador de Iniciação Científica (IC)',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Orientação: Prof. Dr. Aldri Luiz dos Santos',
						period: 'Out 2024 — Abr 2027 (voluntário: Out 2024 — Abr 2025 • bolsista CNPq: Mai 2025 — Abr 2027)',
						highlights: [
							'Projeto: “CiberComUAV — Cibersegurança nas Comunicações de Redes Aéreas de UAVs”.',
							'Pesquisa aplicada em segurança de redes com simulação no ns-3.',
						],
						link: { label: 'Ver detalhes', href: '#pesquisa' },
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
				id: 'formacao',
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
				id: 'certificados',
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
				id: 'conquistas',
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
				id: 'contato',
				title: 'Contato',
				locationLine: 'Belo Horizonte, Brasil',
				links: [
					{ label: 'Email (UFMG)', href: 'mailto:viniciustda@ufmg.br', icon: 'mail' },
					{ label: 'Email (pessoal)', href: 'mailto:v.trindade.d.a@gmail.com', icon: 'gmail' },
					{ label: 'LinkedIn', href: 'https://linkedin.com/in/v-trindade', icon: 'linkedin' },
					{ label: 'GitHub', href: 'https://github.com/Viniciustda', icon: 'github' },
					{ label: 'YouTube', href: 'https://www.youtube.com/@Viniciustda', icon: 'youtube' },
					{ label: 'Lattes', href: 'http://lattes.cnpq.br/3991476030874999', icon: 'lattes' },
					{ label: 'ORCID', href: 'https://orcid.org/0009-0007-9208-8634', icon: 'orcid' },
				],
			},
		},
		ui: {
			skipToContent: 'Ir para o conteúdo',
			languageSwitchLabel: 'Selecionar idioma',
			themeToggleLabel: 'Alternar tema',
			photoAlt: 'Foto de Vinicius Trindade',
			labs: 'Laboratórios',
			advisors: 'Orientação',
			coauthors: 'Coautoria',
			repository: 'Repositório',
			publication: 'Publicação',
			projectsHint: 'Role para explorar →',
			previousProject: 'Projeto anterior',
			nextProject: 'Próximo projeto',
			timeline: 'Linha do tempo',
			certificatesHint: 'Deslize → clique para ver',
			images: 'imagens',
			read: 'Ler',
			close: 'Fechar',
			previous: 'Anterior',
			next: 'Próximo',
			previousImage: 'Imagem anterior',
			nextImage: 'Próxima imagem',
		},
		footer: { text: `© ${new Date().getFullYear()} Vinicius Trindade. All rights reserved.` },
	},
	en: {
		meta: {
			title: 'Vinicius Trindade — Portfolio',
			description:
				'Trilingual (PT/EN/FR) portfolio with projects, undergraduate research (WiNet/UFMG), experience, education and selected achievements — Computer Science (UFMG).',
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
			about: {
				id: 'about',
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
				id: 'research',
				title: 'Research',
				items: [
					{
						title: 'Undergraduate Research (IC)',
						project: keysuavPaper.title,
						labs: icLabs,
						period: 'Oct 2024 — Apr 2026 (volunteer: Oct 2024 — Apr 2025 • CNPq scholar: May 2025 — Apr 2026)',
						advisors: icAdvisors.en,
						description:
							'As unmanned aerial vehicles (UAVs) demand wireless technologies for their communication, they become prone to serious security threats that aim to compromise the integrity and confidentiality of the exchanged control data, standing out man-in-the-middle (MiM) attacks as one of the most damaging. Besides, UAV networks require essential critical services for their regular operation, like the UAV location service. Key exchange is one way to protect UAV communications against MiM attacks. This paper proposes KEYSUAV, a key exchange scheme to enable a resilient location information sharing on UAV networks against MiM attacks. KEYSUAV relies on opportunistic approaches and on the lightweight cryptographic standard ASCON, an algorithm designed for resource-constrained devices like UAVs. Simulation results show that KEYSUAV over the FlySafe system detected 100% of compromised messages sent by a MiM attacker with a slight reduction in UAVs’ spatial awareness, around 4.5%, thus fostering the resilience of the location service for UAV networks.',
						citation: keysuavPaper,
						repository: keysuavRepository,
						tags: ['UAV Networks', 'Cybersecurity', 'MiM Attack', 'ns-3', 'CNPq'],
					},
					{
						title: 'Undergraduate Research (IC)',
						project: 'MiM Attack Detection and Identification in Location Sharing Service for FANETs with MARL',
						labs: icLabs,
						period: 'May 2026 — Apr 2027 (CNPq scholar)',
						advisors: icAdvisors.en,
						description:
							'The safe operation of UAV networks depends on critical infrastructure systems with high levels of robustness, reliability, and security during their operation. The location sharing service is pivotal to UAVs have spatial awareness of the network, thus supporting the execution of various critical systems. However, this service is subject to man-in-the-middle (MiM) attacks that aim to disrupt its operation. This paper presents CIRRUS, a distributed mechanism in which multi-agent reinforcement learning (MARL) under centralized training and decentralized execution (CTDE) detects such attacks and identifies the attacker behind the identity of its victims, and a consensus among neighbors corroborates each identification. Over FlySafe, CIRRUS detected 99.67% of the forged location messages, identified the MiM in all simulations with 0.36% of false alarms, and held the location error at 0.50m, against 3.55m under attack.',
						tags: ['FANETs', 'Cybersecurity', 'MiM Attack', 'MARL', 'CTDE', 'CNPq'],
					},
					{
						title: 'Course Project — Wireless Networks',
						project: 'Multisource Dual Path Same Parity Routing (MDPSPR)',
						labs: [],
						period: 'Mar 2026 — Feb 2027',
						advisors: [
							{ name: 'Prof. PhD Luiz Filipe Menezes Vieira', role: 'Advisor (UFMG)', href: 'https://dcc.ufmg.br/professor/luiz-filipe-menezes-vieira/' },
						],
						coauthors: [{ name: 'Gustavo Ferreira Dias', role: 'Second author (UFMG)' }],
						description:
							'Wireless sensor networks now carry multimedia and streaming traffic that demands high throughput. Dual-radio platforms answer this demand, and the dual-path same-parity protocol moves data over two node-disjoint paths of equal hop-count parity, so that source and destination use both radios at once, but only for a single source/destination pair. This work extends dual-path same-parity routing to multiple simultaneous source/destination pairs. We formulate the joint routing as an integer linear program with node exclusivity across pairs, including a variant that maximizes the number of admitted pairs before minimizing route cost, design greedy heuristics with different pair-ordering rules, and add a geometry-based channel assignment. The protocol is evaluated in ns-3.38 with real UDP and TCP traffic over IPv6/6LoWPAN and IEEE 802.15.4, measuring admission, goodput, delivery and delay as demand, topology and transport vary. The work started as a course project in Wireless Networks and is being prepared for publication at the professor’s invitation.',
						tags: ['Wireless Sensor Networks', 'Dual-Radio', 'Routing', 'ILP', 'ns-3'],
					},
					{
						title: 'Undergraduate Final Project (TCC)',
						project: 'MitM Detection and Identification in Local Consensus Services for FANETs with MARL',
						labs: icLabs,
						period: 'Aug 2026 — Jul 2027',
						advisors: [aldri.en],
						description:
							'UAV swarms organized as FANETs rely on local consensus services, in which each UAV updates a shared state through exchanges with its neighbors; clock synchronization is the application case studied here. Because control messages carry no authentication, a man-in-the-middle (MitM) attacker that belongs to the swarm can capture a neighbor’s consensus message, alter the value it carries and reinject it under the victim’s identity, and the convergence mechanism itself then propagates the corrupted value through the whole connected component. The defense uses multi-agent reinforcement learning (MARL) under centralized training and decentralized execution (CTDE) to detect that attack and identify the UAV responsible for it: each UAV carries its own agent and decides using only the information available in its neighborhood, labeling every message so that a forged contribution is dropped before the service absorbs it, and pointing out the attacker. The service and the defense are built on ns-3.38 with ns3-ai and evaluated with 40 UAVs in a sparse, permanently partitioned topology.',
						tags: ['FANETs', 'Cybersecurity', 'MitM Attack', 'Consensus', 'MARL', 'ns-3'],
					},
				],
			},
			projects: {
				id: 'projects',
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
				id: 'experience',
				title: 'Experience',
				items: [
					{
						role: 'Undergraduate Researcher',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Advisor: Prof. PhD Aldri Luiz dos Santos',
						period: 'Oct 2024 — Apr 2027 (volunteer: Oct 2024 — Apr 2025 • CNPq scholarship: May 2025 — Apr 2027)',
						highlights: [
							'Project: “CiberComUAV — Cybersecurity in the Communications of UAV Aerial Networks”.',
							'Applied research in network security with simulation in ns-3.',
						],
						link: { label: 'View details', href: '#research' },
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
				id: 'education',
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
				id: 'certificates',
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
				id: 'achievements',
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
				id: 'contact',
				title: 'Contact',
				locationLine: 'Belo Horizonte, Brazil',
				links: [
					{ label: 'Email (UFMG)', href: 'mailto:viniciustda@ufmg.br', icon: 'mail' },
					{ label: 'Email (personal)', href: 'mailto:v.trindade.d.a@gmail.com', icon: 'gmail' },
					{ label: 'LinkedIn', href: 'https://linkedin.com/in/v-trindade', icon: 'linkedin' },
					{ label: 'GitHub', href: 'https://github.com/Viniciustda', icon: 'github' },
					{ label: 'YouTube', href: 'https://www.youtube.com/@Viniciustda', icon: 'youtube' },
					{ label: 'Lattes', href: 'http://lattes.cnpq.br/3991476030874999', icon: 'lattes' },
					{ label: 'ORCID', href: 'https://orcid.org/0009-0007-9208-8634', icon: 'orcid' },
				],
			},
		},
		ui: {
			skipToContent: 'Skip to content',
			languageSwitchLabel: 'Select language',
			themeToggleLabel: 'Toggle theme',
			photoAlt: 'Photo of Vinicius Trindade',
			labs: 'Labs',
			advisors: 'Supervision',
			coauthors: 'Co-authorship',
			repository: 'Repository',
			publication: 'Publication',
			projectsHint: 'Scroll to explore →',
			previousProject: 'Previous project',
			nextProject: 'Next project',
			timeline: 'Timeline',
			certificatesHint: 'Swipe or drag → click any card to view',
			images: 'images',
			read: 'Read',
			close: 'Close',
			previous: 'Previous',
			next: 'Next',
			previousImage: 'Previous image',
			nextImage: 'Next image',
		},
		footer: { text: `© ${new Date().getFullYear()} Vinicius Trindade. All rights reserved.` },
	},
	fr: {
		meta: {
			title: 'Vinicius Trindade — Portfolio',
			description:
				'Portfolio trilingue (PT/EN/FR) : projets, initiation à la recherche (WiNet/UFMG), expérience, formation et distinctions — Informatique (UFMG).',
		},
		header: {
			name: 'Vinicius Trindade',
			tagline: 'Informatique @ UFMG • Cybersécurité • IA • Réseaux',
			summary:
				'Étudiant en informatique à l’UFMG et étudiant-chercheur au Wireless Networks Lab (WiNet/UFMG) et au CCSC Research Lab (UFMG), spécialisé en cybersécurité, en intelligence artificielle (apprentissage par renforcement) et en réseaux informatiques. Ancien officier de l’Armée brésilienne (sous-lieutenant) : j’ai commandé des sections lors d’activités opérationnelles et dirigé des services administratifs, en particulier le service financier.',
			ctaPrimary: { label: 'Voir les projets', href: '#projets' },
			ctaSecondary: { label: 'Contact', href: '#contact' },
		},
		sections: {
			about: {
				id: 'a-propos',
				title: 'À propos',
				bullets: [
					'Je travaille et mène des recherches en cybersécurité, en intelligence artificielle (apprentissage par renforcement) et en réseaux informatiques.',
					'Expérience pratique en C/C++, Python, SQL et Git/GitHub ; bonnes notions de développement web.',
					'Méthodologies : connaissance de Scrum et de Kanban pour organiser et suivre le travail.',
					'Architecture : connaissance des microservices, des applications monolithiques et du modèle MVC.',
					'Intérêt pour le développement de jeux vidéo et la robotique, que j’explore à travers des projets personnels.',
					'Savoir-être : leadership, discipline, organisation, sens des responsabilités, abnégation et esprit d’équipe.',
				],
			},
			research: {
				id: 'recherche',
				title: 'Recherche',
				items: [
					{
						title: 'Initiation à la recherche (IC)',
						project: keysuavPaper.title,
						labs: icLabs,
						period: 'oct. 2024 — avr. 2026 (bénévole : oct. 2024 — avr. 2025 • boursier CNPq : mai 2025 — avr. 2026)',
						advisors: icAdvisors.fr,
						description:
							'Comme les véhicules aériens sans pilote (UAV, ou drones) dépendent de technologies sans fil pour communiquer, ils sont exposés à de graves menaces de sécurité visant à compromettre l’intégrité et la confidentialité des données de contrôle échangées, les attaques de l’homme du milieu (MiM) étant parmi les plus dommageables. En outre, les réseaux de drones nécessitent des services critiques essentiels à leur fonctionnement normal, comme le service de localisation des drones. L’échange de clés est un moyen de protéger les communications des drones contre les attaques MiM. Cet article propose KEYSUAV, un schéma d’échange de clés qui permet un partage d’informations de localisation résilient face aux attaques MiM dans les réseaux de drones. KEYSUAV repose sur des approches opportunistes et sur la norme de cryptographie légère ASCON, un algorithme conçu pour les dispositifs aux ressources limitées tels que les drones. Les résultats de simulation montrent que KEYSUAV, appliqué au système FlySafe, a détecté 100 % des messages compromis envoyés par un attaquant MiM, au prix d’une légère baisse de la connaissance spatiale des drones, d’environ 4,5 %, renforçant ainsi la résilience du service de localisation des réseaux de drones.',
						citation: keysuavPaper,
						repository: keysuavRepository,
						tags: ['Réseaux de drones', 'Cybersécurité', 'Attaque MiM', 'ns-3', 'CNPq'],
					},
					{
						title: 'Initiation à la recherche (IC)',
						project: 'Détection et identification d’attaques MiM dans le service de partage de localisation des FANET avec MARL',
						labs: icLabs,
						period: 'mai 2026 — avr. 2027 (boursier CNPq)',
						advisors: icAdvisors.fr,
						description:
							'Le fonctionnement sûr des réseaux de drones repose sur des systèmes d’infrastructure critique offrant des niveaux élevés de robustesse, de fiabilité et de sécurité. Le service de partage de localisation est indispensable pour que les drones aient une connaissance spatiale du réseau, ce qui soutient l’exécution de divers systèmes critiques. Cependant, ce service est exposé à des attaques de l’homme du milieu (MiM) qui visent à perturber son fonctionnement. Cet article présente CIRRUS, un mécanisme distribué dans lequel l’apprentissage par renforcement multi-agents (MARL), avec entraînement centralisé et exécution décentralisée (CTDE), détecte ces attaques et identifie l’attaquant qui se cache derrière l’identité de ses victimes, tandis qu’un consensus entre voisins corrobore chaque identification. Sur FlySafe, CIRRUS a détecté 99,67 % des messages de localisation falsifiés, a identifié l’attaquant MiM dans toutes les simulations avec 0,36 % de fausses alertes et a maintenu l’erreur de localisation à 0,50 m, contre 3,55 m sous attaque.',
						tags: ['FANET', 'Cybersécurité', 'Attaque MiM', 'MARL', 'CTDE', 'CNPq'],
					},
					{
						title: 'Projet de cours — Réseaux sans fil',
						project: 'Multisource Dual Path Same Parity Routing (MDPSPR)',
						labs: [],
						period: 'mars 2026 — févr. 2027',
						advisors: [
							{ name: 'Prof. Luiz Filipe Menezes Vieira', role: 'Professeur encadrant (UFMG)', href: 'https://dcc.ufmg.br/professor/luiz-filipe-menezes-vieira/' },
						],
						coauthors: [{ name: 'Gustavo Ferreira Dias', role: 'Deuxième auteur (UFMG)' }],
						description:
							'Les réseaux de capteurs sans fil transportent désormais du trafic multimédia et de streaming qui exige un débit élevé. Les plateformes à double radio répondent à cette demande, et le protocole à double chemin de même parité achemine les données par deux chemins disjoints en nœuds et de même parité en nombre de sauts, de sorte que la source et la destination utilisent les deux radios simultanément, mais pour une seule paire source–destination. Ce travail étend le routage à double chemin de même parité à plusieurs paires source–destination simultanées. Nous formulons le routage conjoint sous la forme d’un programme linéaire en nombres entiers avec exclusivité des nœuds entre les paires, y compris une variante qui maximise le nombre de paires admises avant de minimiser le coût des routes ; nous concevons des heuristiques gloutonnes avec différentes règles d’ordonnancement des paires et ajoutons une attribution de canaux fondée sur la géométrie du réseau. Le protocole est évalué dans ns-3.38 avec du trafic UDP et TCP réel sur IPv6/6LoWPAN et IEEE 802.15.4, en mesurant l’admission, le débit utile, le taux de livraison et le délai selon la demande, la topologie et le protocole de transport. Né d’un projet du cours de Réseaux sans fil, ce travail est en cours de préparation pour publication, à l’invitation du professeur.',
						tags: ['Réseaux de capteurs sans fil', 'Double radio', 'Routage', 'PLNE', 'ns-3'],
					},
					{
						title: 'Projet de fin d’études (TCC)',
						project: 'Détection et identification d’attaques MitM dans les services de consensus local des FANET avec MARL',
						labs: icLabs,
						period: 'août 2026 — juil. 2027',
						advisors: [aldri.fr],
						description:
							'Les essaims de drones organisés en FANET reposent sur des services de consensus local, dans lesquels chaque drone met à jour un état partagé au moyen d’échanges avec ses voisins ; la synchronisation d’horloges est le cas d’application étudié ici. Comme les messages de contrôle ne sont pas authentifiés, un attaquant de l’homme du milieu (MitM) appartenant à l’essaim peut capturer le message de consensus d’un voisin, modifier la valeur qu’il transporte et le réinjecter sous l’identité de la victime ; le mécanisme de convergence lui-même propage alors la valeur corrompue dans toute la composante connexe. La défense utilise l’apprentissage par renforcement multi-agents (MARL), avec entraînement centralisé et exécution décentralisée (CTDE), pour détecter cette attaque et identifier le drone qui en est responsable : chaque drone embarque son propre agent et décide uniquement à partir des informations disponibles dans son voisinage, en étiquetant chaque message afin qu’une contribution falsifiée soit écartée avant d’être absorbée par le service, et en désignant l’attaquant. Le service et la défense sont développés dans ns-3.38 avec ns3-ai et évalués avec 40 drones dans une topologie clairsemée et partitionnée en permanence.',
						tags: ['FANET', 'Cybersécurité', 'Attaque MitM', 'Consensus', 'MARL', 'ns-3'],
					},
				],
			},
			projects: {
				id: 'projets',
				title: 'Projets',
				items: [
					{
						title: 'Caixinha',
						description:
							'Application de partage des dépenses de groupe, développée en binôme. En cours de développement ; lien pas encore disponible. Architecture par composants : Front-Caixinha (SPA React/Vite, UI/UX et consommation de l’API), Api-Caixinha (NestJS + TypeScript, Prisma + PostgreSQL, authentification/autorisation et règles métier) et Mobile-Caixinha (React Native, interface mobile et consommation de la même API). Connexion avec Google.',
						tags: ['React', 'Vite', 'React Native', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OAuth', 'GitHub Actions'],
					},
					{
						title: 'Animae',
						description:
							'Jeu indépendant en 2D de type Metroidvania, développé seul, centré sur le lien avec la nature et la reconstruction d’un monde dévasté. En cours de développement ; lien pas encore disponible.',
						tags: ['C++', 'SDL2', 'OpenGL', 'Game Dev', '2D'],
					},
					{
						title: 'Site personnel (ce site)',
						description:
							'Portfolio statique réalisé avec Astro + Tailwind, conçu pour être rapide, accessible et facile à maintenir (GitHub Pages).',
						tags: ['Astro', 'Tailwind', 'GitHub Pages', 'GitHub Actions'],
						links: [
							{ label: 'GitHub', href: 'https://github.com/Viniciustda/Vinicius-Trindade' },
						],
					},
				],
			},
			experience: {
				id: 'experience',
				title: 'Expérience',
				items: [
					{
						role: 'Étudiant-chercheur (initiation à la recherche)',
						org: 'Wireless Networks Lab (WiNet) & CCSC Research Lab — UFMG • Directeur de recherche : Prof. Aldri Luiz dos Santos',
						period: 'oct. 2024 — avr. 2027 (bénévole : oct. 2024 — avr. 2025 • boursier CNPq : mai 2025 — avr. 2027)',
						highlights: [
							'Projet : « CiberComUAV — Cybersécurité des communications dans les réseaux aériens de drones ».',
							'Recherche appliquée en sécurité des réseaux, avec des simulations dans ns-3.',
						],
						link: { label: 'Voir les détails', href: '#recherche' },
					},
					{
						role: 'Sous-lieutenant',
						org: 'Armée brésilienne — 4e Compagnie légère de transmissions de montagne',
						period: 'déc. 2021 — juin 2023',
						highlights: [
							'J’ai commandé des sections et coordonné leur disponibilité, leur instruction et leur emploi opérationnel.',
							'J’ai dirigé des services administratifs (opérations, logistique et finances), surtout le service financier, où j’ai passé le plus de temps.',
							'J’ai été instructeur dans des cours et des stages, en contribuant à la formation de caporaux et de soldats.',
						],
					},
					{
						role: 'Élève officier de réserve',
						org: 'CPOR-BH (Centre de préparation des officiers de réserve)',
						period: 'févr. 2021 — déc. 2021',
						highlights: ['Formation militaire et au commandement ; meilleurs résultats de la promotion.'],
					},
					{
						role: 'Membre en formation (trainee)',
						org: 'iJunior UFMG — Junior-Entreprise',
						period: 'août 2020 — janv. 2021',
						highlights: ['Expérience de la gestion de projets, du respect des délais et du travail en équipe.'],
					},
				],
			},
			education: {
				id: 'formation',
				title: 'Formation',
				items: [
					{
						program: 'Licence (Bacharelado) en informatique',
						school: 'Université fédérale du Minas Gerais (UFMG)',
						period: '2020 — aujourd’hui',
					},
					{
						program: 'Diplôme de technicien en bâtiment',
						school: 'Institut fédéral du Minas Gerais (IFMG)',
						period: '2017 — 2019',
					},
				],
			},
			certificates: {
				id: 'certificats',
				title: 'Certificats',
				items: [
					{
						title: 'Stage sectoriel de gestion financière',
						detail: 'Armée brésilienne',
						images: [
							{ src: 'Certificados/fin_1.jpeg', alt: 'Stage sectoriel de gestion financière — 1' },
							{ src: 'Certificados/fin_2.jpeg', alt: 'Stage sectoriel de gestion financière — 2' },
						],
					},
					{
						title: 'Stage sectoriel d’assistant du service financier',
						detail: 'Armée brésilienne',
						images: [
							{ src: 'Certificados/aux_set_fin_1.jpeg', alt: 'Stage sectoriel d’assistant du service financier — 1' },
							{ src: 'Certificados/aux_set_fin_2.jpeg', alt: 'Stage sectoriel d’assistant du service financier — 2' },
						],
					},
					{
						title: 'Stage sectoriel de gestion d’entrepôt',
						detail: 'Armée brésilienne',
						images: [
							{ src: 'Certificados/almox_1.jpeg', alt: 'Stage sectoriel de gestion d’entrepôt — 1' },
							{ src: 'Certificados/almox_2.jpeg', alt: 'Stage sectoriel de gestion d’entrepôt — 2' },
						],
					},
					{
						title: 'Stage sectoriel de gestion des stocks',
						detail: 'Armée brésilienne',
						images: [
							{ src: 'Certificados/est_1.jpeg', alt: 'Stage sectoriel de gestion des stocks — 1' },
							{ src: 'Certificados/est_2.jpeg', alt: 'Stage sectoriel de gestion des stocks — 2' },
						],
					},
					{
						title: 'Stage de base du combattant de montagne',
						detail: 'Armée brésilienne',
						image: { src: 'Certificados/mth.jpeg', alt: 'Stage de base du combattant de montagne' },
					},
					{
						title: 'Formation en réseaux et téléphonie VoIP',
						detail: 'Armée brésilienne',
						image: { src: 'Certificados/voip.jpeg', alt: 'Formation en réseaux et téléphonie VoIP' },
					},
					{
						title: 'Perfectionnement en câblage structuré',
						detail: 'SENAI MG',
						image: { src: 'Certificados/cabeamento.jpeg', alt: 'Perfectionnement en câblage structuré' },
					},
					{
						title: 'Perfectionnement en installation de réseaux sans fil',
						detail: 'SENAI MG',
						image: { src: 'Certificados/wireless.jpeg', alt: 'Perfectionnement en installation de réseaux sans fil' },
					},
					{
						title: 'Perfectionnement en réseaux informatiques',
						detail: 'SENAI MG',
						image: { src: 'Certificados/redes.jpeg', alt: 'Perfectionnement en réseaux informatiques' },
					},
				],
			},
			achievements: {
				id: 'distinctions',
				title: 'Distinctions',
				groups: [
					{
						title: 'Armée brésilienne',
						items: [
							{
								title: 'Félicitations du commandant de la 4e Compagnie légère de transmissions de montagne',
								detail: '4e Compagnie légère de transmissions de montagne — 2022',
								image: {
									src: 'Conquistas/re_cmd_22.jpeg',
									alt: 'Félicitations du commandant de la 4e Compagnie légère de transmissions de montagne (2022)',
								},
							},
							{
								title: 'Félicitations du commandant de la 4e Compagnie légère de transmissions de montagne',
								detail: '4e Compagnie légère de transmissions de montagne — 2023',
								images: [
									{
										src: 'Conquistas/re_cmd_23-1.jpeg',
										alt: 'Félicitations du commandant de la 4e Compagnie légère de transmissions de montagne (2023) — 1',
									},
									{
										src: 'Conquistas/re_cmd_23-2.jpeg',
										alt: 'Félicitations du commandant de la 4e Compagnie légère de transmissions de montagne (2023) — 2',
									},
								],
							},
							{
								title: 'Félicitations de l’inspecteur administratif de la 4e Compagnie légère de transmissions de montagne',
								detail: '4e Compagnie légère de transmissions de montagne — 2023',
								image: {
									src: 'Conquistas/re_fis.jpeg',
									alt: 'Félicitations de l’inspecteur administratif de la 4e Compagnie légère de transmissions de montagne (2023)',
								},
							},
							{
								title: 'Prix de la meilleure gestion financière de la 4e Brigade d’infanterie légère de montagne',
								detail: '4e Compagnie légère de transmissions de montagne — 2022',
							},
							{
								title: 'Médaille du prix Correia Lima',
								detail: 'CPOR-BH — 2021',
								image: {
									src: 'Conquistas/medalha.jpeg',
									alt: 'Médaille du prix Correia Lima (2021)',
								},
							},
							{
								title: '1er au classement général de la promotion',
								detail: 'CPOR-BH — 2021',
								image: {
									src: 'Conquistas/geral.jpeg',
									alt: '1er au classement général de la promotion (2021)',
								},
							},
							{ title: '1er de la filière Transmissions', detail: 'CPOR-BH — 2021' },
							{
								title: 'Meilleure condition physique',
								detail: 'CPOR-BH — 2021',
								image: {
									src: 'Conquistas/apt_fis.jpeg',
									alt: 'Meilleure condition physique (2021)',
								},
							},
							{
								title: 'Distinction lors de l’opération FIT (Fibre, Initiative et Ténacité)',
								detail: 'CPOR-BH — 2021',
								image: {
									src: 'Conquistas/fit.jpeg',
									alt: 'Distinction lors de l’opération FIT (2021)',
								},
							},
							{ title: 'Signature du Livre d’or', detail: 'CPOR-BH — 2021' },
						],
					},
				],
			},
			contact: {
				id: 'contact',
				title: 'Contact',
				locationLine: 'Belo Horizonte, Brésil',
				links: [
					{ label: 'E-mail (UFMG)', href: 'mailto:viniciustda@ufmg.br', icon: 'mail' },
					{ label: 'E-mail (personnel)', href: 'mailto:v.trindade.d.a@gmail.com', icon: 'gmail' },
					{ label: 'LinkedIn', href: 'https://linkedin.com/in/v-trindade', icon: 'linkedin' },
					{ label: 'GitHub', href: 'https://github.com/Viniciustda', icon: 'github' },
					{ label: 'YouTube', href: 'https://www.youtube.com/@Viniciustda', icon: 'youtube' },
					{ label: 'Lattes', href: 'http://lattes.cnpq.br/3991476030874999', icon: 'lattes' },
					{ label: 'ORCID', href: 'https://orcid.org/0009-0007-9208-8634', icon: 'orcid' },
				],
			},
		},
		ui: {
			skipToContent: 'Aller au contenu',
			languageSwitchLabel: 'Choisir la langue',
			themeToggleLabel: 'Changer de thème',
			photoAlt: 'Photo de Vinicius Trindade',
			labs: 'Laboratoires',
			advisors: 'Encadrement',
			coauthors: 'Coauteurs',
			repository: 'Dépôt',
			publication: 'Publication',
			projectsHint: 'Faites défiler pour explorer →',
			previousProject: 'Projet précédent',
			nextProject: 'Projet suivant',
			timeline: 'Chronologie',
			certificatesHint: 'Faites glisser → cliquez pour voir',
			images: 'images',
			read: 'Lire',
			close: 'Fermer',
			previous: 'Précédent',
			next: 'Suivant',
			previousImage: 'Image précédente',
			nextImage: 'Image suivante',
		},
		footer: { text: `© ${new Date().getFullYear()} Vinicius Trindade. Tous droits réservés.` },
	},
};
