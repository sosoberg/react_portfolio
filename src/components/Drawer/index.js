import React from "react";

import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./style.css";

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Drawers(props) {
  return (
    <>
      <Drawer anchor={"right"} open={props.open} onClose={props.handleClose}>
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/">
                  <HomeIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/">
                <ListItemText primary={"Home Page"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/projects">
                  <AccountTreeIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/projects">
                <ListItemText primary={"Projects"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/resume">
                  <DescriptionIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/resume">
                <ListItemText primary={"Resume"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/contact">
                  <ContactMailIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/contact">
                <ListItemText primary={"Contact"} />
              </Link>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  );
}
