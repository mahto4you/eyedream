import React, { useState } from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
} from '@material-ui/core';
import TitleText from '../../components/TitleText';
import BodyText from '../BodyText';
import LineWhite from '../../assets/images/LineWhite.svg';
import Spiral from '../../assets/images/Spiral.svg';
import ProductImg from '../../assets/images/ProductImg.svg';
import EyeDreamApp from '../../assets/images/EyeDreamApp.svg';
import LineBlack from '../../assets/images/LineBlack.svg';
import Hospital from '../../assets/images/Hospital.svg';
import EyeWear from '../../assets/images/EyeWear.svg';
import Data from '../../assets/images/Data.svg';
import SpiralWho from '../../assets/images/SpiralWho.svg';
import WhoPic from '../../assets/images/WhoPic.svg';
import Fore from '../../assets/images/Fore.svg';
import LineColor from '../../assets/images/LineColor.svg';
import LinePic from '../../assets/images/LinePic.svg';
import Blog from '../Blog';
import BlogProduct from './BlogProduct';
const ProductMain = () => {
	const [card1, setCard1] = useState('true');
	const [card2, setCard2] = useState(null);
	const [card3, setCard3] = useState(null);
	const [card4, setCard4] = useState(null);

	return (
		<>
			<Grid
				container
				style={{
					background: `url(${ProductImg})`,
					justifyContent: 'center',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: 800,
				}}>
				<Box textAlign='center' mt={'60px'}>
					<TitleText
						textStyle={{
							fontSize: 64,
							fontFamily: 'Playfair Display',
							color: 'white',
						}}>
						Our Products
					</TitleText>
					<Grid item>
						<Grid container>
							<Grid item xs={2}></Grid>
							<Grid item xs={8}>
								<BodyText
									textStyle={{ fontSize: 24, fontWeight: 600, color: 'white' }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Vehicula rhoncus, tellus elementum risus.
								</BodyText>
							</Grid>
							<Grid item xs={2}></Grid>
						</Grid>
					</Grid>

					<Grid item>
						<Grid container>
							<Grid item xs={4}></Grid>
							<Grid item xs={4}>
								<Box
									style={{
										padding: '16px 32px',
										border: '1px solid #060606',
										borderRadius: 12,
										textAlign: 'center',
										marginBottom: 40,
										marginTop: 30,
										width: 300,

										background:
											'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
									}}>
									<BodyText>Learn More</BodyText>
								</Box>
							</Grid>
							<Grid item xs={4}></Grid>
						</Grid>
					</Grid>
				</Box>
			</Grid>
			<Grid container>
				<Grid
					item
					xs={3}
					// style={{
					// 	background: `url(${Spiral})`,
					// 	justifyContent: 'center',
					// 	backgroundPosition: 'center',
					// 	backgroundSize: 'cover',
					// 	backgroundRepeat: 'no-repeat',
					// 	// height: 50,
					// }}
				>
					<Box
						onMouseEnter={() => {
							setCard1('true');
							setCard2(null);
							setCard3(null);
							setCard4(null);
						}}
						onMouseLeave={() => {
							setCard1(null);
							setCard2(null);
							setCard3(null);
							setCard4(null);
						}}
						style={{
							padding: '40px 40px',
							background: card1
								? 'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)'
								: '',
						}}>
						<Box display='flex' justifyContent='space-between'>
							{card1 ? (
								<>
									<img src={LineWhite}></img>
									<TitleText>01</TitleText>
								</>
							) : (
								<>
									<Box></Box>
									<Box display='flex'>
										<img src={LineBlack}></img>
										<TitleText textStyle={{ marginLeft: 10 }}>01</TitleText>
									</Box>
								</>
							)}
						</Box>
						<Box mt={'80px'}>
							<img src={EyeDreamApp}></img>
							<TitleText
								textStyle={{ marginTop: 15, color: card1 ? 'white' : '' }}>
								Eye Dream App
							</TitleText>
							{card1 ? (
								<BodyText
									textStyle={{ marginTop: 15, color: card1 ? 'white' : '' }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							) : (
								''
							)}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box
						onMouseEnter={() => {
							setCard1(null);
							setCard2('true');
							setCard3(null);
							setCard4(null);
						}}
						onMouseLeave={() => {
							setCard1(null);
							setCard2(null);
							setCard3(null);
							setCard4(null);
						}}
						style={{
							padding: '40px 40px',
							background: card2
								? 'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)'
								: '',
						}}>
						<Box display='flex' justifyContent='space-between'>
							{card2 ? (
								<>
									<img src={LineWhite}></img>
									<TitleText>02</TitleText>
								</>
							) : (
								<>
									<Box></Box>
									<Box display='flex'>
										<img src={LineBlack}></img>
										<TitleText textStyle={{ marginLeft: 10 }}>02</TitleText>
									</Box>
								</>
							)}
						</Box>
						<Box mt={'80px'}>
							<img src={Hospital}></img>
							<TitleText
								textStyle={{ marginTop: 15, color: card2 ? 'white' : '' }}>
								Hospital’s solution
							</TitleText>
							{card2 ? (
								<BodyText
									textStyle={{ marginTop: 15, color: card2 ? 'white' : '' }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							) : (
								''
							)}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box
						onMouseEnter={() => {
							setCard1(null);
							setCard2(null);
							setCard3('true');
							setCard4(null);
						}}
						onMouseLeave={() => {
							setCard1(null);
							setCard2(null);
							setCard3(null);
							setCard4(null);
						}}
						style={{
							padding: '40px 40px',
							background: card3
								? 'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)'
								: '',
						}}>
						<Box display='flex' justifyContent='space-between'>
							{card3 ? (
								<>
									<img src={LineWhite}></img>
									<TitleText>03</TitleText>
								</>
							) : (
								<>
									<Box></Box>
									<Box display='flex'>
										<img src={LineBlack}></img>
										<TitleText textStyle={{ marginLeft: 10 }}>03</TitleText>
									</Box>
								</>
							)}
						</Box>
						<Box mt={'80px'}>
							<img src={EyeWear}></img>
							<TitleText
								textStyle={{ marginTop: 15, color: card3 ? 'white' : '' }}>
								Eyewear manufacturing
							</TitleText>
							{card3 ? (
								<BodyText
									textStyle={{ marginTop: 15, color: card3 ? 'white' : '' }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							) : (
								''
							)}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box
						onMouseEnter={() => {
							setCard1(null);
							setCard2(null);
							setCard3(null);
							setCard4('true');
						}}
						onMouseLeave={() => {
							setCard1(null);
							setCard2(null);
							setCard3(null);
							setCard4(null);
						}}
						style={{
							padding: '40px 40px',
							background: card4
								? 'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)'
								: '',
						}}>
						<Box display='flex' justifyContent='space-between'>
							{card4 ? (
								<>
									<img src={LineWhite}></img>
									<TitleText>04</TitleText>
								</>
							) : (
								<>
									<Box></Box>
									<Box display='flex'>
										<img src={LineBlack}></img>
										<TitleText textStyle={{ marginLeft: 10 }}>04</TitleText>
									</Box>
								</>
							)}
						</Box>
						<Box mt={'80px'}>
							<img src={Data}></img>
							<TitleText
								textStyle={{ marginTop: 15, color: card4 ? 'white' : '' }}>
								Data platform
							</TitleText>
							{card4 ? (
								<BodyText
									textStyle={{ marginTop: 15, color: card4 ? 'white' : '' }}>
									Our eCommerce section allows consumers control over their
									selection while having a mirror vision of them, wearing the
									different products. Due to our unique frame invention, the
									customer can choose a wide variety of colours and patterns to
									go with their order at the most affordable price in the
									market.
								</BodyText>
							) : (
								''
							)}
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{
					paddingLeft: 75,
					paddingRight: 75,
					background: `url(${SpiralWho})`,
					// justifyContent: 'center',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					// height: 814,
					marginTop: 80,
					width: '100%',
				}}>
				<Grid item xs={6}>
					<Box>
						<TitleText
							textStyle={{ fontSize: 36, fontFamily: 'Playfair Display' }}>
							Forefront of Technology
						</TitleText>
						<Box display='flex' justifyContent='space-between'>
							<TitleText
								textStyle={{
									background:
										'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
									webkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									fontFamily: 'Playfair Display',
									fontSize: 36,
								}}>
								AI Technology
							</TitleText>
							<Box display='flex' alignItems='center'>
								<img src={LineColor}></img>
								<TitleText
									textStyle={{
										background:
											'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
										webkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										marginLeft: 5,
										fontFamily: 'Playfair Display',
										fontSize: 24,
									}}>
									01
								</TitleText>
							</Box>
						</Box>
						<BodyText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Scelerisque odio hendrerit risus dictum duis. Auctor aliquam
							pharetra eget donec vulputate convallis sagittis id. Luctus
							consectetur sed non sodales elementum sit. At fusce vitae bibendum
							venenatis libero tellus neque. Proin facilisis tortor id in semper
							dui vel adipiscing. Neque, turpis in feugiat nec sed. Aliquet amet
							at lorem mauris sapien nibh. Ac purus pharetra, non porta. Viverra
							amet nibh eu erat eu quis odio auctor amet. Nec sit duis neque,
							lobortis faucibus risus. Vitae natoque nisl nunc, maecenas diam.
							Phasellus amet, arcu urna semper venenatis, senectus. Non, integer
							pellentesque tempor ac nascetur montes, tristique non tellus.
							Purus, quisque velit orci imperdiet. Orci quis eu lacus consequat
							euismod. Turpis vestibulum consectetur sed turpis adipiscing.
							Dictum vulputate tincidunt platea diam, bibendum eleifend. Duis
							adipiscing eget fusce pharetra pellentesque quisque odio. Placerat
							lectus nisl rhoncus in mi consectetur sagittis a, eget.
						</BodyText>
					</Box>
					<Box mt={'20px'}>
						<Box display='flex'>
							<TitleText
								textStyle={{
									// background:
									// 	'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
									// webkitBackgroundClip: 'text',
									// WebkitTextFillColor: 'transparent',
									fontFamily: 'Playfair Display',
									color: 'black',
									fontSize: 36,
								}}>
								Manufacturing Technology
							</TitleText>
							<Box display='flex' alignItems='center' ml={'10px'}>
								<img src={LineBlack}></img>
								<TitleText
									textStyle={{
										// background:
										// 	'-webkit-linear-gradient(90.73deg, #4844FF 6.71%, #C961FA 92.51%)',
										// webkitBackgroundClip: 'text',
										// WebkitTextFillColor: 'transparent',
										marginLeft: 5,
										fontFamily: 'Playfair Display',
										fontSize: 24,
									}}>
									02
								</TitleText>
							</Box>
						</Box>
					</Box>
					<Box mt={'154px'}>
						<TitleText
							textStyle={{
								fontFamily: 'Playfair Display',
								fontSize: 36,
							}}>
							WHO - Vision Report
						</TitleText>
						<BodyText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Scelerisque odio hendrerit risus dictum duis. Auctor aliquam
							pharetra eget donec vulputate convallis sagittis id. Luctus
							consectetur sed non sodales elementum sit. At fusce vitae bibendum
							venenatis libero tellus neque.
						</BodyText>
					</Box>
					{/* Trachoma (2 million) Unaddressed presbyopia(826 million) Unaddressed
					reefractive error(123.7 million) Cataracyt (65.2 milllion) Glaucoma
					(6.9 million) */}
					<Box ml={'110px'} mt={'120px'}>
						<ul tyle='circle' style={{ fontSize: 20, lineHeight: '36px' }}>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Diabetic Retinopathy (3 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
							<li>Corneal opaciies(4.2 million)</li>
						</ul>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<img src={Fore} width='100%'></img>
					<img src={WhoPic} style={{ marginTop: 250 }} width='100%'></img>
					{/* <img src={LinePic}></img> */}
				</Grid>
			</Grid>

			<BlogProduct />
		</>
	);
};

export default ProductMain;
