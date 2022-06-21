import Link from "../Link";

export default function Header () {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <Link redirect="" text="Home" />
                    <Link redirect="" text="Contato" />
                    <Link redirect="" text="Sobre" />
                </ul>
            </nav>
        </header>
        </>
    )
}