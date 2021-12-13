import CodeEditor from "@uiw/react-textarea-code-editor";
import { Fragment } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { contentType } from "../../../contants";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const BodyInput = () => {
	const { control, loading, register, watch } = useFormContext();
	const contentTypeValue = watch("Content-Type");
	return (
		<Fragment>
			<Controller
				name="contentType"
				defaultValue="json"
				control={control}
				register={register}
				render={({ field: { value, onChange } }) => {
					return (
						<FormControl disabled={loading} required variant="outlined" style={{ marginBottom: 10 }}>
							<InputLabel>Content Type</InputLabel>
							<Select value={value} onChange={onChange} label="format">
								{contentType.map(function (content) {
									return <MenuItem value={content}>{`application/${content}`}</MenuItem>;
								})}
							</Select>
						</FormControl>
					);
				}}
			></Controller>

			<div style={{ maxHeight: 300, overflow: "auto" }}>
				<Controller
					name="body"
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<CodeEditor
								disabled={loading}
								value={value}
								language={contentTypeValue === "javascript" ? "js" : "json"}
								placeholder={`Please enter ${contentTypeValue} code.`}
								onChange={(evn) => onChange(evn.target.value)}
								padding={15}
								style={{
									fontSize: 12,
									backgroundColor: "#f5f5f5",
									fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
								}}
							/>
						);
					}}
				/>
			</div>
		</Fragment>
	);
};

export default BodyInput;
