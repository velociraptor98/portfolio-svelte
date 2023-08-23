<script lang="ts">
	import type { Education } from '$lib/utils';
	import { countMonths, getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';

	export let education: Education;
	const months = countMonths(education.period.from, education.period.to);
	const from = `${getMonthName(
		education.period.from.getMonth()
	)} ${education.period.from.getFullYear()}`;
	const to = education.period.to
		? `${getMonthName(education.period.to.getMonth())} ${education.period.to.getFullYear()}`
		: 'Present';
	const period = `${from} - ${to} · ${months} month${months > 1 ? 's' : ''}`;
</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2}>
	<div class="education">
		<div class="education-data">
			<h3 class="education-title">
				<CardLogo alt={education.UniversityName.name} src={education.UniversityName.logo} size={160} radius={'0'} />
				<!-- <CardTitle title={education.subject} /> -->
				<div class="education-title-divider" />
				<Chip label={education.educationType} size="0.75em" />
			</h3>
			<span class="education-company-name">{education.UniversityName.name}</span>
			<span class="education-company-name">{education.subject}</span>
			<div class="education-period">{period}</div>
			<div class="education-location">{education.location}</div>
		</div>
	</div>
</Card>

<style lang="scss">
	.education {
		display: flex;
		align-items: flex-start;

		&-data {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		@media (max-width: 800px) {
			flex-direction: column;

			&-data {
				margin-left: 0px;
			}
		}

		&-title {
			margin: 0;
			display: flex;
			align-items: center;

			&-divider {
				width: 10px;
			}

			@media (max-width: 800px) {
				& {
					align-items: center;
					margin: 5px 0px;
				}
			}
		}

		&-company-name {
			margin-bottom: 5px;
			font-family: var(--title-f);
			font-size: 1.15em;
		}

		&-period,
		&-location {
			color: var(--accent-text);
			font-size: 0.9em;
			margin-bottom: 5px;
		}

		&-location {
			margin-bottom: 15px;
		}

		&-description {
			margin-bottom: 20px;
		}

		&-skills {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
