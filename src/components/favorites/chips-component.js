import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import SiteService from "../../services/siteService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const siteService = new SiteService();

export default function ChipsComponent() {
  const classes = useStyles();
  const [tags, setTags] = React.useState([]);

  const handleClick = (value) => {
    siteService.saveTags(value).then(data => setTags(data));
  };

  React.useEffect(() => {
    siteService.getTags().then(data => setTags(data));
  }, []);

  return (
    <div className={classes.root}>
      {tags.map((item, index) => {
        return (
          <Chip
            key={index}
            label={item.value}
            onClick={() => handleClick(item.value)}
            onDelete={() => handleClick(item.value)}
            deleteIcon={!item.active ? <DoneIcon /> : null}
            variant="outlined"
            color={item.active ? "primary" : "default"}
          />
        );
      })}
    </div>
  );
}
