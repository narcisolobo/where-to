import Loading from '../layout/loading';
import Card from 'react-bootstrap/Card';
import CommentItem from './comment-item';
import ListGroup from 'react-bootstrap/ListGroup';

function CommentList({ comments, error, isLoading, isValidating }) {
  if (error) {
    return <p>Could not load data... {error.message}</p>;
  }

  if (isLoading || isValidating) {
    return <Loading />;
  }

  return (
    comments.length > 0 && (
      <Card className="shadow mt-3">
        <Card.Header as="h6">Comments</Card.Header>
        <ListGroup variant="flush">
          {comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))}
        </ListGroup>
      </Card>
    )
  );
}

export default CommentList;
