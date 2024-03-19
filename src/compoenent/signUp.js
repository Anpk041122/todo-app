import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../style/form.css"

const SignUp = () => {
    return (
        <div className='bg'>
            <Card className="form">
                <Form>
                    <div className='header-form-mn'>
                        Sign Up
                    </div>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="........" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="........"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>re-password</Form.Label>
                        <Form.Control type="password" placeholder="........"/>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default SignUp;