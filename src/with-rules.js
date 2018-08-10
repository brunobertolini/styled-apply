import withStyles from './with-styles'

const parse = themed =>
	themed.reduce(
		(memo, current) => ({
			propTypes: { ...memo.propTypes, ...current.propTypes },
			defaultProps: { ...memo.defaultProps, ...current.defaultProps },
			rules: { ...memo.rules, ...current.rules },
		}),
		{
			propTypes: {},
			defaultProps: {},
			rules: {},
		}
	)

const withPropTypes = (themed, style, options = {}) => Component => {
	const { propTypes, defaultProps, rules } = parse(themed)

	Component.styledProps = {
		...propTypes,
		...Component.styledProps,
	}

	Component.propTypes = {
		...propTypes,
		...Component.propTypes,
	}

	Component.defaultProps = {
		...defaultProps,
		...Component.defaultProps,
	}

	return withStyles(style, { ...rules, ...options })(Component)
}

export default withPropTypes
