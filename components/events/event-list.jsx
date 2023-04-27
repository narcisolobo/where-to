import EventItem from './event-item';
import styles from './event-list.module.css';
import Link from 'next/link';

function EventList({ events }) {
  return (
    <div className={styles.grid}>
      {events.map((event) => (
        <Link
          key={event._id}
          href={`/events/${event._id}`}
          passHref
          legacyBehavior>
          <EventItem event={event} />
        </Link>
      ))}
    </div>
  );
}

export default EventList;
