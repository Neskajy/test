import s from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <img src="/src/assets/svg/flogo.svg" alt="" />
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            <li className={s.active}>
                                <a href="/">О нас</a>
                            </li>
                            <li>
                                <a href="/catalog">Каталог</a>
                            </li>
                            <li>
                                <a href="/">Где нас найти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}