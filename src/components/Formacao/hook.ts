import { useEffect, useState } from "react";

function useMediaMatches(query: string) {
  const [matches, setMatches] = useState(matchMedia(query).matches);

  useEffect(() => {
    matchMedia(query).addEventListener("change", (e) => setMatches(e.matches));
  }, [query]);

  return matches;
}

export default useMediaMatches;
