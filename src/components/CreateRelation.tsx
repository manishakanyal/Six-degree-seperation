import { Button, Chip, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import {
  CenterFlexBox,
  StyledPaper,
  PaddedContainer,
  ColummCenterFlexBox,
} from "./common/styles";
import AutoComplete from "./common/AutoComplete";
import { FC,useState } from "react";
import { PersonType } from "./Content";

type OptionsType = {
  options: PersonType[]
  createRelation: (person1: string, person2: string) => void
}


const CreateRelation:FC<OptionsType> = ({ options,createRelation }) => {

  const [person1, setPerson1] = useState<string>('')
  const [person2, setPerson2] = useState<string>('')


  const handleClick = () => {
    createRelation(person1, person2)
  }



  return (
    <>
      <StyledPaper elevation={4}>
        <ColummCenterFlexBox>
          <PaddedContainer>
            <Typography variant="h5" color="primary">
              Establish Relationship:
            </Typography>
          </PaddedContainer>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={4}>
              <AutoComplete options={options} selectedOption={person1} handleChange={(name: string) => setPerson1(name)} />
            </Grid>
            <Grid item xs={12} sm={1}>
              <CenterFlexBox>
                <Chip label="friend of" />
              </CenterFlexBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AutoComplete options={options} selectedOption={person2} handleChange={(name: string) => setPerson2(name)}/>
            </Grid>
          </Grid>
          <PaddedContainer>
            <Button size="small" variant="contained" endIcon={<PeopleIcon />} onClick={ handleClick}>
              Confirm
            </Button>
          </PaddedContainer>
        </ColummCenterFlexBox>
      </StyledPaper>
    </>
  );
};

export default CreateRelation;
