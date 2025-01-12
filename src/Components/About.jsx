export default function About() {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-dark py-4 fixed-top">
                <div className="container">
                    <a
                        className="navbar-brand text-uppercase fw-medium fs-3 text-white"
                        href="#"
                    >
                        Start Framework
                    </a>
                    <button
                        class="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a
                                className="nav-link text-uppercase text-white me-md-3 mt-2 fw-medium"
                                href="#about"
                            >
                                About
                            </a>
                            <a
                                className="nav-link text-uppercase text-white me-md-3 mt-2 fw-medium"
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                            <a
                                className="nav-link text-uppercase text-white fw-medium mt-2"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
