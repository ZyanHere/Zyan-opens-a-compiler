import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CompilerSliceStateType } from "./compilerSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  tagTypes: ["myCodes", "allCodes"],
  endpoints: (builder) => ({
    saveCode: builder.mutation<{ url: string; status: string }, CompilerSliceStateType["fullCode"]>({
      query: (fullCode) => {
        return {
          url: "/compiler/save",
          method: "POST",
          body: fullCode,
        };
      },
    }),
  }),
});

export const {useSaveCodeMutation} = api;
