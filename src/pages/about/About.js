import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";

// data
import getAboutList from "../../api/about";

export default function Tables() {
  const [aboutListData, setAboutListData] = useState([]);
  useEffect(() => {
    const fetchAboutList = async () =>
      await getAboutList().then(e => setAboutListData(e));
    fetchAboutList();
  }, []);
  return (
    <>
      <PageTitle title="About" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="About List"
            data={aboutListData}
            columns={[
              { name: "titleTH", label: "titleTH" },
              { name: "titleEN", label: "titleEN" },
              { name: "detailTH", label: "detailTH" },
              { name: "detailEN", label: "detailEN" },
              { name: "UserCreate.firstname", label: "UserCreate" },
              { name: "UserUpdate.firstname", label: "UserUpdate" },
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
