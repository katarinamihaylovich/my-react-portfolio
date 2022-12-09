import Nav from "./Nav";
import React from 'react';

function Header ({currentPage, handlePageChange }) {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <Nav currentPage = {currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;