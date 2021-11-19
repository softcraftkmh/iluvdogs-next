import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "../styles/components/NewDog.module.scss";

const initialValues = {
	name: "",
	pictureURL: "",
};

const ValidationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	pictureURL: Yup.string().url("Must be a valid URL.").required("Required"),
});

type Props = {
	onSubmit: (values: typeof initialValues) => void;
};

const NewDog = (props: Props) => {
	const { onSubmit } = props;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values) => {
				onSubmit(values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<div className={styles.input}>
						<label htmlFor="name">Name</label>
						<Field id="name" name="name" placeholder="Name" />
					</div>
					{touched.name && errors.name && (
						<div className={styles.error}>{errors.name}</div>
					)}
					<div className={styles.input}>
						<label htmlFor="pictureURL">Picture URL</label>
						<Field id="pictureURL" name="pictureURL" placeholder="pictureURL" />
					</div>
					{touched.pictureURL && errors.pictureURL && (
						<div className={styles.error}>{errors.pictureURL}</div>
					)}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default NewDog;
