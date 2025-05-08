import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, blue, green, pink, purple, yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const cardGrid = {
  xs: 12,
  md: 2,
  sm: 6,
};
const CardContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          <Paper onClick={() => navigate('/material-depo')}>
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>

        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          {' '}
          <Paper>
            {' '}
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          {' '}
          <Paper>
            {' '}
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          {' '}
          <Paper>
            <Card sx={{ maxWidth: 355 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: yellow[900] }} aria-label="recipe">
                    MH
                  </Avatar>
                }
                title="Manpower Hub"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          {' '}
          <Paper>
            {' '}
            <Card sx={{ maxWidth: 355 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                    HT
                  </Avatar>
                }
                title="Hiring Terminal"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: cardGrid.xs, md: 2, sm: cardGrid.sm }}>
          {' '}
          <Paper>
            {' '}
            <Card sx={{ maxWidth: 355 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                    CZ
                  </Avatar>
                }
                title="Contract Zon"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CardContainer;
