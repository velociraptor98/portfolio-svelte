<script lang="ts">
	import { useTitle, type FeaturedSkill } from '$lib/utils';
	import { MySkillsParams, PortfolioTitle } from '$lib/params';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import slugify from 'slugify';
	const {languages, gameengines, frameworks,title } = MySkillsParams;
	import { base } from '$app/paths';
	const skillHref = (skill: FeaturedSkill): string => {
		return `${base}/skills/${slugify(skill.technology.name.toLowerCase())}`;
		}
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>

<div class="skills">
	<MainTitle>Languages</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each languages as language}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				href={skillHref(language)}
				bgImg={language.technology.logo}
			>
				<CardTitle title={language.technology.name} />
			</Card>
		{/each}
	</div>
	<MainTitle>Frameworks</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each frameworks as framework}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				href={skillHref(framework)}
				bgImg={framework.technology.logo}
			>
				<CardTitle title={framework.technology.name} />
			</Card>
		{/each}
	</div>
	<MainTitle>Game Engines</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each gameengines as gameengine}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				href={skillHref(gameengine)}
				bgImg={gameengine.technology.logo}
			>
				<CardTitle title={gameengine.technology.name} />
			</Card>
		{/each}
	</div>
</div>
