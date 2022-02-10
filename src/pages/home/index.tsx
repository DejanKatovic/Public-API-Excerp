import React, { useState, useMemo } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { AxiosError } from "axios";

import { CategorySelector } from "./components/categorySelector";
import { EntryCard } from "./components/entryCard";
import { useGetEntries } from "src/query/entry";
import { APIResponse, Entry } from "src/types/entry";
import { getConvertedText } from "src/modules/string";

export const HomePage: React.FC = () => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("");
  const [entries, setEntries] = useState<Entry[]>([]);

  const onSuccess = (res: APIResponse) => {
    const result = res.entries || [];
    result.sort((prev, next) =>
      getConvertedText(prev.API.toUpperCase()) <
      getConvertedText(next.API.toUpperCase())
        ? -1
        : 1
    );
    setEntries(result);
  };

  const onError = (err: AxiosError) => {
    console.log(err);
  };

  const { mutate: getEntries, isLoading } = useGetEntries(onSuccess, onError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInitial(false);
    getEntries({ category });
  };

  return (
    <Box sx={{ padding: "10px" }}>
      <Box sx={{ maxWidth: "1200px", marginX: "auto", padding: "40px 10px" }}>
        <Typography
          color="primary"
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "40px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Public API Query
        </Typography>
        <CategorySelector
          category={category}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {!isInitial && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              color="secondary"
              variant="h4"
              sx={{
                fontSize: "30px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {`Entries: ${isLoading ? "..." : entries.length}`}
            </Typography>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Box sx={{ width: "100%" }}>
                {!entries.length && (
                  <Typography color="danger">No entries</Typography>
                )}
                {entries.map((entry, index) => (
                  <EntryCard
                    key={`index-${index}`}
                    entry={entry}
                    index={index + 1}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};
