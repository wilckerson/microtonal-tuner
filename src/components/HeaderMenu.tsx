import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { PopupState as PopupStateType } from "material-ui-popup-state/core";
import {
  Button,
  IconButton,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  SvgIconTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

type MenuItemData = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  url: string;
};

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function HeaderMenu() {
  const classes = useStyles();
  const menuItems: MenuItemData[] = [
    {
      icon: FeedbackIcon,
      text: "Feedback",
      url: "https://github.com/wilckerson/microtonal-tuner/issues",
    },
    {
      icon: GitHubIcon,
      text: "Contribute",
      url: "https://github.com/wilckerson/microtonal-tuner",
    },
  ];

  function getMenuItem(menuItem: MenuItemData, popupState: PopupStateType) {
    const Icon = menuItem.icon;
    return (
      <MenuItem
        component={Link}
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        color="textPrimary"
      >
        <Icon />
        &nbsp;
        {menuItem.text}
      </MenuItem>
    );
  }

  function getMenuLink(menuItem: MenuItemData) {
    const Icon = menuItem.icon;
    return (
      <Button
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        color="inherit"
      >
        <Icon />
        &nbsp;
        {menuItem.text}
      </Button>
    );
  }

  return (
    <>
      <div className={classes.sectionDesktop}>
        {menuItems.map((menuItem) => getMenuLink(menuItem))}
      </div>

      <div className={classes.sectionMobile}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton
                edge="end"
                aria-label="more"
                color="inherit"
                {...bindTrigger(popupState)}
              >
                <MoreVertIcon />
              </IconButton>

              <Menu {...bindMenu(popupState)}>
                {menuItems.map((menuItem) => getMenuItem(menuItem, popupState))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </>
  );
}

export default HeaderMenu;
