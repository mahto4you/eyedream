import React from 'react';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
	useTheme,
	useMediaQuery,
} from '@material-ui/core';
import TitleText from '../TitleText';
import '../../components/Navbar.css';
import Logo from '../../assets/images/logo.svg';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
	container: {
		height: '15vh',
		// marginBottom: '35px',

		'@media (min-width: 600px)': {
			paddingTop: '16px',
		},
		'& .MuiContainer-maxWidthLg': {
			'@media (min-width: 1280px)': {
				maxWidth: 'none',
				paddingLeft: 50,
				paddingRight: 50,
			},
		},
	},
	jss6: {
		'@media (max-width: 959.95px)': {
			justifyContent: 'flexEnd',
		},
	},
	jss4: {
		textDecoration: 'none',
	},
	jss5: {
		width: '45px',
		height: '60px',
	},
	vd5: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	vd6: {
		textDecoration: 'none',
	},
	vd7: {
		background:
			'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
		webkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
	},
	vd9: {
		fontSize: '1rem',
		fontWeight: 600,
	},

	vd8: {
		width: '100%',
		border: '1px solid #0035f0',
		padding: '12px',
		borderRadius: '10px',
	},
	// vd7: {
	// 	fontSize: '1rem',
	// 	fontWeight: 600,
	// },
}));

const Navbar = ({ active }) => {
	const classes = useStyles();
	const history = useHistory();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Grid style={{ backgroundColor: 'white' }}>
				<Grid
					container
					className={classes.container}
					style={{ boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
					<Container
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<Grid
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '50%',
							}}>
							<Box display='flex' alignItems='center'>
								<img src={Logo} alt='Logo' className={classes.jss5}></img>
								<Hidden xsDown>
									<Typography
										variant='h4'
										style={{
											color: '#6D4DFE',
											marginLeft: '6px',
											fontSize: '1.5rem',
											fontWeight: 600,
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}>
										Eye Dreams
									</Typography>
								</Hidden>
							</Box>
						</Grid>

						<Grid
							className={classes.vd5}
							style={{ width: matches ? '15%' : '80%' }}>
							<Hidden only={['xs', 'sm']}>
								<Grid item>
									<NavLink to='/' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: active == 1 ? '' : '#111341',
												background:
													active == 1
														? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
														: '',
												webkitBackgroundClip: active == 1 ? 'text' : '',
												WebkitTextFillColor: active == 1 ? 'transparent' : '',
											}}>
											Home
										</TitleText>
									</NavLink>
								</Grid>
								<Grid item>
									<NavLink to='/product' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: active == 2 ? '' : '#111341',
												background:
													active == 2
														? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
														: '',
												webkitBackgroundClip: active == 2 ? 'text' : '',
												WebkitTextFillColor: active == 2 ? 'transparent' : '',
											}}>
											Product
										</TitleText>
									</NavLink>
								</Grid>
								<Grid item>
									<NavLink to='/project' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: active == 3 ? '' : '#111341',
												background:
													active == 3
														? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
														: '',
												webkitBackgroundClip: active == 3 ? 'text' : '',
												WebkitTextFillColor: active == 3 ? 'transparent' : '',
											}}>
											Solution
										</TitleText>
									</NavLink>
								</Grid>
								<Grid item>
									<NavLink to='/about' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: active == 4 ? '' : '#111341',
												background:
													active == 4
														? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
														: '',
												webkitBackgroundClip: active == 4 ? 'text' : '',
												WebkitTextFillColor: active == 4 ? 'transparent' : '',
											}}>
											Company
										</TitleText>
									</NavLink>
								</Grid>
								<Grid item>
									<NavLink to='/publication' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: active == 5 ? '' : '#111341',
												background:
													active == 5
														? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
														: '',
												webkitBackgroundClip: active == 5 ? 'text' : '',
												WebkitTextFillColor: active == 5 ? 'transparent' : '',
											}}>
											Publication
										</TitleText>
									</NavLink>
								</Grid>
								<Grid item>
									<NavLink to='/company' className={classes.vd6}>
										<TitleText
											two
											textStyle={{
												color: '#111341',
												// background:
												// 	active == 6
												// 		? '-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)'
												// 		: '',
												// webkitBackgroundClip: active == 6 ? 'text' : '',
												// WebkitTextFillColor: active == 6 ? 'transparent' : '',
											}}>
											Contact Us
										</TitleText>
									</NavLink>
								</Grid>
							</Hidden>
							<Grid item>
								<Button
									className={classes.vd8}
									style={{ padding: '16px 32px', borderRadius: 12 }}>
									<a href='#' className={classes.vd6}>
										<Typography
											variant='h6'
											className='vd9'
											style={{
												color: ' rgb(0, 53, 240)',
												border: '1px solid',

												borderImageSource:
													'linear-gradient(265.81deg, #4844FF -20.02%, #C961FA 100%)',

												fontSize: '1rem',
												textTransform: 'capitalize',
												fontWeight: 600,
												fontFamily: 'Mulish, Roboto, sans-serif',
											}}>
											Login
										</Typography>
									</a>
								</Button>
							</Grid>
						</Grid>
					</Container>
				</Grid>
			</Grid>
		</>
	);
};

export default Navbar;
