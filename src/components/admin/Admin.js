import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { useHistory, Link } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
function Admin() {
  const history = useHistory();
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === null) {
      const path = "login";
      history.push(path);
    }
  }, []);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: "center",
    },
    body: {
      fontSize: 14,
      textAlign: "center",
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const showTable = () => {
    const createData = (name, calories, fat, carbs, protein) => {
      return { name, calories, fat, carbs, protein };
    };
    const rows = [
      createData("Umar", 159, 4.0, 42, 2.0),
      createData("Faizan", 159, 6.0, 24, 4.0),
      createData("Pratham", 169, 5.0, 2, 3.0),
      createData("Tabrez", 189, 6.0, 4, 4.0),
      createData("Shivank", 259, 7.0, 24, 5.0),
    ];
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Calories </StyledTableCell>
              <StyledTableCell>Fat (g)</StyledTableCell>
              <StyledTableCell>Carbs (g)</StyledTableCell>
              <StyledTableCell>Protein (g) </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat} </StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      </div>
      <div className={styles.sidebarAndContentWrapper}>
        <div
          className={styles.sidebar}
          id={showSidebar ? styles.showSidebar : styles.hideSidebar}
        >
          <Sidebar />
        </div>
        <div className={styles.content}>{showTable()}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
