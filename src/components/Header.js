import "../styles/Header.css";

function Header(){
    return (
        <div className="Header">
            <div className="header__logo">
                <h2>Logo</h2>
            </div>
            <div className="header__menu">
                <a href="https://www.google.com.br">Home</a>
                <a href="https://www.google.com.br">Sobre</a>
            </div>
        </div>
    );
}

export default Header;