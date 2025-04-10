import s from "./Banner.module.scss";

export default function Banner() {
    return (
        <>
            <section className={s.banner}>
                <div className={s.background}>
                    <img src="/src/assets/raster/banner.png" alt="" />
                </div>
                <div className={s.container}>
                    <button className={s.about}>
                        О компании <span>АвтоТорг</span>
                    </button>
                </div>
            </section>
        </>
    )
}