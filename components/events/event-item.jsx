import { formatDate } from '@/utils/date-formatter';
import { CalendarEvent } from 'react-bootstrap-icons';
import { GeoAlt } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import { forwardRef } from 'react';

const EventItem = forwardRef(({ event, href }, ref) => {
  return (
    <a href={href} ref={ref} className="link-light text-decoration-none">
      <Card className="shadow">
        <Card.Img variant="top" src={`/${event.image}`} alt={event.title} />
        <Card.Body>
          <Card.Title as="h4">{event.title}</Card.Title>
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
    </a>
  );
});

export default EventItem;
