import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Spinner animation="border" variant="info" role="status" />
    </div>
  );
}
export default Loading;
