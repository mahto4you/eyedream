import React, { useState } from 'react';
import { Grid, Typography, Hidden, Paper, makeStyles } from '@material-ui/core';
// import { useStyles } from './styles/blog';
import SwipeableViews from 'react-swipeable-views';
import BlogCard from './reusableComponents/BlogCard';
import BlogImg from '../assets/images/BlogImage.svg';
import LeftArrowIcon from '../assets/images/LeftArrowIcon.svg';
import RightArrowBlueIcon from '../assets/images/RightArrowBlueIcon.svg';
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
			width: '12%',
		},
	},
	b5: {
		width: '50px',
		cursor: 'pointer',
		height: '50px',
		display: 'flex',
		boxShadow: '5px 5px 30px rgb(53 98 255 / 15%)',
		alignItems: 'center',
		borderRadius: '36px',
		justifyContent: 'center',
		border: '1px solid #111341',

		borderImageSource: 'linear-gradient(180deg, #4844FF 0%, #C961FA 100%)',
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
		borderRadius: '12px',
		'@media (max-width: 959.95px)': {
			marginTop: '20px',
		},
	},
}));

const Blog = () => {
	const [val, setVal] = useState({
		index: 0,
	});

	const classes = useStyles();
	const scrol = (id) => {
		// if (val.index == 3) {
		// 	setVal({ index: 0 });
		// }
		// setVal({ index: val.index + id });
		if (id < 0 && val.index > 0) {
			setVal({ index: val.index - 1 });
		} else if (id > 0 && val.index >= 0) {
			if (val.index == 2) {
				setVal({ index: 0 });
			} else {
				setVal({ index: val.index + 1 });
			}
		}
	};
	console.log(val);
	return (
		<>
			<Grid
				className={classes.b1}
				style={{ paddingLeft: 75, paddingRight: 75 }}>
				<Grid className={classes.b2}>
					<Grid>
						{/* <Grid className={classes.b3}>
							<Typography
								variant='h6'
								style={{
									color: ' rgb(0, 53, 240)',
									fontWeight: 600,
									fontSize: '1rem',
									fontFamily: 'Mulish, Roboto, sans-serif',
								}}>
								Blogs
							</Typography>
						</Grid> */}
						<Grid className={classes.b3}>
							<Typography
								variant='h3'
								style={{
									fontWeight: 600,
									fontSize: '1.5rem',
									fontFamily: 'Mulish, Roboto, sans-serif',
								}}>
								Latest Publications
							</Typography>
						</Grid>
					</Grid>
					<Hidden only={['lg', 'md', 'xl']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scrol(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper className={classes.b5} onClick={() => scrol(+1)}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
					<Hidden only={['xs', 'sm']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scrol(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper
								className={classes.b5}
								onClick={() => scrol(+1)}
								style={{
									background:
										'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								}}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
				</Grid>
				<Hidden only={['lg', 'md', 'xl']}>
					<Grid className='b10'>
						<SwipeableViews id='sDiv' index={val.index}>
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />
							<BlogCard src={BlogImg} />

							{/* <BlogCard src={scaled2} />

							<BlogCard src={handsun} />

							<BlogCard src={Whats} />

							<BlogCard src={Group} />

							<BlogCard src={WhatsAppImage} />

							<BlogCard src={supply} />

							<BlogCard src={WhatsAp} />

							<BlogCard src={SEO} />

							<BlogCard src={undraw_search} /> */}
						</SwipeableViews>
					</Grid>
				</Hidden>
				<Hidden only={['xs', 'sm']}>
					{/* Next Part */}
					<div>
						<SwipeableViews id='gDiv' index={val.index} axis='x-reverse'>
							<Grid className={classes.b6}>
								<Grid container spacing={4} style={{ margin: '0px' }}>
									<BlogCard src={BlogImg} />
									<BlogCard src={BlogImg} />
									<Hidden only={['sm', 'md']}>
										<BlogCard src={BlogImg} />
									</Hidden>
								</Grid>
							</Grid>

							<Grid className={classes.b6}>
								<Grid container spacing={4} style={{ margin: '0px' }}>
									<BlogCard src={BlogImg} />
									<BlogCard src={BlogImg} />
									<Hidden only={['sm', 'md']}>
										<BlogCard src={BlogImg} />
									</Hidden>
								</Grid>
							</Grid>

							<Grid className={classes.b6}>
								<Grid container spacing={4} style={{ margin: '0px' }}>
									<BlogCard src={BlogImg} />
									<BlogCard src={BlogImg} />
									<Hidden only={['sm', 'md']}>
										<BlogCard src={BlogImg} />
									</Hidden>
								</Grid>
							</Grid>
							{/* <Grid className={classes.b6}>
								<Grid container spacing={3} style={{ margin: '0px' }}>
									<BlogCard src={undraw_search} />
								</Grid>
							</Grid> */}
						</SwipeableViews>
					</div>
				</Hidden>
			</Grid>
		</>
	);
};
export default Blog;
