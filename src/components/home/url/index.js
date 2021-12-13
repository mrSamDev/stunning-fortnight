import React from "react";
import AccountCircle from "@mui/icons-material/LinkSharp";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormControl, Paper, InputLabel, Select, MenuItem, Button, CircularProgress } from "@mui/material";
import { httpMethods } from "../../../contants";
const UrlField = () => {
	const { register, control, formState, loading } = useFormContext();

	return (
		<Paper style={{ width: "100%", padding: 4 }}>
			<Grid container direction="row" spacing={1} alignItems={"center"} justifyItems={"center"}>
				<Grid item md={2} sm={4} xs={12}>
					<Controller
						name="method"
						defaultValue="GET"
						control={control}
						register={register}
						render={({ field: { value, onChange } }) => {
							return (
								<FormControl disabled={loading} required fullWidth variant="outlined">
									<InputLabel>Http Method</InputLabel>
									<Select disabled={loading} value={value} onChange={onChange} label="format">
										{httpMethods.map(function (method) {
											return (
												<MenuItem value={method.id}>
													{method.label}&nbsp;: &nbsp;{method.desc}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
							);
						}}
					></Controller>
				</Grid>
				<Grid item md={9} sm={4} xs={12}>
					<Controller
						name="url"
						defaultValue="https://api.github.com/users"
						control={control}
						register={register}
						render={({ field: { value, onChange } }) => {
							return (
								<TextField
									error={Boolean(formState?.errors?.url)}
									disabled={loading}
									variant="outlined"
									required
									type="text"
									fullWidth
									label="URL"
									value={value}
									onChange={onChange}
									placeholder="https://api.github.com/users"
									name="url"
									InputLabelProps={{ shrink: true }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AccountCircle />
											</InputAdornment>
										),
									}}
								/>
							);
						}}
					></Controller>
				</Grid>
				<Grid item md={1} sm={4} xs={12} className="elementInCenter">
					<Button disabled={loading} fullWidth startIcon={loading ? <CircularProgress size={12} /> : null} type="submit" variant="contained" color="primary">
						Send
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default UrlField;
