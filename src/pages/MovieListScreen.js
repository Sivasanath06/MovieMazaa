import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
export const MovieListScreen = ({ apiPath, title }) => {
  const { data: movies, loading } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        {loading ? (
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Loading...</p>
        ) : (
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
