import { EmploymentType, Technologies, Assets, type SkillsParams, type Technology } from './utils';
import type {
	CareerParams,
	HomeParams,
	NavBarParams,
	PersonalProjectsParams,
	ResumePageParams
} from './utils';

export const PortfolioTitle = 'Updated portfolio site';

export const NavBar: NavBarParams = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const Home: HomeParams = {
	title: 'Home Page',
	name: 'Kunal',
	lastName: 'Singh',
	description:
		'First template thingie in progress',
	links: {
		github: 'https://github.com/velociraptor98',
		linkedin: 'https://www.linkedin.com/in/kunalsingh98/',
		// email: 'riadh-adrani@hotmail.fr'
	},
	skills: Object.keys(Technologies).map((key) => (Technologies as Record<string, Technology>)[key])
};

export const PersonalProjects: PersonalProjectsParams = {
	title: 'Personal Projects',
	items: [
		{
			color: '#5e95e3',
			description:
				'Hopp is a web app providing community, journaling, activity suggestions, and healthcare service access for those feeling lonely or going through a hard time',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'Hopp',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.JavaScript, Technologies.ReactJs, Technologies.NodeJs, Technologies.MongoDB],
			type: 'Web App'
		},
		{
			color: '#5e95e3',
			description:
				'A general purpose 2D game engine written in modern C++. The engine is built using an ECS pattern, allowing for ease of extension for building simple 2-D games.',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'G2D Engine',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.Cpp],
			type: 'Game Engine'
		},
		{
			color: '#5e95e3',
			description:
				'An old-school arcade game in the same vein as Arcade shooters.The game features randomly generated enemies along with fun power-ups with the objective of obtaining the highest score.',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'Galaxy Shooter',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.Csharp],
			type: 'Game'
		},
		{
			color: '#ff3e00',
			description:
				'A web app that scrapes the daily headlines from various news sources and performs sentiment analysis on the same. The application aggregates the data and separates them based on their emotion.',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'News Gatherer',
			period: {
				from: new Date()
			},
			technologies: [Technologies.Python, Technologies.Pandas, Technologies.JavaScript,Technologies.HTML, Technologies.CSS],
			type: 'Web App'
		}
	]
};

export const ProfessionalCareerParams: CareerParams = {
	title: 'Professional Experience',
	items: [
		{
			company: { logo: Assets.Unknown, name: 'SmartServ' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Pune',
			period: { from: new Date() },
			skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
			title: 'Software Design Engineer - II'
		},
		{
			company: { logo: Assets.Unknown, name: 'SmartServ' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Pune',
			period: { from: new Date() },
			skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
			title: 'Software Design Engineer - I'
		},
		{
			company: { logo: Assets.Unknown, name: 'MAQ Software' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Hyderabad',
			period: { from: new Date() },
			skills: [Technologies.Csharp, Technologies.HTML, Technologies.CSS],
			title: 'Software Engineer - I'
		},
		{
			company: { logo: Assets.Unknown, name: 'MAQ Software' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.Internship,
			industry: 'Software Development',
			location: 'Hyderabad',
			period: { from: new Date() },
			skills: [Technologies.Csharp, Technologies.HTML, Technologies.CSS],
			title: 'Software Engineer - I'
		}
	]
};

export const MySkillsParams: SkillsParams = {
	skills: [
		{
			technology: Technologies.JavaScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.TypeScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Svelte,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Sass,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.CSS,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		}
	],
	title: 'My Skills'
};

export const ResumeParams: ResumePageParams = {
	title: 'Resumé',
	cv: ''
};

// export const SearchPageParams = {
// 	title: 'Search'
// };
