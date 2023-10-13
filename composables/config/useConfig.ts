import type { Config, Flow, Hero } from './types'
import flowConfig from '~/config/flow.json';
import heroConfig from '~/config/hero.json';

const hero: Hero = heroConfig as Hero;
const flow: Flow[] = flowConfig as Flow[];

export default function (): Config {
	return {
		hero,
		flow,
	}
}
