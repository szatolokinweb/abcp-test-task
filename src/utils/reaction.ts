export interface Reaction {
  abort: VoidFunction;
}

interface ReactionParams<T> {
  action: Promise<T>;
  onSuccess: (data: T) => void;
  onError: (error: Error) => void;
  onFinally: VoidFunction;
}

export const createReaction = <T>(params: ReactionParams<T>): Reaction => {
  let isEnabled = true;

  params.action
    .then((data) => {
      if (isEnabled) {
        params.onSuccess(data);
      }
    })
    .catch((error) => {
      if (isEnabled) {
        params.onError(error);
      }
    })
    .finally(() => {
      if (isEnabled) {
        params.onFinally();
      }
    });

  return {
    abort: () => {
      isEnabled = false;
    },
  };
};
