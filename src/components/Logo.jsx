import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';

function Logo({ children, style,to }) {
    const baseLogoStyle = "flex items-center gap-2 text-3xl  font-bold"
    const styles = {
        logoPrimary: baseLogoStyle + " text-orange-600",
        logoSecondary: baseLogoStyle + " text-white"
    }

    return (
        <Link to={to} className={styles[style]}>
            <ImSpoonKnife />
            <span>{children}</span>
        </Link>
    )
}

export default Logo