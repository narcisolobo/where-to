import axios from 'axios';
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentForm({ eventId, mutate }) {
  const initialComment = {
    name: '',
    email: '',
    body: '',
    eventId,
  };
  const [comment, setComment] = useState(initialComment);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment((prevComment) => ({ ...prevComment, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/events/${eventId}/comments`, comment)
      .then((res) => {
        console.log(res.data);
        setComment(initialComment);
        setErrors(null);
        toast.info('Thank you for commenting.');
        mutate();
      })
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
        toast.error('Something went wrong...');
      });
  };

  return (
    <Fragment>
      <ToastContainer theme="colored" autoClose={2000} />
      <Card className="shadow">
        <Card.Header as="h6">Add Comment</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>
                <small>Name:</small>
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={comment.name}
                onChange={handleChange}
                isInvalid={errors?.name?.message?.length > 0}
              />
              {errors?.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>
                <small>Email:</small>
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={comment.email}
                onChange={handleChange}
                isInvalid={errors?.name?.message?.length > 0}
              />
              {errors?.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="body" className="mb-3">
              <Form.Label>
                <small>Comments:</small>
              </Form.Label>
              <Form.Control
                as="textarea"
                size="sm"
                value={comment.body}
                onChange={handleChange}
                isInvalid={errors?.name?.message?.length > 0}
              />
              {errors?.body && (
                <Form.Text className="text-danger">
                  {errors.body.message}
                </Form.Text>
              )}
            </Form.Group>
            <div className="text-end">
              <Button type="submit" variant="primary" size="sm">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
export default CommentForm;
