import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { AxiosError } from "axios";

import { useGetEntries } from "src/query/entry";
import { APIResponse } from "src/types/entry";

interface CategorySelectorPropType {
  category: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CategorySelector: React.FC<CategorySelectorPropType> = ({
  category,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <FormControl
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
        >
          <InputLabel htmlFor="category-input">Search Category</InputLabel>
          <OutlinedInput
            id="category-input"
            label="Search Category"
            value={category}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Search category"
                  type="submit"
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </form>
  );
};
