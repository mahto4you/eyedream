import React, { useState } from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
	Divider,
	useTheme,
	useMediaQuery,
	Paper,
} from '@material-ui/core';
import TitleText from '../../components/TitleText';
import BodyText from '../BodyText';
import Background from '../../assets/images/Background.svg';
import LooperGroup from '../../assets/images/LooperGroup.svg';
import People from '../../assets/images/People.svg';
import Looper from '../../assets/images/Looper.svg';
import LeftArrowIcon from '../../assets/images/LeftArrowIcon.svg';
import RightArrowBlueIcon from '../../assets/images/RightArrowBlueIcon.svg';
import LineColor from '../../assets/images/LineColor.svg';
import TestSpiral from '../../assets/images/TestSpiral.svg';
import TestCircle from '../../assets/images/TestCircle.svg';
import LineBlack from '../../assets/images/LineBlack.svg';
import CircleSpiral from '../../assets/images/CircleSpiral.svg';
import Blog from '../Blog';
import BlogProduct from './BlogProduct';
import Team from './Team';
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

const AboutUsMain = () => {
	const [card1, setCard1] = useState('true');
	const [card2, setCard2] = useState(null);
	const [card3, setCard3] = useState(null);
	const [card4, setCard4] = useState(null);
	const [val, setVal] = useState(0);
	const [val2, setVal2] = useState(0);

	const scroll = (id) => {
		if (id < 0 && val > 0) {
			setVal(val - 1);
		} else if (id > 0 && val >= 0) {
			if (val == 3) {
				setVal(0);
			} else {
				setVal(val + 1);
			}
		}
	};
	const scroll2 = (id2) => {
		if (id2 < 0 && val2 > 0) {
			setVal2(val2 - 1);
		} else if (id2 > 0 && val2 >= 0) {
			if (val2 == 2) {
				setVal2(0);
			} else {
				setVal2(val2 + 1);
			}
		}
	};
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			<Grid
				container
				style={{
					background: `url(${Background})`,
					justifyContent: 'center',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: matches ? 1919 : 814,
				}}>
				<Grid
					item
					xs={12}
					lg={7}
					style={{
						background: `url(${LooperGroup})`,
						justifyContent: 'center',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						// height: 814,
					}}>
					<Box mt={'90px'} ml={'75px'}>
						<TitleText
							textStyle={{
								fontSize: 64,
								fontFamily: 'Playfair Display',
								color: 'white',
								lineHeight: 1.2,
							}}>
							The Future Of Vision Care Is Accurate, Accessible And Affordable !
						</TitleText>
						<Box mt={'10px'}>
							<BodyText textStyle={{ fontSize: 24, color: 'white' }}>
								Eye Dream is the start of our Dream to bring forward the future
								of healthcare where there are no natural diseases.
							</BodyText>
						</Box>
					</Box>
					{/* <Box>
						<img src={People}></img>
					</Box> */}
				</Grid>
				<Grid
					item
					xs={12}
					lg={5}
					// style={{
					// 	background: `url(${People})`,
					// 	justifyContent: 'center',
					// 	backgroundPosition: 'center',
					// 	backgroundSize: 'cover',
					// 	backgroundRepeat: 'no-repeat',
					// 	height: 787,
					// }}
				>
					<img src={People} width='100%'></img>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					item
					xs={12}
					lg={6}
					style={{
						background: `url(${CircleSpiral})`,
						justifyContent: 'center',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: 850,
					}}>
					<Box mt={'80px'} ml={'75px'} style={{ width: '70%' }}>
						<TitleText textStyle={{ fontSize: 36 }}>About Us</TitleText>
						<BodyText textStyle={{ fontSize: 18, marginTop: 20 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
							hac felis lectus neque, pellentesque vestibulum ullamcorper lacus,
							pharetra. Orci nec turpis enim pretium, massa. Sed turpis etiam
							neque pulvinar feugiat etiam iaculis. Ultricies cursus aliquet
							risus tortor, sed. Consectetur tristique sapien tempor porttitor
							tellus dui eget libero. Urna, nunc consequat netus at. Vitae sed
							condimentum cursus a, egestas. Purus in lorem duis in habitasse
							diam morbi orci. Nulla arcu sed quisque pharetra, amet, senectus
							tempus massa vitae.
						</BodyText>
					</Box>
				</Grid>
				<Grid item xs={12} lg={5} style={{ padding: matches ? '30px' : '' }}>
					<Box mt={'30px'}>
						<TitleText
							textStyle={{
								fontSize: 144,
								fontFamily: 'Playfair Display',
								background:
									'linear-gradient(180deg, rgba(17, 19, 65, 0.5) 16.3%, rgba(255, 255, 255, 0) 81.06%)',
								webkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							Mission
						</TitleText>
						<Box>
							<TitleText>Our Mission</TitleText>
							<BodyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Bibendum mi in sit sit aliquam aliquet sem. Eget vitae eget in
								sem nisi senectus odio proin. Cras arcu a amet sit hac placerat
								habitasse eget aliquet. Nec tellus non eu volutpat. Pretium
								posuere ullamcorper lacus pellentesque
							</BodyText>
						</Box>
					</Box>
					<Box mt={'51px'}>
						<TitleText
							textStyle={{
								fontSize: 144,
								fontFamily: 'Playfair Display',
								background:
									'linear-gradient(180deg, rgba(17, 19, 65, 0.5) 16.3%, rgba(255, 255, 255, 0) 81.06%)',
								webkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}>
							Vision
						</TitleText>
						<Box>
							<TitleText>Our Vision</TitleText>
							<BodyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Bibendum mi in sit sit aliquam aliquet sem. Eget vitae eget in
								sem nisi senectus odio proin. Cras arcu a amet sit hac placerat
								habitasse eget aliquet. Nec tellus non eu volutpat. Pretium
								posuere ullamcorper lacus pellentesque
							</BodyText>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<Grid
				className={classes.b1}
				style={{
					paddingLeft: 75,
					paddingRight: 75,
					backgroundColor: '#EAEAFF',
				}}>
				<Grid className={classes.b2}>
					<Grid>
						<Grid
							className={classes.b3}
							style={{
								marginTop: 60,
							}}>
							<Typography
								variant='h3'
								style={{
									fontWeight: 600,
									fontSize: '1.5rem',
									fontFamily: 'Mulish, Roboto, sans-serif',
								}}>
								TimeLine
							</Typography>
						</Grid>
					</Grid>
					<Hidden only={['lg', 'md', 'xl']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scroll(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper
								className={classes.b5}
								onClick={() => scroll(+1)}
								style={{
									background:
										'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								}}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
					<Hidden only={['xs', 'sm']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scroll(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper
								className={classes.b5}
								onClick={() => scroll(+1)}
								style={{
									background:
										'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								}}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				container
				style={{
					background: `url(${Looper})`,
					justifyContent: 'center',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: 650,
					backgroundColor: '#EAEAFF',

					paddingLeft: 75,
					paddingRight: 75,
				}}>
				<Grid item xs={3} style={{}}>
					{val == 0 ? (
						<Box
							style={{
								padding: '40px 40px',
								marginTop: 100,
								borderRadius: 12,
								backgroundColor: 'white',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<TitleText>2018</TitleText>
								<img src={LineColor}></img>
							</Box>
							<Box mt={'80px'}>
								<BodyText textStyle={{ marginTop: 15 }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							</Box>
						</Box>
					) : (
						<Box textAlign='center' mt={'300px'} alignItems='center'>
							<TitleText>2018</TitleText>
							<Divider style={{ background: 'blue' }} />
						</Box>
					)}
				</Grid>
				<Grid item xs={3}>
					{val == 1 ? (
						<Box
							style={{
								padding: '40px 40px',
								marginTop: 100,
								borderRadius: 12,
								backgroundColor: 'white',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<TitleText>2019</TitleText>
								<img src={LineColor}></img>
							</Box>
							<Box mt={'80px'}>
								<BodyText textStyle={{ marginTop: 15 }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							</Box>
						</Box>
					) : (
						<Box textAlign='center' mt={'300px'} alignItems='center'>
							<TitleText>2019</TitleText>
							<Divider style={{ background: 'blue' }} />
						</Box>
					)}
				</Grid>
				<Grid item xs={3}>
					{val == 2 ? (
						<Box
							style={{
								padding: '40px 40px',
								marginTop: 100,
								borderRadius: 12,
								backgroundColor: 'white',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<TitleText>2020</TitleText>
								<img src={LineColor}></img>
							</Box>
							<Box mt={'80px'}>
								<BodyText textStyle={{ marginTop: 15 }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							</Box>
						</Box>
					) : (
						<Box textAlign='center' mt={'300px'} alignItems='center'>
							<TitleText>2020</TitleText>
							<Divider style={{ background: 'blue' }} />
						</Box>
					)}
				</Grid>
				<Grid item xs={3}>
					{val == 3 ? (
						<Box
							style={{
								padding: '40px 40px',
								marginTop: 100,
								borderRadius: 12,
								backgroundColor: 'white',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<TitleText>2021</TitleText>
								<img src={LineColor}></img>
							</Box>
							<Box mt={'80px'}>
								<BodyText textStyle={{ marginTop: 15 }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							</Box>
						</Box>
					) : (
						<Box textAlign='center' mt={'300px'} alignItems='center'>
							<TitleText>2021</TitleText>
							<Divider style={{ background: 'blue' }} />
						</Box>
					)}
				</Grid>
			</Grid>
			<Team />
			<Grid
				className={classes.b1}
				style={{
					paddingLeft: 75,
					paddingRight: 75,
				}}>
				<Grid className={classes.b2}>
					<Grid>
						<Grid className={classes.b3}>
							<Typography
								variant='h3'
								style={{
									fontWeight: 600,
									fontSize: '1.5rem',
									fontFamily: 'Mulish, Roboto, sans-serif',
								}}>
								Testimonial
							</Typography>
						</Grid>
					</Grid>
					<Hidden only={['lg', 'md', 'xl']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scroll2(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper
								className={classes.b5}
								onClick={() => scroll2(+1)}
								style={{
									background:
										'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								}}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
					<Hidden only={['xs', 'sm']}>
						<Grid className={classes.b4}>
							<Paper className={classes.b5} onClick={() => scroll2(-1)}>
								<img src={LeftArrowIcon} alt='left-arrow'></img>
							</Paper>
							<Paper
								className={classes.b5}
								onClick={() => scroll2(+1)}
								style={{
									background:
										'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								}}>
								<img src={RightArrowBlueIcon} alt='left-arrow'></img>
							</Paper>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={4}
				style={{
					paddingLeft: 75,
					paddingRight: 75,
					width: '100%',
					marginTop: 46,
				}}>
				<Grid item xs={val2 == 0 ? 6 : 3}>
					{val2 == 0 ? (
						<Box
							style={{
								background: `url(${TestSpiral})`,
								justifyContent: 'center',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>

									<Box ml={'10px'}>
										<TitleText two>David Walter</TitleText>
										<TitleText one>CEO</TitleText>
									</Box>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<BodyText textStyle={{ marginTop: 10 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
								hac felis lectus neque, pellentesque vestibulum ullamcorper
								lacus, pharetra. Orci nec turpis enim pretium, massa. Sed turpis
								etiam neque pulvinar feugiat etiam iaculis. Ultricies cursus
								aliquet risus tortor, sed.{' '}
							</BodyText>
						</Box>
					) : (
						<Box
							style={{
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<Box mt={'20px'} mb={'35px'}>
								<TitleText two>David Walter</TitleText>
								<TitleText one>CEO</TitleText>
							</Box>
						</Box>
					)}
				</Grid>
				<Grid item xs={val2 == 1 ? 6 : 3}>
					{val2 == 1 ? (
						<Box
							style={{
								background: `url(${TestSpiral})`,
								justifyContent: 'center',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>

									<Box ml={'10px'}>
										<TitleText two>David Walter</TitleText>
										<TitleText one>CEO</TitleText>
									</Box>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<BodyText textStyle={{ marginTop: 10 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
								hac felis lectus neque, pellentesque vestibulum ullamcorper
								lacus, pharetra. Orci nec turpis enim pretium, massa. Sed turpis
								etiam neque pulvinar feugiat etiam iaculis. Ultricies cursus
								aliquet risus tortor, sed.{' '}
							</BodyText>
						</Box>
					) : (
						<Box
							style={{
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<Box mt={'20px'} mb={'35px'}>
								<TitleText two>David Walter</TitleText>
								<TitleText one>CEO</TitleText>
							</Box>
						</Box>
					)}
				</Grid>
				<Grid item xs={val2 == 2 ? 6 : 3}>
					{val2 == 2 ? (
						<Box
							style={{
								background: `url(${TestSpiral})`,
								justifyContent: 'center',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>

									<Box ml={'10px'}>
										<TitleText two>David Walter</TitleText>
										<TitleText one>CEO</TitleText>
									</Box>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<BodyText textStyle={{ marginTop: 10 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
								hac felis lectus neque, pellentesque vestibulum ullamcorper
								lacus, pharetra. Orci nec turpis enim pretium, massa. Sed turpis
								etiam neque pulvinar feugiat etiam iaculis. Ultricies cursus
								aliquet risus tortor, sed.{' '}
							</BodyText>
						</Box>
					) : (
						<Box
							style={{
								boxShadow: '2px 2px 50px rgba(72, 68, 255, 0.15)',
								borderRadius: 12,
								padding: '30px 30px',
							}}>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex'>
									<img src={TestCircle} width='50px' height='50px'></img>
								</Box>
								<img src={LineBlack}></img>
							</Box>
							<Box mt={'20px'} mb={'35px'}>
								<TitleText two>David Walter</TitleText>
								<TitleText one>CEO</TitleText>
							</Box>
						</Box>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default AboutUsMain;
