import Head from "next/head"
import Link from "next/link"

export default function Index() {
    return (
        <div>
            <Head>
                <title>Index</title>
                <link rel="icon" href="/Outros/favicon.ico" />
            </Head>

            <main>
                <nav>
                    <ul>
                        <li>
                            <Link href="/home">
                                <a>Clique Aqui!</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    )
}
