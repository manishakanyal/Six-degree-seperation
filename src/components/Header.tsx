import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { StyledAppBar } from "./common/styles";

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Six Degrees of Separation
        </Typography>
        <div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="https://github.com/manishakanyal"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub color="primary" sx={{ marginRight: "20px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/manishakanyal/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn color="primary" />
            </a>
          </Typography>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
