import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { PopupState as PopupStateType } from "material-ui-popup-state/core";
import { Button, IconButton, Link, Menu, MenuItem, SvgIconTypeMap } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { OverridableComponent } from "@mui/material/OverridableComponent";

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

  function getMenuItem(
    menuItem: MenuItemData,
    index: number,
    _popupState: PopupStateType
  ) {
    const Icon = menuItem.icon;
    return (
      <MenuItem
        component={Link}
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        color="textPrimary"
        key={index}
      >
        <Icon />
        &nbsp;
        {menuItem.text}
      </MenuItem>
    );
  }

  function getMenuLink(menuItem: MenuItemData, index: number) {
    const Icon = menuItem.icon;
    return (
      <Button
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        color="inherit"
        key={index}
      >
        <Icon />
        &nbsp;
        {menuItem.text}
      </Button>
    );
  }

  return (<>
    <div className={classes.sectionDesktop}>
      {menuItems.map((menuItem, index) => getMenuLink(menuItem, index))}
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
              size="large">
              <MoreVertIcon />
            </IconButton>

            <Menu {...bindMenu(popupState)}>
              {menuItems.map((menuItem, index) =>
                getMenuItem(menuItem, index, popupState)
              )}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  </>);
}

export default HeaderMenu;
