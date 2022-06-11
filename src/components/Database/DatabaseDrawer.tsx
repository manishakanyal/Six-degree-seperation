import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Friend, PersonType } from "../Content";
import { CenterFlexBox, ColummCenterFlexBox, StyledPaper } from '../common/styles';
import { Chip } from '@mui/material';
import { Grid } from '@mui/material';

interface IDatabaseDialogue {
  open: boolean;
  handleClose: () => void;
  people: PersonType[],
  friend: Friend[]
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const DatabaseDrawer = ({
  open,
  handleClose,
  people,
  friend
}: IDatabaseDialogue) => {


  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Database of added users
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container sx={{ padding: '2rem'}} spacing={2}>
          {
            friend.map((item: Friend, index) => (
              <Grid item xs={3}>
        
                <StyledPaper elevation={3}>
                  <ColummCenterFlexBox>
                <ListItemText primary={item.friend1} />
                  <CenterFlexBox>
                    <Chip label="friend of" />
                  </CenterFlexBox>
                  <ListItemText primary={item.friend2} />
                  </ColummCenterFlexBox>
                </StyledPaper>
              </Grid>

            ))
          }
        </Grid>

        <List>
          {people.map((item: PersonType) => (
            <React.Fragment key={item.id}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Dialog>
    </>
  );
}

export default DatabaseDrawer
