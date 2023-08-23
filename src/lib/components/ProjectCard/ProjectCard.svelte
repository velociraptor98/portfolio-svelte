<script lang="ts">
	import type { Project } from '$lib/utils';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import { theme } from '$lib/stores/theme';
	export let project: Project;
</script>

<Card color={project.color}>
	<CardLogo alt={project.name} src={project.logo} size={40} radius={'0'} />
	<div class="project-card-top">
		<CardTitle title={project.name} />
		<div class="project-card-links">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<p class="project-card-description">{project.description}</p>
	<CardDivider />
	<div class="project-card-technologies">
		{#each project.technologies as tech}
			<ChipIcon logo={tech.logo} name={tech.name} inverted={$theme && tech.inverted} />
		{/each}
	</div>
</Card>

<style lang="scss">
	.project-card {
		&-period,
		&-description {
			margin-bottom: 20px;
		}

		&-top {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-links,
		&-technologies {
			display: flex;
		}

		&-mid {
			display: flex;
			justify-content: space-between;
			color: var(--secondary-text);
			font-size: 0.9em;
			font-style: italic;
			font-weight: 300;
		}

		&-bottom {
			display: flex;
			justify-content: space-between;
			font-size: 0.75em;
			font-weight: 400;
		}

		&-type {
			text-transform: uppercase;
		}

		&-description {
			line-height: 1.4em;
			font-size: 0.9em;
			flex: 1;
			color: var(--accent-text);
		}
	}
</style>
