import { EmploymentType, EducationType, Technologies, Assets, type SkillsParams, type Technology } from './utils';
import type {
	CareerParams,
	HomeParams,
	NavBarParams,
	PersonalProjectsParams,
	ResumePageParams,
	EducationPageParams
} from './utils';

export const PortfolioTitle = 'Kunal Singh Portfolio';

export const NavBar: NavBarParams = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	education: 'Academic'
};

export const Home: HomeParams = {
	title: 'Home Page',
	name: 'Kunal',
	lastName: 'Singh',
	description:
		'Welcome to my digital realm, where lines of code converge to craft innovative solutions and bring ideas to life. I am a passionate software developer, dedicated to weaving creativity and functionality into every project I undertake. Currently based in UK.',
	links: {
		github: 'https://github.com/velociraptor98',
		linkedin: 'https://www.linkedin.com/in/kunalsingh98/',
		email: 'litany05_telefax@icloud.com'
	},
	skills: Object.keys(Technologies).map((key) => (Technologies as Record<string, Technology>)[key])
};

export const PersonalProjects: PersonalProjectsParams = {
	title: 'Personal Projects',
	items: [
		{
			color: '#5e95e3',
			description:
				'This project is developed with the aim of providing an alternate dashboard to the existing code carbon dashboard. Built using react and tremor to provide a modern and responsive web dashboard to monitor the carbon and energy consumption of any big data pipeline.',
			links: [{ to: 'https://verdant-boba-456952.netlify.app/', label: 'WebApp' }],
			logo: Assets.JavaScript,
			name: 'CarbonVis',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.JavaScript, Technologies.ReactJs, Technologies.NodeJs],
			type: 'Web App'
		},
		{
			color: '#5e95e3',
			description:
				'Hopp is a web app providing community, journaling, activity suggestions, and healthcare service access for those feeling lonely or going through a hard time',
			links: [{ to: 'https://github.com/velociraptor98/junction', label: 'GitHub' }],
			logo: Assets.JavaScript,
			name: 'Hopp',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.JavaScript, Technologies.ReactJs, Technologies.NodeJs, Technologies.MongoDB,Technologies.ExpressJs],
			type: 'Web App'
		},
		{
			color: '#5e95e3',
			description:
				'A general purpose 2D game engine written in modern C++. The engine is built using an ECS pattern, allowing for ease of extension for building simple 2-D games.',
			links: [{ to: 'https://github.com/velociraptor98/G2D-Game-Engine', label: 'GitHub' }],
			logo: Assets.Cpp,
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
			links: [{ to: 'https://veloci98.itch.io/galaxy-shooter', label: 'itch.io' }],
			logo: Assets.Unity,
			name: 'Galaxy Shooter',
			period: {
				from: new Date(),
				to: new Date()
			},
			technologies: [Technologies.Csharp,Technologies.Unity],
			type: 'Game'
		},
		{
			color: '#ff3e00',
			description:
				'A web app that scrapes the daily headlines from various news sources and performs sentiment analysis on the same. The application aggregates the data and separates them based on their emotion.',
			links: [{ to: 'https://github.com/velociraptor98/news-gatherer', label: 'GitHub' }],
			logo: Assets.Python,
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
			company: { name: 'SmartServ (now Zentrades)' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Pune',
			period: { from: new Date('October 12, 2021 00:00:00'), to: new Date('September 15, 2022 00:00:00') },
			skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
			title: 'Software Design Engineer - II'
		},
		{
			company: { name: 'SmartServ (now Zentrades)' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Pune',
			period: { from: new Date('October 12, 2020 00:00:00'), to: new Date('October 12, 2021 00:00:00') },
			skills: [Technologies.JavaScript, Technologies.HTML, Technologies.CSS],
			title: 'Software Design Engineer - I'
		},
		{
			company: { name: 'MAQ Software' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Hyderabad',
			period: { from: new Date('July 06, 2020 00:00:00'), to: new Date('October 09, 2020 00:00:00') },
			skills: [Technologies.Csharp, Technologies.HTML, Technologies.CSS],
			title: 'Software Engineer - I'
		},
		{
			company: { name: 'MAQ Software' },
			description: 'Creating awesome applications for customers.',
			employmentType: EmploymentType.Internship,
			industry: 'Software Development',
			location: 'Hyderabad',
			period: { from: new Date('January 06, 2020 00:00:00'), to: new Date('July 04, 2020 00:00:00') },
			skills: [Technologies.Csharp, Technologies.HTML, Technologies.CSS],
			title: 'Software Engineer - I'
		}
	]
};

export const MySkillsParams: SkillsParams = {
	languages:[
		{
			technology: Technologies.JavaScript,
			description:
				''
		},
		{
			technology: Technologies.TypeScript,
			description:
				''
		},
		{
			technology:Technologies.Cpp,
			description:''
		},
		{
			technology:Technologies.Csharp,
			description:''
		},
		{
			technology:Technologies.Rust,
			description:''
		},
		{
			technology:Technologies.Go,
			description:''
		},
		{
			technology:Technologies.Python,
			description:''
		},
	],
	frameworks:[
		{
			technology: Technologies.Svelte,
			description:
				''
		},
		{
			technology: Technologies.CSS,
			description:
				''
		},
		{
			technology:Technologies.NodeJs,
			description:''
		},
		{
			technology:Technologies.Tailwind,
			description:''
		},
		{
			technology:Technologies.ReactJs,
			description:''
		},
		{
			technology:Technologies.ExpressJs,
			description:''
		},
		{
			technology:Technologies.Electron,
			description:''
		},
	],
	gameengines:[
		{
			technology:Technologies.Unity,
			description:''
		},
		{
			technology:Technologies.Unreal,
			description:''
		},
		{
			technology:Technologies.Godot,
			description:''
		},
	],
	databases:[
		{
			technology: Technologies.MongoDB,
			description: ''
		},
		{
			technology: Technologies.Redis,
			description: ''
		}
	],
	tooling:[
		{
			technology: Technologies.AWS,
			description: ''
		},
		{
			technology: Technologies.Nginx,
			description: ''
		}
	],
	title: 'My Skills'
};

export const ResumeParams: ResumePageParams = {
	title: 'Resumé',
	cv: ''
};

export const EducationParams: EducationPageParams = {
	title: 'Education',
	education:[
		{
			UniversityName:{name: "University of Exeter",logo:Assets.Exeter},
			location:'Exeter, UK',
			educationType: EducationType.Msc,
			subject: 'Advanced Computer Science',
			period:{ from: new Date('September 16, 2022 00:00:00'), to: new Date('September 25, 2023 00:00:00')}
		},
		{
			UniversityName:{name: "BML Munjal University",logo:Assets.Bml},
			location:'Gurugram, India',
			educationType: EducationType.BTech,
			subject: 'Computer Science',
			period:{ from: new Date('August 14, 2016 00:00:00'), to: new Date('July 14, 2020 00:00:00')}
		}
	]

}
