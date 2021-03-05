const INLINE_ELEMENTS = [
	'pre', 'textarea', 'p', 'span', 'i'
];

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

		'quotes': ['warn', 'single'],
		'quote-props': ['warn', 'consistent-as-needed'],
		'semi': ['warn', 'always'],
		'indent': ['warn', 'tab'],
		'no-tabs': ['warn', {
			allowIndentationTabs: true
		}],
		'comma-dangle': ['warn', 'only-multiline'],
		'comma-spacing': ['warn', {
			before: false, after: true
		}],
		'comma-style': ['warn', 'last'],

		// vue
		'vue/html-indent': [
			'warn', 'tab', {
				alignAttributesVertically: false
			}
		],
		'vue/html-closing-bracket-newline': ['warn', {
			multiline: 'never'
		}],
		'vue/singleline-html-element-content-newline': ['warn', {
			ignoreWhenNoAttributes: true,
			ignoreWhenEmpty: true,
			ignores: INLINE_ELEMENTS
		}],
		'vue/multiline-html-element-content-newline': ['warn', {
			ignoreWhenEmpty: true,
			ignores: INLINE_ELEMENTS,
			allowEmptyLines: false
		}],
		'vue/html-closing-bracket-spacing': ['warn', {
			startTag: 'never',
			endTag: 'never',
			selfClosingTag: 'never'
		}],
		'vue/component-tags-order': ['warn', {
			order: [
				'template', 'script', 'style'
			]
		}],
		'vue/html-self-closing': ['warn', {
			html: {
				void: 'never',
				normal: 'never',
				component: 'never'
			},
			svg: 'always',
			math: 'always'
		}]
	},
};
