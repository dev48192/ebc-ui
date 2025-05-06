import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, blue, green } from "@mui/material/colors";

const CardContainer: React.FC = () => {
  return (
    <>
      <Card sx={{ maxWidth: 355 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MD
            </Avatar>
          }
          title="Material Depo"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>

      {/* card2 */}

      <Card sx={{ maxWidth: 355 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              TD
            </Avatar>
          }
          title="Technical Desk"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>

        {/* card 3 */}

        <Card sx={{ maxWidth: 355 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                FA
              </Avatar>
            }
            title="Fabricator Area"
            subheader="September 14, 2016"
          />

          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </Card>
    </>
  );
};

export default CardContainer;
