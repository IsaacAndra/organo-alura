import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <div>
            <ul>
                <li>
                    <a href="https://twitter.com/andrade_techs">
                        <img src="/imagens/tw.png" alt="Logo Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/i.andradeofficial/">
                        <img src="/imagens/ig.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <img src="/imagens/logo.png" alt="" />
        </div>
        <div>
            <p>
                © Desenvolvido por Isaac Andrade.
            </p>
        </div>
    </footer>)
}

export default Rodape