import "./menu.css";

export function Menu(){
    let logo = "https://static.vecteezy.com/system/resources/previews/012/697/300/non_2x/3d-c-programming-language-logo-free-png.png";

    let menuShow = () => {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open')
            document.querySelector('.icon').src = "../src/assets/menu_white_36dp.svg"
        } else {
            menuMobile.classList.add('open')
            document.querySelector('.icon').src = "../src/assets/close_white_36dp.svg"
        }
    }
    return(
        <header>
            <nav className="nav-bar">
                <div className="logo">
                    <img width="70" src={logo} alt="" />
                </div>

                <div className="nav-list">
                    <ul>
                        <li className="nav-item">Alunos</li>
                        <li className="nav-item">Professores</li>
                    </ul>
                </div>

                <div className="login-button">
                    <button className="btn btn-outline-primary">Contato</button>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}>
                        <img className="icon" src="../src/assets/menu_white_36dp.svg" alt="Icon Hámburguer" />
                    </button>
                </div>
            </nav>

        <div className="mobile-menu">
            <ul>
                <li className="nav-item">Início</li>
                <li className="nav-item">Projetos</li>
                <li className="nav-item">Sobre</li>
            </ul>
            <div className="login-button">
                <button>Entrar</button>
            </div>
        </div>
        </header>
    )
}