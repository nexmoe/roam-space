interface Catalog {
	title: string
	anchor: string
	active: boolean
}

interface State {
	catalog: Catalog[]
}

export default defineStore('global', {
	state: () => <State>({
		catalog: [],
	}),
	actions: {
		setCatalog(catalog: Catalog[]) {
			this.catalog = catalog
		},
	},
})
