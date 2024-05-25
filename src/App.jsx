import "./App.css";
import { Button, Grid, Paper, Typography, colors } from "@mui/material";
import { makeStyles } from "@mui/styles";
import sun from "./image/B9.png";
import { useState } from "react";

function App() {
  const style = useStyles();
  const [active, setActive] = useState(null);

  return (
    <div className={style.container}>
      <Paper className={style.Paper}>
        <Grid className={style.grid} container>
          <div className={style.Inexpensive}>
            <Typography className={style.Inexpensive2}>
              ارزان ترین بلیط
            </Typography>
          </div>
          <div className={style.Charter}>
            <Typography className={style.Charter2}>چارتری</Typography>
          </div>

          <Grid className={style.colspan9} item xs={12} md={9}>
            <Grid container className={style.colspan12}>
              <Grid md={3} xs={12}>
                <div className={style.div1}>
                  <div className={style.div2}>
                    <img className={style.img} src={sun} />
                    <div className={style.div3}>
                      <div className={style.div4}>
                        <Typography className={style.kish}>
                          ایران ایر تور
                        </Typography>
                        <Typography className={style.flightNumber}>
                          پرواز شماره Y97081
                        </Typography>
                      </div>
                      <div className={style.divBusiness}>
                        <div className={style.Business}>
                          <Typography className={style.Business3}>
                            بیزنس
                          </Typography>
                        </div>
                        <div className={style.m80}>
                          <Typography className={style.m802}>M۸۰</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid className={style.colspan12} md={9} xs={12}>
                <div className={style.divContainer}>
                  <div className={style.divContent}>
                    <Typography className={style.saat}>۱۹ : ۴۵</Typography>
                    <Typography className={style.tehran}>تهران</Typography>
                    <Typography className={style.thr}>THR</Typography>
                  </div>

                  <div className={style.div2Content}>
                    <div className={style.divBorder}>
                      <div className={style.Business2}>
                        <Typography className={style.textBusiness2}>
                          بیزنس
                        </Typography>
                      </div>
                      <div className={style.m80d}>
                        <Typography className={style.textM80d}>M۸۰</Typography>
                      </div>
                    </div>

                    <Typography className={style.friday}>
                      جمعه 21 اردیبهشت 1403
                    </Typography>

                    <div className={style.circle}></div>
                    <div className={style.border}></div>
                    <div className={style.circle2}></div>
                    <Typography className={style.saat2}>
                      1 ساعت و 45 دقیقه پرواز
                    </Typography>
                  </div>

                  <div className={style.divContent}>
                    <Typography className={style.saat}>۲۱ : ۳۵</Typography>
                    <Typography className={style.tehran}>کیش</Typography>
                    <Typography className={style.thr}>KIH</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={style.colspan3} item xs={12} md={3}>
            <div className={style.center}>
              <Typography className={style.ticket3}>ارزان ترین بلیط</Typography>
              <div className={style.divButton}>
                <div className={style.divContent4}>
                  <Typography className={style.price}>قیمت هر بلیط</Typography>

                  <div className={style.divFlex}>
                    <Typography className={style.price2}>۱,۵۵۹,۰۰۰</Typography>
                    <Typography className={style.Rs}>تومان</Typography>
                  </div>
                </div>
                <div>
                  <Typography className={style.Leftover}>
                    ۱ بلیط باقی مانده
                  </Typography>

                  <Button className={style.button} variant="contained">
                    انتخاب بلیط
                  </Button>

                  <Typography className={style.Leftover2}>
                    {" "}
                    ۱ بلیط باقی مانده
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          <div className={style.divP}>
            <Typography
              onClick={() => (active === 1 ? setActive(null) : setActive(1))}
              className={style.p}
            >
              اطلاعات پرواز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={style.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Typography>
            <Typography
              onClick={() => (active === 2 ? setActive(null) : setActive(2))}
              className={style.p}
            >
              اطلاعات پرواز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={style.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Typography>
            <Typography
              onClick={() => (active === 3 ? setActive(null) : setActive(3))}
              className={style.p}
            >
              اطلاعات پرواز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={style.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Typography>
          </div>
        </Grid>

        {active === 1 ? (
          <div className={style.table}>
            <div className={style.table1}>
              <div className={style.table2}>
                <table className={style.table3}>
                  <tbody>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          شماره پرواز
                        </Typography>
                      </td>
                      <td className={style.td}>
                        <Typography className={style.textP}>۷۱۲۵</Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          مقدار بار مجاز
                        </Typography>
                      </td>

                      <td className={style.td}>
                        <Typography className={style.textP}>25 kg</Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          نام ترمینال رفت
                        </Typography>
                      </td>

                      <td className={style.td}>
                        <Typography className={style.textP}>
                          شماره 1 مهرآباد
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          فرودگاه مبدا
                        </Typography>
                      </td>

                      <td className={style.td}>
                        <Typography className={style.textP}>
                          فرودگاه مهرآباد (THR)
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          فرودگاه مقصد
                        </Typography>
                      </td>

                      <td className={style.td}>
                        <Typography className={style.textP}>
                          فرودگاه بین المللی کیش (KIH)
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          کلاس نرخی
                        </Typography>
                      </td>
                      <td className={style.td}>
                        <Typography className={style.textP}>
                          بیزنس/CP
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {active === 2 ? (
          <div className={style.darsad}>
            <div className={style.darsad1}>
              <div className={style.darsad2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={style.icon2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <Typography className={style.textP3}>
                  جریمه کنسلی براساس زمان باقی مانده تا پروا
                </Typography>

                <Typography className={style.textP4}>
                  درصد جریمه کنسلی بلیط براساس قوانین ایرلاین صادر کننده و زمان
                  باقی‌مانده تا پرواز
                </Typography>
              </div>

              <Grid container>
                <Grid item xs={12} md={6}>
                  <div className={style.darsad4}>
                    <div className={style.darsad5}>
                      <Typography className={style.darsadText}>٪ ۲۰</Typography>
                    </div>
                    <div className={style.darsad6}>
                      <Typography className={style.darsadText1}>
                        از زمان صدور بلیط تا 24 ساعت قبل از پرواز
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={style.darsad7}>
                    <div className={style.darsad5}>
                      <Typography className={style.darsadText}>٪ ۴۰</Typography>
                    </div>
                    <div>
                      <Typography className={style.darsadText1}>
                        از 24 ساعت قبل از پرواز به بعد
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        ) : null}

        {active === 3 ? (
          <div className={style.divTable1}>
            <div className={style.divTable2}>
              <div className={style.divTable3}>
                <table className={style.divTable4}>
                  <tbody className={style.divTable5}>
                    <tr>
                      <td className={style.td2}>
                        <Typography className={style.tdText}>مسافر</Typography>
                      </td>
                      <td className={style.td2}>
                        <Typography className={style.tdText}>تعداد</Typography>
                      </td>
                      <td className={style.td2}>
                        <Typography className={style.tdText}>
                          قیمت پایه بلیط + مالیات و عوارض پرواز
                        </Typography>
                      </td>
                      <td className={style.td2}>
                        <Typography className={style.tdText}>جمع</Typography>
                      </td>
                    </tr>
                  </tbody>

                  <tbody className={style.divTable5}>
                    <tr className={style.tr}>
                      <td className={style.td2}>
                        <Typography className={style.tdText1}>
                          بزرگسال
                        </Typography>
                      </td>

                      <td className={style.td2}>
                        <Typography className={style.tdText1}>۱</Typography>
                      </td>

                      <td className={style.td2}>
                        <Typography className={style.tdText1}>
                          ۱,۵۵۹,۰۰۰ تومان
                        </Typography>
                      </td>

                      <td className={style.td2}>
                        <Typography className={style.tdText1}>
                          ۱,۵۵۹,۰۰۰ تومان
                        </Typography>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={3} className={style.td2}>
                        <Typography className={style.trText1}>
                          مبلغ قابل پرداخت
                        </Typography>
                      </td>

                      <td className={style.td2}>
                        <Typography className={style.trText}>
                          ۱,۵۵۹,۰۰۰ تومان
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 40,

    [theme.breakpoints.up("md")]: {
      paddingLeft: 297,
      paddingRight: 297,
      marginTop: 112,
    },
  },

  Paper: {
    border: "1px solid #e5e7eb",
    borderRadius: "25px !important",
    overflow: "hidden",
  },

  grid: {
    position: "relative",
  },

  Inexpensive: {
    backgroundColor: "#010660",
    color: "white",
    display: "flex",
    position: "absolute",
    top: 0,
    left: 85,
    width: 122,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: 24,
    marginRight: 24,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  Inexpensive2: {
    fontSize: "11px !important",
  },

  Charter: {
    position: "absolute",
    paddingTop: 4,
    paddingBottom: 4,
    width: 80,
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    left: 20,

    [theme.breakpoints.up("md")]: {
      marginTop: 80,
      width: 70,
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 2,
      paddingTop: 2,
      transform: "rotate(-90deg)",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      marginRight: -27,
      left: 0,
      right: 0,
    },
  },

  Charter2: {
    fontSize: "11px !important",
  },

  colspan9: {
    [theme.breakpoints.up("md")]: {
      paddingBottom: 20,
      paddingTop: 20,
    },
  },

  colspan12: {
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
    },
  },

  div1: {
    marginTop: 32,
    borderBottom: "2px solid #e5e7eb",
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 16,
    paddingRight: 16,
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      marginTop: 0,
      borderBottom: 0,
      marginBottom: 0,
      paddingRight: 0,
      marginRight: 40,
    },
  },

  div2: {
    display: "flex",
    alignItems: "center",
    marginBottom: 12,

    [theme.breakpoints.up("md")]: {
      display: "block",
      marginBottom: 0,
    },
  },

  img: {
    width: 53,
    height: 53,
    border: "1px solid #e5e7eb",
    borderRadius: "50%",
    padding: 7.7,
    objectFit: "cover",

    [theme.breakpoints.up("md")]: {
      width: 70,
      height: 70,
      marginRight: 23,
      padding: 12,
      marginBottom: 10,
    },
  },

  div3: {
    display: "flex",
    flexDirection: "column",
    marginRight: 8,
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      display: "block",
      marginRight: 0,
    },
  },

  div4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -4,
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },

  kish: {
    fontSize: "12px !important",
    marginLeft: "8px !important",
    marginTop: 4,
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },

  flightNumber: {
    fontSize: "9px !important",
    color: "rgba(0, 0, 0, 0.54) !important",
    marginTop: 4,
    [theme.breakpoints.up("md")]: {
      fontSize: "10px !important",
      marginTop: "8px !important",
    },
  },

  divBusiness: {
    display: "flex",
    alignItems: "center",
    marginTop: 8,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  Business: {
    fontWeight: 600,
    marginLeft: 8,
  },

  Business3: {
    fontSize: "10px !important",
  },

  m80: {
    fontWeight: 600,
    marginTop: 3,
  },

  m802: {
    fontSize: "10px !important",
  },

  colspan12: {
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },

  divContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },

  divContent: {
    direction: "ltr",
    textAlign: "center",
    marginBottom: 25,
    textWrap: "nowrap",
    marginLeft: "11px !important",
    marginRight: "11px !important",

    [theme.breakpoints.up("md")]: {
      marginRight: "0px !important",
      marginLeft: "20px !important",
      marginBottom: -45,
    },
  },

  saat: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
    marginTop: "15px !important",

    [theme.breakpoints.up("md")]: {
      marginTop: "-10px !important",
    },
  },

  tehran: {
    fontSize: "14px !important",
    fontWeight: "bold !important",
    marginTop: "8px !important",
  },

  thr: {
    fontSize: "13px !important",
    color: "rgba(0, 0, 0, 0.54) !important",
    marginTop: "4px !important",
  },

  div2Content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: -20,
    marginRight: -20,

    [theme.breakpoints.up("md")]: {
      marginLeft: -3,
      marginRight: -17,
    },
  },

  divBorder: {
    display: "none",
    marginBottom: 4,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },

  Business2: {
    color: "#010660",
    border: "1px solid #010660",
    width: 65,
    height: 25,
    marginLeft: 8,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  textBusiness2: {
    fontSize: "10px !important",
  },

  m80d: {
    border: "1px solid #ccc",
    borderRadius: 30,
    width: 55,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  textM80d: {
    fontSize: "10px !important",
  },

  friday: {
    marginTop: "-8px !important",
    marginBottom: "8px !important",
    fontSize: "9px !important",
    fontWeight: "bold !important",

    [theme.breakpoints.up("md")]: {
      fontSize: "11px !important",
      marginTop: "12px !important",
      marginBottom: "4px !important",
      fontWeight: 0,
    },
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginBottom: -4.5,
    backgroundColor: "#e0e0e0",
    marginLeft: 200,
    [theme.breakpoints.up("md")]: {
      marginLeft: 350,
    },
  },

  border: {
    width: "100%",
    height: 2,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",

    [theme.breakpoints.up("md")]: {
      width: 345,
    },
  },

  circle2: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 200,
    marginTop: -5,
    backgroundColor: "#e0e0e0",
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      marginLeft: -140,
    },
  },

  saat2: {
    marginLeft: 2,
    color: "rgba(0, 0, 0, 0.54)",
    display: "flex",
    fontSize: "9px !important",
    marginTop: "4px !important",

    [theme.breakpoints.up("md")]: {
      fontSize: "10 !important",
    },
  },

  colspan3: {
    marginTop: "-25px !important",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      marginTop: "0 !important",
    },
  },

  center: {
    textAlign: "center",
  },

  ticket3: {
    backgroundColor: "#010660",
    color: "white",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    padding: 2.4,
    fontSize: "11px !important",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: "24px !important",
    marginRight: "24px !important",

    [theme.breakpoints.up("md")]: {
      display: "flex !important",
    },
  },

  divButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px dashed #bdbdbd",
    marginBottom: 50,
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 30,

    [theme.breakpoints.up("md")]: {
      display: "block",
      marginBottom: 16,
    },
  },

  divContent4: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  price: {
    fontSize: "10px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "11px !important",
      marginBottom: "4px !important",
    },
  },

  divFlex: {
    display: "flex",
    alignItems: "center",
  },

  price2: {
    fontSize: "21px !important",
    fontWeight: "bold !important",
    marginLeft: "4px !important",

    [theme.breakpoints.up("md")]: {
      fontSize: "23px",
    },
  },

  Rs: {
    fontSize: "12px !important",
  },
  Leftover: {
    color: "#010660",
    fontSize: "10px !important",
    marginBottom: "-5px !important",
    marginLeft: "-10px !important",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  button: {
    marginTop: "4px !important",
    marginRight: "8px !important",
    fontSize: "12px !important",
    fontWeight: "bold !important",
    borderRadius: "30px !important",
    paddingTop: "10px !important",
    paddingBottom: "10px !important",
    paddingLeft: "28px !important",
    paddingRight: "28px !important",

    [theme.breakpoints.up("md")]: {
      paddingLeft: "46px !important",
      paddingRight: "46px !important",
      paddingTop: "12px !important",
      paddingBottom: "12px !important",
    },
  },

  Leftover2: {
    display: "none",
    color: "010660",
    fontSize: "10px !important",
    marginTop: "5px !important",
    marginLeft: "-10px !important",
    [theme.breakpoints.up("md")]: {
      display: "block ",
    },
  },

  divP: {
    right: 0,
    bottom: 0,
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    borderTop: "1px solid #ccc",
    width: "100%",

    "& > :not(:last-child)": {
      borderLeft: "1px solid #ccc",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
      borderTopLeftRadius: 30,
      borderLeft: "1px solid #ccc",
    },
  },

  p: {
    color: "rgb(0,0,0,0.54)",
    width: "33.3%",
    fontWeight: "bold",
    fontSize: "12px !important",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 4,
    paddingLeft: 4,

    [theme.breakpoints.up("md")]: {
      borderLeft: 0,
    },
  },

  icon: {
    width: 12,
    height: 12,
    marginRight: 4,
    marginBottom: -1,
  },

  table: {
    borderTop: "1px solid #ccc",
    padding: 16,
  },

  table1: {
    paddingTop: 12,
    [theme.breakpoints.up("md")]: {
      paddingRight: 16,
      paddingLeft: 16,
      paddingBottom: 16,
    },
  },

  table2: {
    border: "1px solid #ccc",
    overflow: "hidden",
    borderRadius: 30,
  },

  table3: {
    margin: -1,
    fontWeight: "bold",
    width: "calc(100% + 2px)",
    borderCollapse: "collapse",
  },

  td: {
    border: "1px solid #dee2e6",
    padding: 12,
    textAlign: "center",
  },

  textP: {
    fontSize: "12px !important",
  },

  darsad: {
    borderTop: "1px solid #ccc",
    padding: 16,
  },

  darsad1: {
    marginBottom: 20,
  },

  darsad2: {
    display: "flex",
    marginTop: 8,
    alignItems: "center",
    marginBottom: 8,

    [theme.breakpoints.up("md")]: {
      marginBottom: 32,
    },
  },

  icon2: {
    width: 24,
    height: 24,
    marginBottom: -2,
    marginLeft: 4,
  },

  textP3: {
    fontWeight: "600 !important",
    fontSize: "12px !important",
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },

  textP4: {
    display: "none !important",
    fontSize: "13px !important",
    [theme.breakpoints.up("md")]: {
      display: "block !important",
    },
  },

  darsad4: {
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    [theme.breakpoints.up("md")]: {
      borderLeft: "1px solid #ccc",
      marginBottom: 0,
      justifyContent: "center",
      flexDirection: "column",
      borderBottom: 0,
    },
  },

  darsad5: {
    width: "50px",
    height: "50px",
    color: "#f44336",
    marginTop: 20,
    display: "flex",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: "100%",
    marginBottom: 16,
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      width: "60px",
      height: "60px",
    },
  },

  darsadText: {
    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
  },

  darsad6: {
    alignItems: "end",
  },

  darsadText1: {
    fontSize: "11px !important",
  },

  darsad7: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      flexDirection: "column",
    },
  },

  divTable1: {
    borderTop: "1px solid #ccc",
    padding: 16,
  },

  divTable2: {
    paddingTop: 12,
    paddingBottom: 16,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },

  divTable3: {
    border: " 1px solid #ccc",
    overflow: "hidden",
    borderRadius: 30,
  },

  divTable4: {
    margin: -1,
    width: "calc(100% + 2px)",
    borderCollapse: "collapse",
  },

  divTable5: {
    textAlign: "center",
  },

  td2: {
    border: "1px solid #dee2e6",
    padding: 12,
  },

  tdText: {
    color: "rgb(0,0,0,0.54) !important",
    fontSize: "12px !important",
  },

  tdText1: {
    fontSize: "12px !important",
  },

  trText: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  trText1: {
    fontSize: "12px !important",
    fontWeight: "bold",
    textAlign: "end",
    paddingLeft: 30,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 48,
    },
  },
}));

export default App;
