import { Typography } from "@mui/material";
import * as React from "react";
import { CenterFlexBox, PaddedPaper } from "./common/styles";

const Footer: React.FC = () => {
  return (
    <PaddedPaper>
      <CenterFlexBox>
        <Typography color="white">
          Six Degrees of Separation: An Implementation by Manisha Kanyal
        </Typography>
      </CenterFlexBox>
    </PaddedPaper>
  );
};

export default Footer;
