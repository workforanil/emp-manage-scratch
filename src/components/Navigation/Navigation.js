import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
      <div className={classes.navigationBox}>
        <div className={classes.logo}>
          <h2>Logo</h2>
        </div>
        <div className={classes.navLink}>
          <button className={classes.btnPrimary}>+New Employee</button>
        </div>
      </div>
  );
};

export default Navigation;
