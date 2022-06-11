import { Button, Grid, TextField } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { CenterFlexBox, PaddedContainer, StyledPaper } from "./common/styles";
import { ChangeEvent, FC, useState } from "react";

type AddPersonProps = {
  addPeople: (name: string) => void
} 

const AddPerson:FC<AddPersonProps> = ({ addPeople }) => {

  const [input, setInput] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
  }

  const handleClick = () => {
    addPeople(input)
    setInput("")
  }

  return (
    <StyledPaper elevation={4}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={5}>
          <PaddedContainer>
            <TextField
              color="primary"
              onChange={handleChange}
              value={input}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </PaddedContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaddedContainer>
            <CenterFlexBox>
              <Button
                size="small"
                variant="contained"
                endIcon={<PersonAddIcon />}
                onClick={handleClick}
              >
                Add Person
              </Button>
            </CenterFlexBox>
          </PaddedContainer>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default AddPerson;
