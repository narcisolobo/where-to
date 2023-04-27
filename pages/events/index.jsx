import Head from 'next/head';
import { Fragment } from 'react';
import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';
import EventList from '@/components/events/event-list';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useEvents from '@/hooks/useEvents';

function AllEvents({ events }) {
  const { events: allEvents, error } = useEvents('', events);

  if (error) {
    return <p>Could not fetch data...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>All Next Events</title>
        <meta name="description" content="All Next Events." />
      </Head>
      <main className="pb-3">
        <Row>
          <Col lg={12}>
            <h1 className="mb-3">All Events</h1>
            <EventList events={allEvents} />
          </Col>
        </Row>
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find the data in our database */
  const result = await Event.find();
  const events = result.map((doc) => {
    const event = doc.toObject();
    event._id = event._id.toString();
    event.date = event.date.toISOString();
    event.createdAt = event.createdAt.toISOString();
    event.updatedAt = event.updatedAt.toISOString();
    return event;
  });

  return { props: { events: events } };
}

export default AllEvents;
