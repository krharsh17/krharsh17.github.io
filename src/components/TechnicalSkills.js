import React from 'react'
import VizSensor from 'react-visibility-sensor'
import LinearProgress from '@material-ui/core/LinearProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import { makeStyles } from '@material-ui/styles'
import { Typography, useMediaQuery } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress)


const TechnicalSkills = () => {

  const isDesktop = useMediaQuery("@media (min-width: 468px)")

  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.background.default,
      padding: '50px 0',
    },
    textCenter: {
      textAlign: 'center',
    },
    skillCol: {
      width: '600px',
    },
  }))

  const classes = useStyles()


  return (
    <Grid direction={'column'} className={classes.root}>
      <Typography variant={isDesktop ? 'h3' : 'h4'} color={'secondary'} className={classes.textCenter}>My <b>Technical</b> Skills <span
        role="img"
        aria-label=":tech:">👨‍💻</span></Typography>
      <Typography variant={'subtitle1'} color={'primary'} className={classes.textCenter}>These are the tech that I love the
        most</Typography>
      <Grid container item direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item container direction={'col'} className={classes.skillCol}>
          <Grid item xs={12}><TechnicalSkill title='Android Application Development' value={85} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='VCS with Git' value={90} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='Firebase' value={85} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='Google Cloud Platform' value={75} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='Flutter' value={50} /></Grid>
        </Grid>
        <Grid item container direction={'col'} className={classes.skillCol}>
          <Grid item xs={12}><TechnicalSkill title='MongoDB' value={80} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='ExpressJS' value={81} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='ReactJS' value={85} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='NodeJS' value={83} /></Grid>
          <Grid item xs={12}><TechnicalSkill title='Serverless Cloud Computing' value={90} /></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const TechnicalSkill = ({ title, value }) => {

  const useStyles = makeStyles(() => ({
    root: {
      padding: '8px',
      margin: '12px',
    },
  }))

  const classes = useStyles()
  const [state, setState] = React.useState({
    title, value, filled: 0,
  })


  return (
    <div className={classes.root}>
      <Typography variant={'body1'}>{state.title}</Typography>
      <VizSensor onChange={(isVisible) => {
        if (isVisible) {
          setState({ ...state, filled: state.value })
        } else {
          setState({ ...state, filled: 0 })
        }
      }}>
        <BorderLinearProgress color={'secondary'} variant="determinate" value={state.filled} />
      </VizSensor>
    </div>
  )
}

export default TechnicalSkills