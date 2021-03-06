import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header() {
    return (
        <Navbar bg="light">
            <Container fluid>
                <Navbar.Brand href="/">
                    <i className="bi bi-suit-diamond-fill logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
                        <Nav.Link href="/blocks">Blocks</Nav.Link>
                        <Nav.Link href="/txs">Txs</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/address">Address</Nav.Link>
                        <Nav.Link href="/contract">Contract</Nav.Link>
                        <Nav.Link href="/trace">Trace</Nav.Link>
                        <NavDropdown title="Tools" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/tools#gas">Gas Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="/tools#calls">Contract ABI Calls</NavDropdown.Item>
                            <NavDropdown.Item href="/tools#convert">Convert Data</NavDropdown.Item>
                            <NavDropdown.Item href="/tools#signing">Signing Message</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/subscribe">Subscribe Debug</NavDropdown.Item>
                            <NavDropdown.Item href="/tools#rpc-testing">JSON-RPC Testing</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/api">API</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <input className="form-control border-0 search-input" type="search" width={1000}/>
                        <span className="input-group-append">
                        <button className="btn btn-outline-secondary border-0 search-button" type="button">
                            <i className="bi-search"/>
                        </button>
                        </span>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}