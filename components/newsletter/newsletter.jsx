import axios from 'axios';
import { Fragment, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newsletter() {
  const emailInputRef = useRef();
  const [errors, setErrors] = useState(null);
  const signingUp = () => toast.info('Signing up...');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: email } = emailInputRef.current;

    axios
      .post('/api/newsletters', { email })
      .then((res) => {
        console.log(res.data);
        emailInputRef.current.value = '';
        setErrors(null);
        toast.success('Thank you for signing up.');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong...');
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <Fragment>
      <ToastContainer theme="colored" autoClose={2000} />
      <Card className="shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="text"
                ref={emailInputRef}
                placeholder="Email address"
              />
              {errors?.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>
            <div className="text-end">
              <Button type="submit" variant="primary" size="sm">
                Sign up
              </Button>
              <Button size="sm" className="ms-2" onClick={signingUp}>
                Toast
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
export default Newsletter;
