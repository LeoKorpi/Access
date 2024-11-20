import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <em>
          {"Code " +
            error.status +
            ": " +
            error.statusText +
            ". " +
            error.data || error.message}
        </em>
      </p>
      {(!error.data || error.message) && (
        <p>
          Check out the console for a better explanation of what went wrong.
        </p>
      )}
    </section>
  );
}
