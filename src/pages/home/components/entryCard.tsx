import React, { useState } from "react";
import {
  Card,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  CardContent,
  Link,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

import { Entry } from "src/types/entry";

interface EntryCardPropType {
  entry: Entry;
  index: number;
}

export const EntryCard: React.FC<EntryCardPropType> = ({ entry, index }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      elevation={4}
      sx={{ width: "100%", padding: "12px", marginBottom: "15px" }}
    >
      <CardActions disableSpacing>
        <Typography variant="h5" color="primary">
          {`${index}: ${entry.API}`}
        </Typography>
        <IconButton sx={{ marginLeft: "auto" }} onClick={handleExpandClick}>
          <ExpandMoreIcon
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all 0.2s ease-in",
            }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description :</Typography>
          <Typography paragraph sx={{ paddingLeft: "15px" }}>
            {entry.Description}
          </Typography>
          <Typography paragraph>{`Auth : ${entry.Auth}`}</Typography>
          <Typography paragraph>{`HTTPS : ${entry.HTTPS}`}</Typography>
          <Typography paragraph>{`Cors : ${entry.Cors}`}</Typography>
          <Typography paragraph>
            Link : <Link href={entry.Link}>{`${entry.Link}`}</Link>
          </Typography>
          <Typography paragraph>{`Category : ${entry.Category}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
