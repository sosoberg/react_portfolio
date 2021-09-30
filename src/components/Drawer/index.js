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
import BookIcon from "@material-ui/icons/Book";
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Drawers(props) {
  return (
    <>
      <Drawer anchor={"right"} open={props.open} onClose={props.handleClose} >
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/react_portfolio/">
                  <HomeIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/react_portfolio/">
                <ListItemText primary={"Home Page"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/react_portfolio/projects">
                  <AccountTreeIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/react_portfolio/projects">
                <ListItemText primary={"Projects"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/react_portfolio/contact">
                  <ContactMailIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/react_portfolio/contact">
                <ListItemText primary={"Contact"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/react_portfolio/blog">
                  <BookIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/react_portfolio/blog">
                <ListItemText primary={"Blog"} />
              </Link>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  );
}
