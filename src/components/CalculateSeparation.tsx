import { Alert, AlertTitle, Button, Chip, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  CenterFlexBox,
  ColummCenterFlexBox,
  PaddedContainer,
  StyledPaper,
} from "./common/styles";
import AutoComplete from "./common/AutoComplete";
import MemoryIcon from "@mui/icons-material/Memory";
import { FC, useState } from 'react';
import { PersonType } from "./Content";

type OptionsType = {
  options: PersonType[],
  computeRelation: (person1: string, person2: string) => void,
  answer: string[][]
}


const CalculateSeparation: FC<OptionsType> = ({ options, computeRelation, answer }) => {

  const [person1, setPerson1] = useState<string>('')
  const [person2, setPerson2] = useState<string>('')


  const handleClick = () => {
    computeRelation(person1, person2)
  }


  return (
    <StyledPaper elevation={4}>
      <ColummCenterFlexBox>
        <PaddedContainer>
          <Typography variant="h5" color="primary">
            Compute Degree of Separation
          </Typography>
        </PaddedContainer>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} sm={4}>
            <AutoComplete options={options} selectedOption={person1} handleChange={(person: string) => setPerson1(person)} />
          </Grid>
          <Grid item xs={12} sm={1}>
            <CenterFlexBox>
              <Chip
                label={
                  <CenterFlexBox>
                    <ArrowRightAltIcon />
                  </CenterFlexBox>
                }
              />
            </CenterFlexBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <AutoComplete options={options} selectedOption={person2} handleChange={(person: string) => setPerson2(person)} />
          </Grid>
        </Grid>
        <PaddedContainer>
          <Button size="small" variant="contained" endIcon={<MemoryIcon />} onClick={handleClick}>
            Compute
          </Button>
        </PaddedContainer>
        <PaddedContainer>
          {/* {answer.length ? <Typography>--Degree of Seperation-- {answer.map((array) => <Typography variant="body1">{array.join("   >   ")} </Typography>)}</Typography>: null}
         */}

          {
            answer.length ?
              <Alert icon={false} severity="success">
                <AlertTitle>Degree of Seperation</AlertTitle>
                {answer.map((array) => <Typography variant="body1">{array.join("   >   ")} </Typography>)}
              </Alert>
              : null
          }
        </PaddedContainer>
      </ColummCenterFlexBox>

    </StyledPaper>
  );
};

export default CalculateSeparation;
