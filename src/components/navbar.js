import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{ cursor: "default" }}
              disableRipple
            >
              <NotesRoundedIcon />
            </IconButton>
            NoteKeeper
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
