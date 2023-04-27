import transformEvent from '@/helpers/transform-event';
import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CalendarEvent } from 'react-bootstrap-icons';
import { GeoAlt } from 'react-bootstrap-icons';
import { formatDate } from '@/utils/date-formatter';
import CommentList from '@/components/comments/comment-list';
import CommentForm from '@/components/comments/comment-form';
import Comments from '@/components/comments/comments';

function EventDetails({ event }) {
  return (
    <Row>
      <Col lg={8} md={12}>
        <Card className="shadow mb-3">
          <Card.Img variant="top" src={`/${event.image}`} />
          <Card.Body>
            <Card.Title as="h1" className="fs-3 text-capitalize">
              {event.title}
            </Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Card.Text className="align-middle text-muted">
              <CalendarEvent className="me-2" />
              <small>{formatDate(event.date)}</small>
            </Card.Text>
            <Card.Text className="card-text text-muted">
              <GeoAlt className="me-2" />
              <small>{event.location}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={12}>
        <Comments eventId={event._id} />
      </Col>
    </Row>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '643c04100b7f98db473dd917' } },
      { params: { id: '643c046d0b7f98db473dd919' } },
      { params: { id: '643c04b10b7f98db473dd91b' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  await dbConnect();

  const result = await Event.findById(id);
  const event = transformEvent(result);
  return { props: { event } };
}

export default EventDetails;
