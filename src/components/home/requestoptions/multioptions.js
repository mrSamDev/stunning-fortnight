import * as React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { Button, Box, TextField, Grid } from "@mui/material";
const AddParameterAndHeader = (props) => {
	const { type } = props;
	const { register, control, loading } = useFormContext();

	const { fields, insert, remove } = useFieldArray({
		control,
		name: type,
	});

	return (
		<React.Fragment>
			<Button
				onClick={() =>
					insert(parseInt(2, 10), {
						key: "",
						value: "",
					})
				}
			>
				Add {type}
			</Button>

			<Box style={{ maxHeight: 300, overflow: "auto", marginTop: 10 }}>
				<Grid container direction={"column"} spacing={1}>
					{fields.map((item, index) => {
						return (
							<Grid item key={item.id}>
								<Grid container direction={"row"} justifyItems={"center"} alignItems={"center"} spacing={1}>
									<Grid item md={5} xs={5}>
										<Controller
											name={`${type}[${index}].key`}
											control={control}
											register={register}
											render={({ field: { value, onChange } }) => {
												return (
													<TextField
														disabled={loading}
														value={value}
														onChange={onChange}
														variant="outlined"
														required
														type="text"
														fullWidth
														label="Key"
														placeholder="Key"
														InputLabelProps={{ shrink: true }}
													/>
												);
											}}
										></Controller>
									</Grid>
									<Grid item md={5} xs={5}>
										<Controller
											name={`${type}[${index}].value`}
											control={control}
											register={register}
											render={({ field: { value, onChange } }) => {
												return (
													<TextField
														disabled={loading}
														value={value}
														onChange={onChange}
														variant="outlined"
														required
														type="text"
														fullWidth
														label="Value"
														placeholder="value"
														InputLabelProps={{ shrink: true }}
													/>
												);
											}}
										></Controller>
									</Grid>
									<Grid item md={1} xs={1}>
										<Button variant="contained" disabled={loading} fullWidth onClick={() => remove(index)}>
											Delete
										</Button>
									</Grid>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</React.Fragment>
	);
};

AddParameterAndHeader.propTypes = {
	type: PropTypes.string.isRequired,
};

AddParameterAndHeader.defaultProps = {
	type: "Authorization",
};

export default AddParameterAndHeader;
