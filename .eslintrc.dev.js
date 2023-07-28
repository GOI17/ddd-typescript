module.exports = {
	extends: ['eslint-config-codely/typescript'],
	rules: {
		'no-console': 'warn'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.dev.json']
			},
			rules: {
				'@typescript-eslint/no-floating-promises': 'warn'
			}
		}
	]
};
