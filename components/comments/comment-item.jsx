import Figure from 'react-bootstrap/Figure';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import styles from './comment-item.module.css';

function CommentItem({ comment }) {
  return (
    <ListGroupItem>
      <blockquote className="blockquote">
        <p className={styles['text-sm']}>{comment.body}</p>
      </blockquote>
      <Figure.Caption className="blockquote-footer text-end mb-1">
        {comment.name}
      </Figure.Caption>
    </ListGroupItem>
  );
}
export default CommentItem;
