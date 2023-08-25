<script lang="ts">
	import { useTitle, type FeaturedSkill } from '$lib/utils';
	import { MySkillsParams, PortfolioTitle } from '$lib/params';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	const {languages, gameengines, frameworks, databases, tooling,title } = MySkillsParams;
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
				bgImg={framework.technology.logo}
			>
				<CardTitle title={framework.technology.name} />
			</Card>
		{/each}
	</div>
	<MainTitle>Databases</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each databases as database}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				bgImg={database.technology.logo}
			>
				<CardTitle title={database.technology.name} />
			</Card>
		{/each}
	</div>
	<MainTitle>Game Engines</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each gameengines as gameengine}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				bgImg={gameengine.technology.logo}
			>
				<CardTitle title={gameengine.technology.name} />
			</Card>
		{/each}
	</div>
	<MainTitle>Cloud/DevOps</MainTitle>
	<div class="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each tooling as tool}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				bgImg={tool.technology.logo}
			>
				<CardTitle title={tool.technology.name} />
			</Card>
		{/each}
	</div>
</div>
