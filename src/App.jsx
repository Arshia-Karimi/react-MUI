import "./App.css";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

function App() {
  const style = useStyles();

  return (
    <div className={style.container}>
      <Paper className={style.Paper}>
        <Grid className={style.grid} container>
          <div className={style.Inexpensive}>ارزان ترین بلیط</div>
          <div className={style.Charter}>چارتری</div>
          <Grid item xs={9}>
            9
          </Grid>
          <Grid item xs={3}>
            3
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "dana",
    paddingLeft: 297,
    paddingRight: 297,
    marginTop: 112,
  },
  Paper: {
    overflow: "hidden",
    height: 200,
    borderRadius: "25px !important",
  },
  grid: {
    position: "relative",
  },
  Inexpensive: {
    backgroundColor: "#010660",
    color: "white",
    // display: "none",
    display: "flex",
    position: "absolute",
    top: 0,
    left: 85,
    width: 122,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 11,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: 24,
    marginRight: 24,
  },
  Charter: {
    position: "absolute",
    marginTop: 40,
    width: 70,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 11,
    transform: "rotate(-90deg)",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginRight: -29,

    [theme.breakpoints.down("sm")]: {
      width: 50,
    },
  },
}));

export default App;
