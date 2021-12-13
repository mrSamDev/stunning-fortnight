import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import Lock from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";

const Authorization = () => {
	const { register, loading, control } = useFormContext();
	return (
		<Controller
			name={"authorization"}
			control={control}
			register={register}
			render={({ field: { value, onChange } }) => {
				return (
					<TextField
						disabled={loading}
						onChange={onChange}
						value={value}
						variant="outlined"
						type="text"
						fullWidth
						label="Authorization"
						placeholder="Bear ****"
						InputLabelProps={{ shrink: true }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Lock />
								</InputAdornment>
							),
						}}
					/>
				);
			}}
		></Controller>
	);
};

export default Authorization;
