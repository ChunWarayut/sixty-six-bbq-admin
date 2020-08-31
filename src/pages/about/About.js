import React, { useState, useEffect } from "react";
import {
  Grid,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Table,
  makeStyles,
  TableHead,
  Button,
} from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";

// data
import { getAboutList, deleteAbout } from "../../api/about";

import { Edit, Delete, ArrowBack, ArrowForward, Add } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function About() {
  const classes = useStyles();
  const history = useHistory();

  const [aboutListData, setAboutListData] = useState({});
  useEffect(() => {
    fetchAboutList();
  }, []);

  const fetchAboutList = async page =>
    await getAboutList(page).then(e => setAboutListData(e));

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <PageTitle title="About - Lists" />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<Add />}
          onClick={() => history.push("about/create")}
        >
          ADD ABOUT
        </Button>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right"> # </TableCell>
                  <TableCell align="right"> titleTH </TableCell>
                  <TableCell align="right"> titleEN </TableCell>
                  <TableCell align="right"> detailTH </TableCell>
                  <TableCell align="right"> detailEN </TableCell>
                  <TableCell align="right"> UserCreate </TableCell>
                  <TableCell align="right"> UserUpdate </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right"> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {aboutListData?.data?.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row" align="right">
                      {aboutListData?.page * aboutListData?.size +
                        i -
                        (aboutListData?.size - 1)}
                    </TableCell>
                    <TableCell align="right"> {row.titleTH} </TableCell>
                    <TableCell align="right"> {row.titleEN} </TableCell>
                    <TableCell align="right"> {row.detailTH} </TableCell>
                    <TableCell align="right"> {row.detailEN} </TableCell>
                    <TableCell align="right">
                      {row.UserCreate.firstname}
                    </TableCell>
                    <TableCell align="right">
                      {row.UserUpdate.firstname}
                    </TableCell>
                    <TableCell align="right">
                      <Edit
                        fontSize="small"
                        style={{ color: orange[500] }}
                        onClick={() => history.push(`about/${row.id}`)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Delete
                        fontSize="small"
                        color="secondary"
                        onClick={async () => {
                          await deleteAbout(row.id);
                          await fetchAboutList(aboutListData.page);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <ArrowBack
            onClick={() =>
              fetchAboutList(
                aboutListData?.page > 0
                  ? aboutListData?.page - 1
                  : aboutListData?.page,
              )
            }
          />
          <p>
            {aboutListData?.page} of {aboutListData?.total}
          </p>
          <ArrowForward
            onClick={() =>
              fetchAboutList(
                aboutListData?.page < aboutListData?.total
                  ? aboutListData?.page + 1
                  : aboutListData?.page,
              )
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
