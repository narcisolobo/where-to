import { forwardRef, useEffect, useRef, useState } from 'react';

const Notification = forwardRef(function Notification(props, ref) {
  const { title, message, color } = props;

  return (
    <div ref={ref} className={`toast text-bg-${color}`} role="alert">
      <div className="toast-header">
        <strong className="me-auto">{title}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
});

export default Notification;
