import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Camera from "@mui/icons-material/Camera";
import Config from "../../../config";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Camera style={{ marginRight: 10 }} />
				<Typography variant="h6">{Config.appName}</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
