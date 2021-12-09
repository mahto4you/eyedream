import React from 'react';
import { Grid, Typography, Paper, makeStyles, Box } from '@material-ui/core';
import BodyText from '../BodyText';
import CirclePic from '../../assets/images/CirclePic.svg';
import TitleText from '../TitleText';
import BlogImg from '../../assets/images/BlogImage.svg';
import CardPhoto from '../../assets/images/CardPhoto.svg';
import AbhishekSehgal from '../../assets/images/AbhishekSehgal.svg';
import { useHistory } from 'react-router-dom';
// import { useStyles } from '../styles/blog';
const useStyles = makeStyles((theme) => ({
	bc1: {
		margin: '10px',
		display: 'flex',
		alignItems: 'flex-start',
	},
	b1: {
		height: ' unset',
		marginTop: '50px',
		'@media (min-width: 600px)': {
			marginTop: '60px',
		},
		'@media (min-width: 960px)': {
			marginTop: '100px',
		},
		'@media (min-width: 1280px)': {
			marginTop: '80px',
		},
	},
	b2: {
		display: ' flex',
		alignItems: 'center',
		flexDirection: 'column',

		'@media (min-width: 600px)': {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	},
	b3: {
		textAlign: 'center',
		marginBottom: '16px',

		'@media (min-width: 600px)': {
			textAlign: 'left',
		},
	},
	b4: {
		display: 'flex',
		width: '90%',
		marginTop: '10px',
		textAlign: 'center',
		justifyContent: 'space-between',
		'@media (min-width: 600px)': {
			width: '30%',
		},
		'@media (min-width: 960px)': {
			width: '15%',
		},
	},
	b5: {
		width: '60px',
		cursor: 'pointer',
		height: '50px',
		display: 'flex',
		boxShadow: '5px 5px 30px rgb(53 98 255 / 15%)',
		alignItems: 'center',
		borderRadius: '10px',
		justifyContent: 'center',
	},
	b6: {
		display: 'flex',
		marginTop: '3%',
		justifyContent: 'space-between',
	},
	b7: {
		cursor: 'pointer',
		// height: '480px',
		padding: '20px',
		position: 'relative',
		borderRadius: '20px',
		boxShadow: ' 0px 10px 30px rgba(72, 68, 255, 0.15)',
		'@media (max-width: 959.95px)': {
			marginTop: '20px',
		},
	},
}));

const TeamCard = ({ src, index, val }) => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<>
			<Grid item xs={12} sm={12} md={6} lg={3}>
				<Box style={{ marginTop: val ? '90px' : '' }}>
					<img
						src={CardPhoto}
						alt='blg'
						style={{ width: '100%', marginTop: 20 }}></img>
					<Box display='flex' justifyContent='space-between' mt={'10px'}>
						<Box>
							<TitleText>Abhishek Sehgal</TitleText>
							<TitleText one>Founder</TitleText>
						</Box>
						<img src={AbhishekSehgal}></img>
					</Box>
				</Box>
			</Grid>
		</>
	);
};

export default TeamCard;
