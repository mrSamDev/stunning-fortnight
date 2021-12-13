import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../shared/tabpanel";
import AddParameterAndHeader from "./multioptions";
import Authorization from "./authorization";
import Body from "./body";

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function RequestOptions() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Authorization" {...a11yProps(0)} />
					<Tab label="Parameters" {...a11yProps(1)} />
					<Tab label="Headers" {...a11yProps(2)} />
					<Tab label="Body" {...a11yProps(3)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Authorization />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<AddParameterAndHeader type="parameters" />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<AddParameterAndHeader type="headers" />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Body type="Headers" />
			</TabPanel>
		</Box>
	);
}
