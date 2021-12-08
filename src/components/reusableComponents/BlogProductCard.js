import React from 'react';
import { Grid, Typography, Paper, makeStyles, Box } from '@material-ui/core';
import BodyText from '../BodyText';
import CirclePic from '../../assets/images/CirclePic.svg';
import TitleText from '../TitleText';
import BlogImg from '../../assets/images/BlogImage.svg';
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

const BlogProductCard = ({ src, index }) => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<>
			<Grid item xs={12} sm={12} md={6} lg={4}>
				<Paper
					className={classes.b7}
					style={{ marginTop: '4px' }}
					onClick={() => history.push(`/publication/${index}`)}>
					<Grid
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Box display='flex' alignItems='center'>
							<img src={CirclePic}></img>
							<Box ml={'5px'}>
								<TitleText two textStyle={{ lineHeight: 0.8 }}>
									Cameron
								</TitleText>
								<TitleText two>Williamson</TitleText>
							</Box>
						</Box>
						<Typography
							variant='body1'
							style={{
								color: ' #8386A0',
								fontSize: '12px',
								fontFamily: 'Mulish, Roboto, sans-serif',
							}}>
							04 Aug, 2021
						</Typography>
					</Grid>
					<img
						src={BlogImg}
						alt='blg'
						style={{ width: '100%', marginTop: 20 }}></img>
					<Box display='flex' mt='15px'>
						<Box
							style={{
								background: '#EDEDFF',
								padding: '5px 10px',
								borderRadius: 4,
							}}>
							<BodyText two textStyle={{ color: '#111341' }}>
								Innovation
							</BodyText>
						</Box>
						<Box
							ml={'10px'}
							style={{
								background: '#EDEDFF',
								padding: '5px 10px',
								borderRadius: 4,
							}}>
							<BodyText two textStyle={{ color: '#111341' }}>
								Lens Manufacturing
							</BodyText>
						</Box>
					</Box>
					<Grid style={{ paddingTop: '20px' }}>
						<Typography
							variant='h6'
							style={{
								color: ' rgb(0, 0, 0)',
								paddingTop: '10px',
								paddingBottom: '10px',
								fontSize: '1rem',
								fontWeight: 600,
								fontFamily: 'Mulish, Roboto, sans-serif',
							}}>
							Lorem Ipsum Dolor sit amet, lorem imspfuns sum Dolor
						</Typography>
						<Typography
							variant='body1'
							style={{
								color: ' rgb(0, 0, 0)',
								fontSize: '0.875rem',
								fontFamily: 'Mulish, Roboto, sans-serif',
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
							erat ultrices et nulla risus. Consequat risus, pharetra, fringilla
							magna enim vitae elementum.
						</Typography>
					</Grid>
				</Paper>
			</Grid>
		</>
	);
};

export default BlogProductCard;
