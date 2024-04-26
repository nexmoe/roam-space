import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // your custom flat configs go here, for example:
    // {
    //   files: ['**/*.ts', '**/*.tsx'],
    //   rules: {
    //     'no-console': 'off' // allow console.log in TypeScript files
    //   }
    // },
    // {
    //   ...
    // }
    {
     
        ignores: ['dist', '**/dist/**', 'public', '**/public/**', 'auto-imports.d.ts', '**/auto-imports.d.ts/**', 'components.d.ts', '**/components.d.ts/**', '.output', '**/.output/**', 'node_modules', '**/node_modules/**', 'components/ui', '**/components/ui/**'],

    }
)
