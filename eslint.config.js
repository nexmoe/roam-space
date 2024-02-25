const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
	stylistic: {
		indent: 'tab',
	},
	ignores: ['dist', '**/dist/**', 'public', '**/public/**', 'auto-imports.d.ts', '**/auto-imports.d.ts/**', 'components.d.ts', '**/components.d.ts/**', '.output', '**/.output/**', 'node_modules', '**/node_modules/**'],
})
