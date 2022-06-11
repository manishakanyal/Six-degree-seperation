import React, { FC, useState } from "react";
import { RightAlignedContainer } from "../common/styles";
import StorageIcon from "@mui/icons-material/Storage";
import { Button } from "@mui/material";
import DatabaseDrawer from "./DatabaseDrawer";
import { Friend, PersonType } from "../Content";

type UserDatabaseProps = {
	people: PersonType[],
	friend: Friend[]
}

const UserDatabase:FC<UserDatabaseProps> = ({ people, friend }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<RightAlignedContainer>
			<Button size="small" variant="contained" endIcon={<StorageIcon />} onClick={handleOpen}>
				Database
			</Button>
			<DatabaseDrawer people={people}  open={open} handleClose={handleClose} friend={friend}/>
		</RightAlignedContainer>
	);
};

export default UserDatabase;
