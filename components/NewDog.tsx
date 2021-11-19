import styles from "../styles/components/NewDog.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
	name: "",
	pictureURL: "",
};

const ValidationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	pictureURL: Yup.string().url("Must be a valid URL.").required("Required"),
});

const NewDog = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, actions) => {
				console.log({ values, actions });
			}}
		>
			<Form>
				<div className={styles.input}>
					<label htmlFor="name">Name</label>
					<Field id="name" name="name" placeholder="Name" />
				</div>
				<div className={styles.input}>
					<label htmlFor="pictureURL">Picture URL</label>
					<Field id="pictureURL" name="pictureURL" placeholder="pictureURL" />
				</div>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default NewDog;
