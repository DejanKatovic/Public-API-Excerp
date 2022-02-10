import { useMutation } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

import { getApiClient } from "src/modules/axios";
import { ISearchInputs, APIResponse } from "src/types/entry";

const getEntriesOperation = (data: ISearchInputs) => {
  return getApiClient().get("/entries", {
    params: { category: data.category },
  });
};

export const useGetEntries = (
  onSuccess: (res: APIResponse) => void,
  onError: (err: AxiosError) => void
) => {
  return useMutation<
    AxiosResponse<APIResponse>,
    AxiosError,
    ISearchInputs,
    undefined
  >(getEntriesOperation, {
    onSuccess: (res) => onSuccess(res.data),
    onError: (err) => onError(err),
  });
};
