import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import TextField from "@material-ui/core/TextField";
import Widget from "../../components/Widget/Widget";
import { Save } from "@material-ui/icons";
import { createAbout } from "../../api/about";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const about = {
  titleTH: "",
  titleEN: "",
  detailTH: "",
  detailEN: "",
};

export default function AboutCreate() {
  const history = useHistory();
  const [aboutData, setAboutData] = useState(about);
  const handleCreateAbout = () => {
    createAbout(aboutData)
      .then(() =>
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: false,
        }).then(() => history.push("/app/about")),
      )
      .catch(() =>
        swal({
          title: "Error!",
          text: "Check your Data",
          icon: "error",
          button: false,
        }),
      );
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <PageTitle title="About - Create" />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  required
                  id="titleTH"
                  label="titleTH"
                  defaultValue={aboutData?.titleTH}
                  onChange={e =>
                    setAboutData({ ...aboutData, titleTH: e.target.value })
                  }
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="titleEN"
                  label="titleEN"
                  defaultValue={aboutData?.titleEN}
                  onChange={e =>
                    setAboutData({ ...aboutData, titleEN: e.target.value })
                  }
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="detailTH"
                  label="detailTH"
                  defaultValue={aboutData?.detailTH}
                  onChange={e =>
                    setAboutData({ ...aboutData, detailTH: e.target.value })
                  }
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  rows={15}
                  multiline
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="detailEN"
                  label="detailEN"
                  defaultValue={aboutData?.detailEN}
                  onChange={e =>
                    setAboutData({ ...aboutData, detailEN: e.target.value })
                  }
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  rows={15}
                  multiline
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <div style={{ padding: 20 }}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<Save />}
            onClick={() => handleCreateAbout()}
          >
            SAVE ABOUT
          </Button>
        </Grid>
      </div>
    </>
  );
}
