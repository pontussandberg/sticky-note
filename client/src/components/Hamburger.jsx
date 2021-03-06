import React from 'react';

const Hamburger = ({ onClick, isMobile, isSidebarOpen, classes = '' }) => {

    const getHamburgerContainerClasses = () => {
        return `${classes} hamburger-container `
    }

    return (
        <div className={getHamburgerContainerClasses()}>
            <button className="hamburger" onClick={onClick}>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px">
                    <path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z" />
                </svg>
            </button>
        </div>
    );
}

export default Hamburger;