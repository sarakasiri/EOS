import React, { useState } from "react";

import classes from "./styles/Sidebar.module.scss";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

import logo from "../../../../assets/admin/__x0023_Layer_x0020_3.svg";
import dashboardIcon from "../../../../assets/admin/vuesax-bold-home-2.svg";
import reportsIcon from "../../../../assets/admin/vuesax-bold-clipboard-text.svg";
import teacherIcon from "../../../../assets/admin/vuesax-bold-teacher-1.svg";
import folderIcon from "../../../../assets/admin/vuesax-bold-folder-open.svg";
import conversationIcon from "../../../../assets/admin/vuesax-bold-messages-3.svg";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem
            setSelected={setSelected}
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography className={classes.itemsTitle}>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div style={{ direction: "rtl" }}>
            <Box
                sx={{
                    position: "fixed",
                    height: "100vh",
                    "& .pro-sidebar-inner": {
                        background: `#f1f1f1 !important`,
                        borderRadius: "0.3rem"
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        filter: " invert(89%) sepia(5%) saturate(0%) hue-rotate(284deg) brightness(85%) contrast(89%) !important",
                        padding: "5px 20px 5px 10px !important",
                        margin: "12px 0"
                    },
                    // "& .pro-inner-item:hover": {
                    //     backgroundColor: "#1c1b20 !important",
                    //     marginRight: "1rem",
                    //     height: "1.2rem",
                    //     borderRadius: "0.1rem",
                    // },
                    "& .pro-menu-item.active": {
                        backgroundColor: "#1c1b20 !important",
                        borderRadius: "0.1rem",
                        margin: "0 1rem",
                        borderRadius: "0.3rem",
                    },
                }}

            >
                <ProSidebar
                    rtl
                    width={"13rem"}
                >
                    <Menu iconShape="square">

                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <LazyLoadImage
                                    src={logo}
                                    className={classes.logo}
                                />
                            </Box>
                        </Box>

                        <Box >
                            <Item
                                title="داشبورد"
                                to="/"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={dashboardIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="گزارشات"
                                to="/dashboard/new-application"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={reportsIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="دکتری"
                                to="/dashboard/new_ticket"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={folderIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="ارشد"
                                to="/dashboard/notification"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={teacherIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="اتاق گفتگو"
                                to="/profile"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={teacherIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="همه پرونده ها"
                                to="/dashboard/help"
                                icon={<LazyLoadImage className={classes.itemsIcon} src={conversationIcon} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>

                    </Menu>
                </ProSidebar>
            </Box>
        </div>
    );
};

export default Sidebar;