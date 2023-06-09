import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ title, icon }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center"
            }}>
            <div style={{
                borderRadius: "0.4rem",
                marginRight: "0.8rem",
                backgroundColor: "#121f3e"
            }}>

                {icon}
            </div>
            <div>

                <Typography
                    sx={{
                        m: "0 0 3px 0",
                        fontSize: "2.3rem",
                        fontWeight: "550",
                        fontFamily: "Montserrat",
                        color: "#121f3e"
                    }}
                >
                    {title}
                </Typography>
            </div>
        </Box>
    );
};

export default Header;