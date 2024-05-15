import { Modal, Button, Form } from 'react-bootstrap';
import { useContext, useRef } from 'react';
import { AppContext } from '../../Context';
import GoogleAuth from './GoogleAuth';

export default function ModalWindow() {
    const {modal, handlerClose, getLoginData} = useContext(AppContext);
    console.log(modal);
    
    const email = useRef(null);
    const password = useRef(null);

    // const handlerSubmit = (e) => {
    //     e.preventDefault();
    //     getLoginData(email, password);
    // };

        return(
            <Modal show={modal} onHide={handlerClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form onSubmit={handlerSubmit}> */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={email}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={password}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Inform me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => getLoginData(email,password)}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
    
                <Modal.Footer>
                    {/* <Button variant="primary">
                        Continue with GOOGLE
                    </Button> */}
                    <GoogleAuth />
                    <Button variant="secondary" onClick={handlerClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }