import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  paperStyle: {
    padding: 20,
    height: '83vh',
    width: 1000,
    margin: "75px 0px 0px 450px"
  },
  avatarStyle: {
    backgroundColor: '#1bbd7e'
  },
  btnstyle: {
    margin: '10px 0'
  }
}));