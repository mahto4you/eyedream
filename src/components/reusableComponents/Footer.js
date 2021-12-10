import React from 'react';
import Logo from '../../assets/images/logo.svg';
import ContactIcon from '../../assets/images/ContactIcon.svg';
import EmailIcon from '../../assets/images/EmailIcon.svg';
import instaIcon from '../../assets/images/instaIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import linkdIcon from '../../assets/images/linkdIcon.svg';
import BodyText from '../BodyText';
import TitleText from '../TitleText';
import {
	Grid,
	makeStyles,
	Box,
	useTheme,
	useMediaQuery,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	ft3: {
		marginTop: '10px',
		paddingRight: '20px',
		'@media (max-width: 599px)': {
			order: 1,
			marginTop: '20px',
			textAlign: 'center',
			paddingRight: 0,
		},
	},
	ft4: {
		'@media (max-width: 600px)': {
			paddingRight: 0,
		},
	},
	ft5: {
		'@media (max-width: 599px)': {
			order: 3,
			marginTop: '20px',
			textAlign: 'center',
		},
	},
	ft6: {
		'@media (max-width: 599px)': {
			marginTop: '40px',
		},
	},
}));

const Footer = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Grid
				container
				justify='center'
				className='ft'
				style={{ marginBottom: 180, textAlign: matches ? 'center' : '' }}>
				<Grid item xs={12} sm={12} md={4} lg={4} className={classes.ft5}>
					<Grid
						container
						className='ft1'
						style={{ justifyContent: matches ? 'center' : '' }}>
						<Box display='flex' alignItems='center'>
							<img src={Logo} alt='vast'></img>
							<BodyText
								four
								textStyle={{
									color: '#6D4DFE',
									fontWeight: 600,
									marginLeft: 5,
									fontFamily: 'Mulish, Roboto, sans-serif',
								}}>
								Eye Dream
							</BodyText>
						</Box>{' '}
					</Grid>
					<Grid
						container
						style={{
							marginBottom: '20px',
							justifyContent: matches ? 'center' : '',
						}}>
						<Box>
							<BodyText two textStyle={{ color: '#111341', fontWeight: 600 }}>
								@2021 Eye Dream Pty Ltd All rights reserved.
							</BodyText>
						</Box>
					</Grid>
					<Grid
						container
						style={{
							marginBottom: '20px',
							justifyContent: matches ? 'center' : '',
						}}>
						<Box>
							<TitleText textStyle={{ fontSize: 15 }}>Contact us</TitleText>
						</Box>
					</Grid>
					<Box
						display='flex'
						justifyContent={matches ? 'space-around' : 'space-between'}>
						<Box display='flex'>
							<img src={ContactIcon} />
							<TitleText textStyle={{ fontSize: 14, marginLeft: 12 }}>
								+01 2345 6789
							</TitleText>
						</Box>
						<Box display='flex'>
							<img src={EmailIcon} />
							<TitleText textStyle={{ fontSize: 14, marginLeft: 12 }}>
								support@eyedream.com
							</TitleText>
						</Box>
					</Box>
					<Box
						display='flex'
						justifyContent={matches ? 'space-around' : 'space-between'}
						mt={'30px'}>
						<Box display='flex'>
							<img src={linkdIcon} />
							<img src={twitterIcon} style={{ marginLeft: 30 }} />
							<img src={instaIcon} style={{ marginLeft: 30 }} />
						</Box>
						<TitleText textStyle={{ fontSize: 14, marginLeft: 60 }}>
							Terms & Conditions
						</TitleText>
						<TitleText textStyle={{ fontSize: 14 }}>Privacy Policy</TitleText>
					</Box>
				</Grid>
				<Grid item sm={1} md={1} lg={1}></Grid>
				<Grid
					container
					xs={12}
					sm={12}
					md={6}
					lg={6}
					className={classes.ft3}
					style={{ marginTop: 48 }}>
					<Grid item xs={12} sm={4} md={4} lg={4} className={classes.ft4}>
						<TitleText
							textStyle={{
								background:
									'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
								webkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							About Us
						</TitleText>

						<BodyText textStyle={{ marginTop: 10 }}>Careers</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>
							Corporate Responsibility and Policies
						</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Newsroom</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Publications</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Investor</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Relations</BodyText>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={4} className={classes.ft6}>
						<TitleText
							textStyle={{
								background:
									'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
								webkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							Partner
						</TitleText>

						<BodyText textStyle={{ marginTop: 10 }}>ProgramStrategic</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Alliances</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Become a Partner</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>
							Become a Distributor
						</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Partner Sign In</BodyText>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={4} className={classes.ft6}>
						<TitleText
							textStyle={{
								background:
									'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
								webkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							Our Compliance
						</TitleText>
						<BodyText textStyle={{ marginTop: 10 }}>Case Studies</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>
							PromotionsManufacturing
						</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Support</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>
							Application Support
						</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Data Support</BodyText>
						<BodyText textStyle={{ marginTop: 5 }}>Relations</BodyText>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Footer;
