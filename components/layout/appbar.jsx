import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';

function Appbar({ brand, links }) {
  const router = useRouter();

  return (
    <Navbar expand="lg" variant="dark" bg="primary" className="shadow mb-3">
      <Container>
        <Link className="navbar-brand" href="/">
          {brand}
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link
                  className={`nav-link ${
                    router.pathname === link.href ? 'active' : ''
                  }`}
                  href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
