import Head from 'next/head';
import { Fragment } from 'react';
import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';
import EventList from '@/components/events/event-list';
import Newsletter from '@/components/newsletter/newsletter';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useEvents from '@/hooks/useEvents';

function HomePage({ events }) {
  const { events: featuredEvents, error } = useEvents('featured', events);

  if (error) {
    return <p>Could not fetch data...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>Next Events - Welcome!</title>
        <meta name="description" content="I'm learning Next.js." />
      </Head>
      <main>
        <Row>
          <Col lg={8}>
            <h1 className="mb-3">Featured Events</h1>
            <EventList events={featuredEvents} />
          </Col>
          <Col lg={4}>
            <h4 className="mb-3">Newsletter Signup</h4>
            <Newsletter />
          </Col>
        </Row>
      </main>
    </Fragment>
  );
}

/* Retrieves event(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find the data in our database */
  const result = await Event.find({ isFeatured: true });
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

export default HomePage;
