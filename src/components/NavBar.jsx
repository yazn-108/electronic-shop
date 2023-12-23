import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './cartComponents/CartIcon';
const NavBar = () => {
    const routes = useSelector(state => state.routes)
    const location = useLocation().pathname
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={"/"} className='navbar-brand'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 187 40">
                        <path fill="#3A724F"
                            fillRule="evenodd"
                            d="M19.87 4.567 22.507 0l7.476 4.317-2.636 4.566c-.463.801.23 1.775 1.138 1.6l5.052-.975 1.635 8.477-5.052.974c-8.172 1.576-14.411-7.184-10.25-14.392Z"
                            clipRule="evenodd">
                        </path>
                        <path fill="#DC8E43"
                            fillRule="evenodd"
                            d="M15.302 35.433 12.665 40l-7.477-4.316 2.637-4.567c.463-.801-.23-1.775-1.139-1.6l-5.051.974L0 22.015l5.052-.974c8.172-1.576 14.41 7.184 10.25 14.392Z"
                            clipRule="evenodd">
                        </path>
                        <path fill="#14424C"
                            fillRule="evenodd"
                            d="M15.53 4.567 12.894 0 5.417 4.317l2.637 4.566c.462.801-.23 1.775-1.139 1.6l-5.052-.975L.23 17.985l5.051.974c8.173 1.576 14.412-7.184 10.25-14.392Z"
                            clipRule="evenodd"></path>
                        <path
                            fill="#C85D1B"
                            fillRule="evenodd"
                            d="M19.65 35.433 22.285 40l7.477-4.316-2.637-4.567c-.462-.801.23-1.775 1.139-1.6l5.051.974 1.635-8.476-5.052-.974c-8.172-1.576-14.41 7.184-10.25 14.392Z"
                            clipRule="evenodd">
                        </path>
                        <path
                            fill="#14424C"
                            d="M163.114 30.153v-8.5c0-1.178.271-2.235.813-3.17.561-.954 1.356-1.702 2.385-2.245 1.029-.542 2.254-.813 3.675-.813a7.23 7.23 0 0 1 1.964.252c.599.15 1.141.365 1.627.645.505.262.935.58 1.291.954h.056a5.5 5.5 0 0 1 1.29-.954 6.772 6.772 0 0 1 1.656-.645 7.541 7.541 0 0 1 1.992-.252c1.421 0 2.646.27 3.675.813 1.028.543 1.823 1.29 2.384 2.245.562.935.842 1.991.842 3.17v8.5h-4.377v-8.36c0-.467-.121-.888-.364-1.262a2.663 2.663 0 0 0-.926-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.4 2.4 0 0 0-.337 1.262v8.36h-4.348v-8.36c0-.467-.122-.888-.365-1.262a2.585 2.585 0 0 0-.954-.954 2.508 2.508 0 0 0-1.347-.365c-.505 0-.963.122-1.374.365a2.654 2.654 0 0 0-.926.954 2.41 2.41 0 0 0-.337 1.262v8.36h-4.348ZM153.603 30.49c-1.477 0-2.759-.28-3.843-.842-1.066-.58-1.889-1.356-2.469-2.328-.58-.991-.87-2.086-.87-3.283v-8.276h4.349v8.164c0 .505.121.973.364 1.403.243.411.571.748.982 1.01.43.243.917.365 1.459.365.524 0 .991-.122 1.403-.365.43-.262.767-.599 1.01-1.01.243-.43.365-.898.365-1.403v-8.164h4.348v8.276c0 1.197-.281 2.292-.842 3.283-.561.972-1.374 1.749-2.44 2.328-1.048.561-2.32.842-3.816.842ZM132.414 30.153v-3.45h6.93c.187 0 .355-.038.505-.113.149-.093.271-.215.364-.364a.93.93 0 0 0 0-.982.9.9 0 0 0-.364-.337.934.934 0 0 0-.505-.14h-2.525c-.936 0-1.787-.15-2.553-.449a4.052 4.052 0 0 1-1.796-1.459c-.43-.673-.645-1.543-.645-2.609 0-.823.196-1.571.589-2.244a4.76 4.76 0 0 1 1.655-1.628 4.568 4.568 0 0 1 2.329-.617h6.929v3.479h-6.256a.97.97 0 0 0-.673.253.841.841 0 0 0-.253.617c0 .262.085.486.253.673a.97.97 0 0 0 .673.253h2.469c1.047 0 1.945.159 2.693.476.767.3 1.356.786 1.768 1.46.43.673.645 1.542.645 2.608 0 .842-.215 1.609-.645 2.3a4.613 4.613 0 0 1-1.684 1.656c-.692.412-1.477.617-2.356.617h-7.547ZM122.94 15.425c1.216 0 2.291.196 3.226.589a6.41 6.41 0 0 1 2.413 1.627 6.993 6.993 0 0 1 1.543 2.469c.355.935.533 1.973.533 3.114 0 1.421-.299 2.684-.898 3.787a6.471 6.471 0 0 1-2.412 2.553c-1.029.617-2.226.926-3.591.926-.58 0-1.132-.075-1.656-.224a5.312 5.312 0 0 1-1.402-.646 3.9 3.9 0 0 1-1.038-1.038h-.085v7.66h-4.348V23.223c0-1.59.318-2.965.954-4.124a6.666 6.666 0 0 1 2.693-2.694c1.16-.654 2.516-.981 4.068-.981Zm0 3.759c-.673 0-1.262.168-1.767.505-.487.318-.861.767-1.123 1.347-.261.56-.392 1.197-.392 1.907 0 .711.131 1.347.392 1.908.262.561.636 1.01 1.123 1.347.505.318 1.094.477 1.767.477.673 0 1.253-.16 1.739-.477a3.297 3.297 0 0 0 1.123-1.347c.28-.561.42-1.197.42-1.908 0-.71-.14-1.346-.42-1.907-.262-.58-.636-1.03-1.123-1.347-.486-.337-1.066-.505-1.739-.505ZM108.617 30.153V15.761h4.377v14.392h-4.377Zm2.188-16.019c-.692 0-1.29-.252-1.795-.757-.505-.505-.758-1.104-.758-1.796s.253-1.29.758-1.795c.505-.524 1.103-.786 1.795-.786s1.291.262 1.796.786c.505.505.757 1.103.757 1.795s-.252 1.29-.757 1.796c-.505.505-1.104.757-1.796.757ZM99.105 30.49c-1.477 0-2.805-.327-3.984-.982a7.462 7.462 0 0 1-2.805-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.462 7.462 0 0 1 2.805-2.693c1.179-.674 2.507-1.01 3.984-1.01 1.478 0 2.796.336 3.956 1.01a7.25 7.25 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.25 7.25 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.291-.169 1.796-.505a3.424 3.424 0 0 0 1.178-1.347c.281-.561.421-1.197.421-1.908 0-.692-.14-1.318-.421-1.88a3.423 3.423 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.144 4.144 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM77.174 35.849v-3.732h7.181c.281 0 .515-.093.702-.28a.83.83 0 0 0 .28-.646v-3.17h-.084a6.59 6.59 0 0 1-1.206 1.094c-.412.3-.88.524-1.403.674a6.023 6.023 0 0 1-1.711.224c-1.272 0-2.413-.3-3.423-.898-.991-.617-1.777-1.468-2.357-2.553-.56-1.084-.841-2.319-.841-3.703 0-1.365.29-2.609.87-3.731.598-1.122 1.468-2.02 2.609-2.693 1.14-.674 2.534-1.01 4.18-1.01 1.571 0 2.927.327 4.068.982a6.624 6.624 0 0 1 2.693 2.72c.636 1.16.954 2.526.954 4.097v8.416c0 1.29-.383 2.31-1.15 3.058-.748.767-1.786 1.15-3.114 1.15h-8.248Zm4.825-9.483c.673 0 1.253-.15 1.74-.449a3.18 3.18 0 0 0 1.121-1.262 3.834 3.834 0 0 0 .393-1.74c0-.673-.13-1.29-.392-1.851-.262-.561-.636-1.001-1.123-1.319-.486-.337-1.066-.505-1.74-.505-.654 0-1.234.159-1.739.477-.486.318-.86.748-1.122 1.29-.261.543-.392 1.15-.392 1.824 0 .655.13 1.253.392 1.796.262.523.636.944 1.123 1.262.504.318 1.084.477 1.739.477ZM65.473 30.49c-1.477 0-2.805-.327-3.983-.982a7.46 7.46 0 0 1-2.806-2.693c-.673-1.141-1.01-2.422-1.01-3.844 0-1.44.337-2.721 1.01-3.843a7.46 7.46 0 0 1 2.806-2.693c1.178-.674 2.506-1.01 3.983-1.01 1.478 0 2.796.336 3.956 1.01a7.252 7.252 0 0 1 2.777 2.693c.692 1.122 1.038 2.403 1.038 3.843 0 1.422-.346 2.703-1.038 3.844a7.252 7.252 0 0 1-2.777 2.693c-1.178.655-2.497.982-3.956.982Zm0-3.787c.692 0 1.29-.169 1.796-.505a3.43 3.43 0 0 0 1.178-1.347c.28-.561.42-1.197.42-1.908 0-.692-.14-1.318-.42-1.88a3.429 3.429 0 0 0-1.178-1.346c-.505-.337-1.104-.505-1.796-.505s-1.3.168-1.823.505a3.428 3.428 0 0 0-1.179 1.347 4.145 4.145 0 0 0-.42 1.88c0 .71.14 1.346.42 1.907a3.43 3.43 0 0 0 1.179 1.347c.523.336 1.131.505 1.823.505ZM51.547 30.153c-1.216 0-2.282-.27-3.198-.813a5.763 5.763 0 0 1-2.132-2.16c-.505-.898-.758-1.89-.758-2.974V10.515h4.713v14.027c0 .45.16.842.477 1.179.318.336.71.505 1.178.505h5.19v3.927h-5.47Z">
                        </path>
                    </svg>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {routes.map((page, i) =>
                            <Link to={page.path} className='nav-link'
                                style={{
                                    color: location === page.path && "red",
                                    display: page.name === undefined && "none"
                                }}
                                key={i}>
                                {page.name}
                            </Link>
                        )}
                        <Link to={"/SearchPage"} className='SearchButton'><Button variant="outline-success">Search</Button></Link>
                    </Nav>
                </Navbar.Collapse>
                <CartIcon />
            </Container>
        </Navbar>
    );
}
export default NavBar;