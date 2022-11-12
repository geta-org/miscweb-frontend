import Link from "next/link"

export default function Index() {
  return (
    <div>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="home">
                <a>Clique Aqui!</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
