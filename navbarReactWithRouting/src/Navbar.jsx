export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">Sailer<span className="span-title">dev</span></a>
    <ul>
      <li>
        <a href="/about">Sobre mim</a>
      </li>
      <li>
        <a href="/projects">Projetos</a>
      </li>
      <li>
        <a href="/skills">Habilidades</a>
      </li>
    </ul>
  </nav>
}