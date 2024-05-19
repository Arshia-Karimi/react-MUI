import { Button, Paper } from "@mui/material";
import "./App.css";
import { makeStyles } from "@mui/styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Paper className={classes.padding}>
        <Button variant="outlined">aaaaa</Button>
        <Button variant="outlined">aaaaa</Button>
        <Button variant="outlined">aaaaa</Button>
        <Button variant="outlined">aaaaa</Button>
        <Button variant="outlined">aaaaa</Button>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: 20,
  },
  margin: {
    margin: 20,
  },
}));

export default App;
