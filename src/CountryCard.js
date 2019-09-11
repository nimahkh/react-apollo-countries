import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CountryCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {country} = props

  function handleExpandClick() {
    setExpanded(!expanded);
  }
console.log(country);
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        title={country.name}
        subheader={country.currency}
      />
      <CardMedia
        className={classes.media}
        image={`http://www.geognos.com/api/en/countries/flag/${country.code}.png`}
        title={country.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {country.native}
        </Typography>
      </CardContent>
      </Card>
    </Grid>
  );
}
