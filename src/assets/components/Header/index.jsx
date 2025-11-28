import style from "./style.module.css"

const Header = () => {
    return(
        <header>
        <div className="header_wrp">
        <h1>Test React New</h1>
        <nav>
            <ul className={style.header_wrp}>
                <li className={style.header_wrp}><a href="#">Contact</a></li>
                <li className={style.header_wrp}><a href="#">AboutUs</a></li>
                <li className={style.header_wrp}><a href="#">Info</a></li>
                <li className={style.header_wrp}><a href="#">One more</a></li>
            </ul>
        </nav>
        </div>
        </header>
    ) 
}

export default Header