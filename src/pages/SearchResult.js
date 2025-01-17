import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const SearchResult = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      {loading ? (
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Loading...</p>
      ) : (
        <>
          <section className="py-7">
            <p className="text-3xl text-gray-700 dark:text-white">
              {movies.length === 0
                ? `No result found for '${queryTerm}'`
                : `Result for '${queryTerm}'`}
            </p>
          </section>
          <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};
