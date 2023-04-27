import { Fragment } from 'react';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import useComments from '@/hooks/useComments';

function Comments({ eventId }) {
  const { comments, error, isLoading, mutate, isValidating } =
    useComments(eventId);

  return (
    <Fragment>
      <CommentForm eventId={eventId} mutate={mutate} />
      <CommentList
        comments={comments}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
      />
    </Fragment>
  );
}

export default Comments;
