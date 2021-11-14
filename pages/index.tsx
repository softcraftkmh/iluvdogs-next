import type { NextPage } from "next";

import Dog from "../components/Dog";

import type { Dog as DogType } from "../models/dog";

import styles from "../styles/pages/index.module.scss";

const dogs: DogType[] = [
	{
		name: "Golden Retriever",
		pictureURL:
			"https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg",
	},
	{
		name: "German Shepherd",
		pictureURL:
			"https://www.akc.org/wp-content/uploads/2016/06/German-Shepherd-Dog-laying-down-in-the-backyard-500x487.jpeg",
	},
	{
		name: "Alaskan Malamute",
		pictureURL:
			"https://media-be.chewy.com/wp-content/uploads/2021/05/07130329/Alaskan-Malamute_FeaturedImage.jpg",
	},
	{
		name: "Husky",
		pictureURL:
			"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg",
	},
];

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>I Luv Dogs</h1>
			<div className={styles.dogs}>
				{dogs.map((dog, index) => {
					return (
						<Dog key={index} name={dog.name} pictureURL={dog.pictureURL} />
					);
				})}
			</div>
		</div>
	);
};

// const raw = [1, 2, 3];

// const addOne = (value: number) => 1 + value;

// const output = raw.map((val) => addOne(val)); // [2, 3, 4]

export default Home;
