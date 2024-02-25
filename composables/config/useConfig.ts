import type { Hero } from './types'
import heroConfig from '~/config/hero.json'
import configConfig from '~/config/config.json'

const hero: Hero = heroConfig as Hero

export default function () {
	return {
		hero,
		config: configConfig,
	}
}
