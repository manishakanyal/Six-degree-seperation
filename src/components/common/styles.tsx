import { AppBar, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPaper = styled(Paper)`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`;

export const PaddedPaper = styled(Paper)`
  padding: 1rem 2rem;
`;

export const CenterFlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const PaddedContainer = styled("div")`
  padding: 1rem;
  
`;

export const ColummCenterFlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  
`;

export const FullBodyContainer = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #272727;
`;

export const MainScrollableBody = styled("div")`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 1rem;
`;

export const NonGrowingContainer = styled("div")`
  padding: 1rem;
  
`;

export const RightAlignedContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledAppBar = styled(AppBar)`
  background: ;
`;
