<script>
	import EducationCard from '$lib/components/Education/EducationCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { EducationParams, PortfolioTitle } from '$lib/params';
	import { useTitle } from '$lib/utils';

	const { education, title } = EducationParams;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="education">
	<MainTitle>{title}</MainTitle>
	<div class="education-educations">
		{#each education as entity}
			<EducationCard education={entity} />
		{/each}
	</div>
</div>

<style lang="scss">
	.education {
		display: flex;
		flex-direction: column;

		&-educations {
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}
	}
</style>
