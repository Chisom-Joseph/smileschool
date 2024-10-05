import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="text-white text-center grid content-center bg-blue h-[100dvh] leading-[7em]">
      <div>
        <h1 className="font-[1000] text-[10em]">Error</h1>
        <p className="font-[100] text-[2em]">Something went wrong</p>
        <Link className="btn" to="/">
          Go home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
