function transformEvent(event) {
  const transformedEvent = event.toObject();
  transformedEvent._id = event._id.toString();
  transformedEvent.date = event.date.toISOString();
  transformedEvent.createdAt = event.createdAt.toISOString();
  transformedEvent.updatedAt = event.updatedAt.toISOString();
  return transformedEvent;
}

export default transformEvent;
