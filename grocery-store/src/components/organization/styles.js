import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  paperStyle: {
    padding: 20,
    height: '25vh',
    width: 1000,
    margin: "300px 0px 0px 450px"
  },
  avatarStyle: {
    backgroundColor: '#1bbd7e'
  },
  btnstyle: {
    margin: '10px 0'
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  },
  AddButton: {
    margin: "0px 0px 0px 40px"
  }
}));