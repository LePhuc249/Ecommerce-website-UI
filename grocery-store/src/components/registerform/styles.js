import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  paperStyle: {
    padding: 20,
    height: '80vh',
    width: 350,
    margin: "100px 0px 0px 750px"
  },
  avatarStyle: {
    backgroundColor: '#1bbd7e'
  },
  btnstyle: {
    margin: '10px 0'
  }
}));