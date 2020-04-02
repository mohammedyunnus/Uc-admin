import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  MenuItem,
  IconButton,
  Menu,
  menuItem,
  Button,
  Drawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  root: {
    display: 'flex',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    marginRight: 36,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },

  menuItem: {
    // ...theme.mixins.toolbar,
    opacity: 0.7,
    "&:hover": {
      backgroundColor: "#33c92d",
      opacity: 1
    }
  },

  arrowButton:{
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menuContainer: {
    marginLeft: "auto"
  },
  
  // drawer: {
  //   backgroundColor: theme.palette.primary
  // },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      backgroundColor: "#33c92d",
      opacity: 1
    }
  },
  drawerItemSelected: {
    "&.MuiListItemText-root": {
      opacity: 1
    },
    "&.Mui-selected": {
      backgroundColor: "#33c92d",
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.primary
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  hide: {
    display: "none"
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
const [openList,setopenList] = useState(false);
  const handleClick = () => {
    setopenList(!openList);
  };

  const menuOpen = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const menuClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const listClick = function() {
    setOpenDrawer(false);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/school":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/database":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/profile":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/Logout":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const routes = [
    { name: "DashBoard", link: "/", activeIndex: 0, icon: <DashboardTwoToneIcon /> },
    {
      name: "Uc School",
      link: "/school",
      activeIndex: 1,
      icon: <SchoolRoundedIcon />
    },
    { name: "Uc Database", link: "/database", activeIndex: 2, icon: <StorageRoundedIcon /> },
    
  ];
  const subList =[
   
    {
      name: "My Profile",
      link: "/profile",
      activeIndex: 3,
      icon: <PersonOutlineRoundedIcon />
    },
    { name: "Logout", link: "/Logout", activeIndex: 4, icon: <ExitToAppRoundedIcon /> }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            disableRipple
            onClick={() => setValue(0)}
          >
            <Typography variant="title">Uc-admin</Typography>
          </Button>
          <IconButton
            m="auto"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onMouseOver={menuOpen}
            className={classes.menuContainer}
          >
            <AccountCircle />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={menuClose}
            MenuListProps={{ onMouseLeave: menuClose }}
            elevation={0}
            style={{ zIndex: 1302 }}
          >
            <MenuItem
              classes={{ root: classes.menuItem }}
              onClick={() => {
                menuClose();
                setValue(3);
              }}
              component={Link}
              to="/profile"
            >
              My Profile
            </MenuItem>
            <MenuItem
              classes={{ root: classes.menuItem }}
              onClick={() => {
                menuClose();
                setValue(4);
              }}
              component={Link}
              to="/Logout"
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer
          })
        }}
      >
        <div className={classes.toolbarMargin}>
          <IconButton onClick={handleDrawerClose} className={classes.arrowButton}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
<Divider/>
        <List
  
        >
          {routes.map(route => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                listClick();
                setValue(route.activeIndex);
              }}
              className={classes.drawerItem}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}


  <ListItem button onClick={handleClick}>
<ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText disableTypography >
                Mohaammed Yunus
        </ListItemText>
        {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
{subList.map(list =>((
<Collapse in={openList} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
  <ListItem  className={classes.nested}
  key={`${list}${list.activeIndex}`}
  divider
  button
  component={Link}
  to={list.link}
  selected={value === list.activeIndex}
  classes={{ selected: classes.drawerItemSelected }}
  onClick={() => {
    listClick();
    setValue(list.activeIndex);
  }}
  className={classes.drawerItem}
  >
    <ListItemIcon>
     {list.icon}
    </ListItemIcon>
    <ListItemText>
      {list.name}
    </ListItemText>
  </ListItem>
</List>
</Collapse>

)))}
        </List>
      </Drawer>
      <main className={classes.content}  >
        <div className={classes.toolbarMargin} />
        <Switch>
        <Route exact path="/" component={() => <div>DashBoard</div>} />
            <Route exact path="/school" component={() => <div>tenaaa</div>} />
            <Route exact path="/database" component={() => <div>DIESL:FD</div>} />
            <Route
              exact
              path="/profile"
              component={() => <div>My Profile</div>}
            />
            <Route exact path="/Logout" component={() => <div>Logout</div>} />
          </Switch>
      </main>
      
    </div>
  );
}

export default Header;
