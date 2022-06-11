import React, {FC}  from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { PaddedContainer } from "./styles";
import { PersonType } from "../Content";


type AutoCompleteType = {
  options: PersonType[],
  selectedOption: string,
  handleChange: (person: string) => void
}

const AutoComplete:FC<AutoCompleteType> = ({options, handleChange, selectedOption}) => {
  return (
    <PaddedContainer>
      <Stack spacing={2}>
        <Autocomplete
          onChange={(e, option: string) => handleChange(option)}
          fullWidth
          size="small"
          id="autocomplate-names"
          disableClearable
          value={selectedOption || ''}
          options={options.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a name"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </PaddedContainer>
  );
}

export default AutoComplete;
