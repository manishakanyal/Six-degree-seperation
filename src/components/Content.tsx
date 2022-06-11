import React,{ useState } from "react";
import { Container } from "@mui/material";
import AddPerson from "./AddPerson";
import CreateRelation from "./CreateRelation";
import CalculateSeparation from "./CalculateSeparation";
import { StyledPaper } from "./common/styles";
import UserDatabase from "./Database";
import {Solution} from "./Assignment"

export type PersonType = {
  id: number,
  name: string
}

export type Friend = {
  friend1: string,
  friend2: string
}



var obj = new Solution();
const Content: React.FC = () => {

  const [ people, setPeople] = useState<PersonType[]>([])
  const [answer, setAnswer] = useState<string[][]>([])
  const [friend, setFriend] = useState<Friend[]>([])

const addPeople = (name:string) => {
  setPeople([...people, {
    name: name, id: Math.random()*10
  }])
}

const createRelation = (person1: string, person2: string) =>
{
  obj.insert(person1, person2)
  setFriend([...friend, {friend1: person1, friend2: person2 }])
}



const computeRelation = (person1: string, person2: string) => {
  obj.findDegreeOfSepration(person1, person2)
  setAnswer(obj.ans)
  console.log(obj.ans)
}



  return (
    <Container maxWidth="md">
      <StyledPaper>
        <AddPerson addPeople = {addPeople} />
        <CreateRelation options={people} createRelation={createRelation}/>
        <CalculateSeparation options={people} computeRelation={computeRelation} answer={answer}/>
        <UserDatabase people={people} friend={friend}/>
      </StyledPaper>
    </Container>
  );
};

export default Content;
