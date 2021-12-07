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
} from '@material-ui/core';
import '../../components/Navbar.css';
import Logo from '../../assets/images/logo.svg';
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
		fontSize: '1rem',
		fontWeight: 600,
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
	vd7: {
		fontSize: '1rem',
		fontWeight: 600,
	},
}));

const Navbar = () => {
	const classes = useStyles();
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

						<Grid className={classes.vd5} style={{ width: '80%' }}>
							<Grid item>
								<NavLink to='/' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' rgb(0, 53, 240)',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Home
									</Typography>
								</NavLink>
							</Grid>
							<Grid item>
								<NavLink to='/services' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' black',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Product
									</Typography>
								</NavLink>
							</Grid>
							<Grid item>
								<NavLink to='/project' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' black',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Solution
									</Typography>
								</NavLink>
							</Grid>
							<Grid item>
								<a href='#' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' black',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Company
									</Typography>
								</a>
							</Grid>
							<Grid item>
								<NavLink to='/company' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' black',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Publication
									</Typography>
								</NavLink>
							</Grid>
							<Grid item>
								<NavLink to='/company' className={classes.vd6}>
									<Typography
										variant='h6'
										style={{
											color: ' black',
											fontSize: '1rem',
											fontFamily: 'Mulish, Roboto, sans-serif',
										}}
										className={classes.vd7}>
										Contact Us
									</Typography>
								</NavLink>
							</Grid>
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
