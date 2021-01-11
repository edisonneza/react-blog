import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/global-context';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  let history = useHistory();
  const { title, handleTitle } = useContext(GlobalContext);
console.log(title);

const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTitle(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Kryefaqja" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Kërko" value="/search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Preferencat" value="/favorites" icon={<BookmarksIcon />} />
      <BottomNavigationAction label="Ruajtur" value="/saved" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Cilësimet" value="/settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}
