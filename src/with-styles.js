import React from 'react'
import styled from 'styled-components'
import styledBy from 'styled-by'

const withDisplayName = Component => {
	const styledProps = Object.keys(Component.styledProps || {})
	const Named = props => <Component {...props} styled={styledProps} />
	Named.displayName = Component.displayName || Component.name || 'Component'
	return Named
}

const withStyles = (styles, options) => component => styled(
	withDisplayName(component)
)`
	${typeof styles !== 'object' && styles} ${(typeof styles === 'object' ||
		options) &&
		styledBy(options || styles, component.defaultProps)};
`

export default withStyles
