import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    // Handle 404 errors
    if (error.status === 404) {

        return (

            <main className="grid min-h-[100vh] place-items-center px-8">

                <div className="text-center">

                    <p className="text-9xl font-semibold text-primary">404</p>
                    
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        Page Not Found
                    </h1>
                    <p className="mt-6 text-lg leading-7">
                        Sorry, we couldn't find the page you're looking for.
                    </p>

                </div>

                <div className="mt-6">

                    <Link to="/" className="btn btn-secondary">
                        go back home
                    </Link>

                </div>

            </main>
        );
    }

    // Handle other errors
    return (

        <main className="grid min-h-[100vh] place-items-center px-8">

            <div className="text-center">

                <h4 className="text-4xl font-bold">There was an error...</h4>
                <p className="mt-4 text-lg">
                    {error.message || error.statusText || "An unexpected error occurred."}
                </p>

            </div>

            <div className="mt-6">
                <Link to="/" className="btn btn-secondary">
                go back home
                </Link>
            </div>
        </main>
    );
};

export default Error;