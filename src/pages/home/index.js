import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useForm, FormProvider } from "react-hook-form";
import UrlField from "../../components/home/url";
import RequestOptions from "../../components/home/requestoptions";
import Requester from "../../services/RequestGenerator";
import { generateUUID } from "../../services/GenerateUUID";
import { useState } from "react";
import ResponseView from "../../components/home/response";

/*
{
			data: [],
			loading: true,
			time: 0,
			uuid: null,
			status: 200,
		},

*/

const Home = () => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const form = useForm();

	const onSubmit = async (values) => {
		setResponse(null);
		setLoading(true);
		const uuid = generateUUID();
		const init = new Requester();
		const { body: data, status, time } = await init.send(values);
		setResponse({ uuid: uuid, status, data, uuid, time });
		setLoading(false);
	};

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
				<Grid item xs={12}>
					<FormProvider {...form} loading={loading}>
						<UrlField />
					</FormProvider>
				</Grid>
				<Grid item xs={12}>
					<Paper elevation={2}>
						<FormProvider {...form} loading={loading}>
							<RequestOptions />
						</FormProvider>
					</Paper>
				</Grid>
				{response && (
					<Grid item xs={12}>
						<Paper elevation={2} style={{ padding: 10 }}>
							<ResponseView response={response} />
						</Paper>
					</Grid>
				)}
			</Grid>
		</form>
	);
};

export default Home;
