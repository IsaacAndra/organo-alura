import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <div>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
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