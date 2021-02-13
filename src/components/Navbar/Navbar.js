import React from 'react'

const Navbar = () => {
    return (
        <div style={{marginBottom:'20px'}} >
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand text-center" href="#">Employer Dashboard</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        </nav>
        </div>
    )
}

export default Navbar
