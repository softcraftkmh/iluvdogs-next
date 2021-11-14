import styles from "../styles/components/Dog.module.scss";

type Props = {
	name: string;
	pictureURL: string;
};

const Dog = (props: Props) => {
	// const name = props.name;
	// const pictureURL = props.pictureURL;

	const { name, pictureURL } = props;

	return (
		<div className={styles.container}>
			<img className={styles.image} src={pictureURL} alt={name} />
			<p className={styles.title}>{name}</p>
		</div>
	);
};

export default Dog;
