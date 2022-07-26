import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
} from "@mui/material";
import TerminalRoundedIcon from "@mui/icons-material/Terminal";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateIconRounded from "@mui/icons-material/Create";
import DeleteIconRounded from "@mui/icons-material/Delete";

export class Cards extends React.Component {
  constructor(props) {
    if (window.localStorage.getItem("notes")) {
      super(props);
      this.state = {
        notes: JSON.parse(window.localStorage.getItem("notes")),
        title: "",
        content: "",
        itterator: "1",
        expanded: false,
      };
    } else {
      super(props);
      this.state = {
        notes: [],
        title: "",
        content: "",
        itterator: "1",
        expanded: false,
      };
    }
  }

  render() {
    if (this.state.itterator == 1) {
      this.setState({ expanded: true, itterator: 2 });
    }
    return (
      <div>
        <div
          style={{
            minHeight: "89.6vh",
            width: "auto",
            backgroundColor: "#272727",
            paddingTop: "1rem",
          }}
        >
          <Accordion
            expanded={this.state.expanded}
            style={{
              backgroundColor: "#272727",
              boxShadow: "none",
              width: "80%",
              marginInline: "auto",
            }}
          >
            <AccordionSummary
              onClick={() => {
                this.setState({ expanded: !this.state.expanded });
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Add Notes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
                defaultValue={this.state.title}
                label="Title"
                fullWidth
                variant="standard"
              />
              <TextField
                defaultValue={this.state.content}
                onChange={(e) => {
                  this.setState({ content: e.target.value });
                }}
                label="Content"
                fullWidth
                variant="standard"
                multiline
                style={{ marginTop: "1rem" }}
              />
              <Button
                variant="contained"
                style={{ borderRadius: "1rem", marginTop: "1rem" }}
                startIcon={<CreateIconRounded />}
                onClick={() => {
                  if (this.state.title && this.state.content) {
                    this.state.notes.push({
                      title: this.state.title,
                      content: this.state.content,
                    });
                    this.setState({
                      content: this.state.content,
                      title: this.state.title,
                    });
                    window.localStorage.setItem(
                      "notes",
                      JSON.stringify(this.state.notes)
                    );
                  } else {
                    alert("Cannot insert blank values");
                  }
                }}
                //   console.log(this.state.notes);
              >
                Create
              </Button>
            </AccordionDetails>
          </Accordion>
          <Grid
            container
            spacing={3}
            style={{
              width: "80%",
              justifyContent: "center",
              marginInline: "auto",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {this.state.notes.map((val, key) => {
              return (
                <Grid key={key} item xs>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {val.title}
                      </Typography>

                      <Typography
                        style={{ whiteSpace: "pre-line" }}
                        variant="body2"
                      >
                        {val.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        color="warning"
                        variant="contained"
                        style={{ borderRadius: "1rem", margin: "1rem" }}
                        onClick={() => {
                          this.setState({
                            notes: this.state.notes.splice(key, 1),
                          });
                          window.localStorage.setItem(
                            "notes",
                            JSON.stringify(this.state.notes)
                          );
                          this.setState({
                            notes: JSON.parse(
                              window.localStorage.getItem("notes")
                            ),
                          });
                          //   window.location.reload(false);
                        }}
                        size="small"
                      >
                        <DeleteIconRounded />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              component="a"
              href="https://shafinmurani.github.io"
              style={{
                color: "unset",
              }}
              variant="body2"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 0 }}
                style={{ cursor: "default" }}
                disableRipple
              >
                <TerminalRoundedIcon />
              </IconButton>
              Shafin Murani
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
