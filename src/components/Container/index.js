import React from "react"
import PropTypes from "prop-types"

import "./index.scss"

const Container = ({ children }) => {
    return (
        <div className="container">{children}</div>
    )
}

Container.propTypes = {
    children: PropTypes.element
}

export default Container
