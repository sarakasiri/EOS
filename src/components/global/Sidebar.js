import React, { useState } from "react";

import classes from "./styles/Sidebar.module.scss";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

import logo from "../../assets/applyForm/logo.svg";
import dashboardIcon from "../../assets/applyForm/vuesax-bold-grid-3.svg";
import applyListIcon from "../../assets/applyForm/vuesax-bold-send-2.svg";
import ticketsIcon from "../../assets/applyForm/vuesax-bold-message-text.svg";
import notificationIcon from "../../assets/applyForm/vuesax-bold-notification-status-1.svg";
import profileInfoIcon from "../../assets/applyForm/vuesax-bold-setting-2.svg";
import helpIcon from "../../assets/applyForm/vuesax-bold-lifebuoy.svg";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const ReactSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                position: "fixed",
                height: "100vh",
                "& .pro-sidebar-inner": {
                    background: ` #2c1970 !important`,
                    borderRadius: "0.3rem"
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    filter: "invert(100%) sepia(100%) saturate(100%) hue-rotate(181deg) brightness(100%) contrast(30%) !important",
                    padding: "12px 20px 11px 15px !important",
                },
                "& .pro-inner-item:hover": {
                    filter: "brightness(0) invert(1) !important",
                },
                "& .pro-menu-item.active": {
                    filter: "brightness(0) invert(1) !important",
                },
            }}

        >
            <ProSidebar
                collapsed={isCollapsed}
                width={"16.5rem"}
                collapsedWidth={"4.6rem"}
            >
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    {/* <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={<LazyLoadImage className={classes.itemsIcon} src={dashboardIcon} />}
                        style={{
                            marginLeft: "auto",
                        }}
                    >
                    </MenuItem> */}
                    <div
                        className={classes.openIcon}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={<LazyLoadImage src={dashboardIcon} />}
                    >
                        <LazyLoadImage src={dashboardIcon} />
                    </div>


                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img
                                src={logo}
                                className={`${!isCollapsed && classes.notCollapsedlogo} ${isCollapsed && classes.collapsedlogo}`}
                            />
                            {!isCollapsed && (
                                <Typography
                                    className={classes.iustTitle}
                                >
                                    Iran University Of Science
                                    And Technology
                                </Typography>
                            )}
                        </Box>
                    </Box>



                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>
                        <div className={`${!isCollapsed && classes.notCollapsedDash} ${isCollapsed && classes.collapsedDash}`}></div>
                    </div>


                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={dashboardIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Apply List"
                            to="/dashboard/new-application"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={applyListIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Tickets"
                            to="/dashboard/new_ticket"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={ticketsIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Notifications"
                            to="/dashboard/notification"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={notificationIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Profile Info"
                            to="/profile"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={profileInfoIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Help"
                            to="/dashboard/help"
                            icon={<LazyLoadImage className={classes.itemsIcon} src={helpIcon} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>

                    <Box className={classes.profileCardContainer}>
                        {isCollapsed && (
                            <Box className={classes.collapsedProfileCard}>

                                <Avatar
                                    style={{
                                        width: "2.7rem",
                                        height: "2.7rem",
                                        margin: " 0.4rem 0"
                                    }}
                                />
                                <Button
                                    style={{
                                        backgroundColor: "#ff404059",
                                        textTransform: "capitalize",
                                        borderRadius: "0.4rem",
                                        margin: "0.4rem 0 0.9rem 0",
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: "#ff4040",
                                            fontSize: "0.7rem"
                                        }}>Logout</Typography>
                                </Button>
                            </Box>
                        )}
                        {!isCollapsed && (
                            <Box className={classes.profileCard}>
                                <Avatar
                                    style={{
                                        width: "3rem",
                                        height: "3rem",
                                        margin: " 0.4rem 0"
                                    }}
                                />
                                <Typography
                                    style={{
                                        color: "#bfb9d4",
                                        fontFamily: "Montserrat",
                                        fontSize: "0.7rem",
                                        marginBottom: "0.8rem"
                                    }}>
                                    profile completed
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#ffffff",
                                        fontFamily: "Montserrat",
                                        fontSize: "1rem",
                                        fontWeight: "540",
                                        marginBottom: "0.4rem"
                                    }}>
                                    pouria Mahjoub
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#bfb9d4",
                                        fontFamily: "Montserrat",
                                        fontSize: "0.7rem"
                                    }}>
                                    student No :
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#bfb9d4",
                                        fontFamily: "Montserrat",
                                        fontSize: "0.7rem",
                                        marginBottom: "0.4rem"
                                    }}>
                                    No. of Applications :
                                </Typography>
                                <Button
                                    style={{
                                        backgroundColor: "#ff404059",
                                        textTransform: "capitalize",
                                        borderRadius: "0.4rem",
                                        margin: "0.4rem 0 0.9rem 0"
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: "#ff4040",
                                            fontSize: "0.8rem"
                                        }}>Logout</Typography>
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default ReactSidebar;