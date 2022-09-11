export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">Sailerdev</a>
    <ul>
      <li>
        <a href="/about">Sobre mim</a>
        <a href="/projects">Projetos</a>
        <a href="/skills">Habilidades</a>
      </li>
    </ul>
  </nav>
}