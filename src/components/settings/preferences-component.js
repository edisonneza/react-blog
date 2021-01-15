import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GlobalContext from "../../context/global-context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 15,
  },
  formControl: {
    minWidth: 120,
  },
}));

export default function SettingsForm() {
  const classes = useStyles();
  const { darkTheme, handleDarkTheme } = useContext(GlobalContext);

  const handleChange = (event) => {
    if (event.target.name === "darkTheme") handleDarkTheme(event.target.checked);
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<p></p>}
                label="Modaliteti errësirë (Dark Mode)"
                labelPlacement="start"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkTheme}
                    onChange={handleChange}
                    name="darkTheme"
                  />
                }
                label=""
                labelPlacement="start"
              />
            </Grid>
          </Grid> {/*end container*/}



        </Grid>
      </Grid>
    </form>
  );
}
