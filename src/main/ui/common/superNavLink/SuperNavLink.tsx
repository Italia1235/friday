import s from './SuperNavLink.module.css'

export const SuperNavLink = ({text, url}:SuperNavLinkPropsType) => {
    return (
        <div className={s.navLink}>
            <a href={`#${url}`}>{text}</a>
        </div>
    )
}

type SuperNavLinkPropsType = {
    text?:string
    url?:string
}