import Link from "next/link";
import Image from "next/image"

export default function Navbar () {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokenext" />
                <h1>Pokenect</h1>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                            <a>Sobre</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}