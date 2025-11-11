import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

const eslintConfig = [
    {
        ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'dist/**'],
    },
    ...tseslint.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
];

export default eslintConfig;
