import { useState, useRef, useCallback } from "react";
import { Reaction, createReaction } from "../utils/reaction";

export const useLoadedData = <T>() => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const loadReactionRef = useRef<Reaction>();

  const loadData = useCallback((action: Promise<T>) => {
    loadReactionRef.current?.abort();

    setData(undefined);
    setIsLoading(true);
    setError(undefined);

    loadReactionRef.current = createReaction({
      action,
      onSuccess: setData,
      onError: setError,
      onFinally: () => {
        setIsLoading(false);
      },
    });
  }, []);

  return [data, isLoading, error, loadData] as const;
};
