import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import config from "../../../theme/colors";

const ResponseView = ({ response }) => {
	return (
		<Fragment>
			<Grid container direction={"row"}>
				<Grid item xs={12}>
					<Grid container direction={"row"}>
						<Typography>
							Status <span style={{ color: response?.status == 404 ? config.error : config.primary }}>{response?.status}</span> ||
						</Typography>
						&nbsp;
						<Typography>
							Time <span style={{ color: config.primary }}> {response?.time} ms</span>
						</Typography>
					</Grid>
				</Grid>

				{response.data ? (
					<Grid item xs={12} style={{ maxHeight: 300, overflow: "auto", pointerEvents: "none" }}>
						<CodeEditor
							value={JSON.stringify(response.data, null, 2)}
							language={"json"}
							padding={15}
							style={{
								fontSize: 12,
								backgroundColor: "#f5f5f5",
								fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
							}}
						/>
					</Grid>
				) : null}
			</Grid>
		</Fragment>
	);
};

export default ResponseView;
