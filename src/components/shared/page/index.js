import React, { forwardRef, Fragment } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Config from "../../../config";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../header";

const Page = forwardRef((props) => {
	return (
		<Fragment>
			<CssBaseline />
			<Helmet>
				<title>{`${props.title} | ${Config.appName}`}</title>
			</Helmet>
			<Header />
			<Grid
				container
				direction="column"
				alignContent={"stretch"}
				style={{ padding: props.disablePadding ? 0 : 8 * 3, maxWidth: props.fluid ? "auto" : 1400, margin: "0px auto", ...props.additionalStyles }}
			>
				{props.children}
			</Grid>
		</Fragment>
	);
});

Page.propTypes = {
	children: PropTypes.node.isRequired,
	disablePadding: PropTypes.bool,
	fluid: PropTypes.bool,
	additionalStyles: PropTypes.object,
	title: PropTypes.string.isRequired,
};

Page.defaultProps = {
	children: <Fragment />,
	disablePadding: false,
	additionalStyles: {},
	fluid: false,
	title: "API",
};

export default Page;
