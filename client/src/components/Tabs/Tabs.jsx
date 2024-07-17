import "./Tabs.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArchiveIcon from "@mui/icons-material/Archive";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Tabs(props) {
  const { handleTabChange, currentVisible } = props;
  return (
    <ButtonGroup
      className="tabs-group"
      sx={{ background: "transparent", float: "right" }}
      size="large"
      variant="contained"
      aria-label="Basic button group"
    >
      <Button
        id="current"
        sx={
          currentVisible
            ? { backgroundColor: "#0e59a2" }
            : { backgroundColor: "none" }
        }
        endIcon={<CheckBoxIcon />}
        onClick={handleTabChange}
      >
        Current
      </Button>
      <Button
        id="archive"
        sx={
          currentVisible
            ? { backgroundColor: "none" }
            : { backgroundColor: "#0e59a2" }
        }
        endIcon={<ArchiveIcon />}
        onClick={handleTabChange}
      >
        Archived
      </Button>
    </ButtonGroup>
  );
}
