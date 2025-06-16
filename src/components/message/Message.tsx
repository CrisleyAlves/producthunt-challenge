/**
 * @description Displays an error message indicating a failure to reach the server.
 *
 * @param classNames - Optional additional CSS class names to apply to the message element.
 */
export default function Message({ classNames = "", message = "" }) {
  return <p className={`message ${classNames}`}>{message}</p>;
}
