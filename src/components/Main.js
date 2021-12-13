import React from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
} from '@material-ui/core';
import TitleText from '../components/TitleText';
import BodyText from './BodyText';
import Eye from '../assets/images/Eye.svg';
import Health from '../assets/images/Health.svg';
import Robotics from '../assets/images/Robotics.svg';
import Robot from '../assets/images/Robot.svg';
import gov from '../assets/images/gov.svg';
import industry from '../assets/images/industry.svg';
import search from '../assets/images/search.svg';
import research from '../assets/images/research.svg';
import Blog from './Blog';
const Main = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={12} lg={6} style={{ padding: 50 }}>
					<Box mt={'196px'}>
						<TitleText
							textStyle={{
								fontSize: 64,
								fontFamily: 'Playfair Display',
								lineHeight: 1.2,
							}}>
							<span style={{ color: '#6D4DFE' }}>Innovating</span> The Way
							Vision Is Protected
						</TitleText>
						<BodyText
							textStyle={{
								color: '#111341',
								fontFamily: 'Mulish',
								fontSize: 24,
							}}>
							Global leaders in innovating eye diagnostics, treatment and
							research. 
						</BodyText>
						<Box
							mt={'40px'}
							style={{
								background:
									'linear-gradient(129.01deg, #4844FF 0%, #C961FA 91.5%)',
								width: 300,
								padding: '16px 32px',
								textAlign: 'center',
								borderRadius: 12,
							}}>
							<BodyText textStyle={{ color: 'white' }}>Learn More</BodyText>
						</Box>
						<Box mt={'89px'}>
							<TitleText
								textStyle={{ fontSize: 36, fontFamily: 'Playfair Display' }}>
								Industries
							</TitleText>
							<Grid container spacing={6} style={{ marginTop: 64 }}>
								<Grid item xs={12} md={6} lg={6}>
									<Box
										padding='6px 30px'
										style={{
											boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
											borderRadius: 12,
											overflow: 'hidden',
										}}>
										<img src={Health} style={{ marginTop: 30 }}></img>
										<TitleText
											two
											textStyle={{
												marginTop: 10,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Health Insurance Providers
										</TitleText>
										<BodyText
											textStyle={{
												marginBottom: 50,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Data, Cost and Convinience
										</BodyText>
									</Box>
								</Grid>
								<Grid item xs={12} md={6} lg={6}>
									<Box
										padding='6px 30px'
										style={{
											boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
											borderRadius: 12,
											overflow: 'hidden',
										}}>
										<img src={gov} style={{ marginTop: 30 }}></img>
										<TitleText
											two
											textStyle={{
												marginTop: 10,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Government and Defence
										</TitleText>
										<BodyText
											textStyle={{
												marginBottom: 50,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Data, Cost and Convinience
										</BodyText>
									</Box>
								</Grid>
							</Grid>
							<Grid container spacing={6}>
								<Grid item xs={12} md={6} lg={6}>
									<Box
										padding='6px 30px'
										style={{
											boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
											borderRadius: 12,
											overflow: 'hidden',
										}}>
										<img src={industry} style={{ marginTop: 30 }}></img>
										<TitleText
											two
											textStyle={{
												marginTop: 10,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Industry Partners
										</TitleText>
										<BodyText
											textStyle={{
												marginBottom: 50,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Hospitals, Clinicians and Opthomologists
										</BodyText>
									</Box>
								</Grid>
								<Grid item xs={12} md={6} lg={6}>
									<Box
										padding='6px 30px'
										style={{
											boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
											borderRadius: 12,
											overflow: 'hidden',
										}}>
										<Box display='flex'>
											<img src={search} style={{ marginTop: 30 }}></img>
											<img
												src={research}
												style={{ marginTop: 30, marginLeft: 30 }}></img>
										</Box>
										<TitleText
											two
											textStyle={{
												marginTop: 10,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											{' '}
											Research Partners
										</TitleText>
										<BodyText
											textStyle={{
												marginBottom: 50,
												overflow: 'hidden',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
											}}>
											Academic and Medical Research collobrations
										</BodyText>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Box
						style={{
							// border: '1px solid #060606',
							borderRadius: '12px',
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						}}>
						<img src={Eye} style={{ width: '100%' }}></img>
						<Box ml={'40px'} mt={'40px'} style={{ paddingBottom: 30 }}>
							<TitleText>Notice</TitleText>
							<TitleText
								textStyle={{ fontSize: 36, fontFamily: 'Playfair Display' }}>
								Eye Dream has opened
							</TitleText>
							<span
								style={{
									color: '#6D4DFE',
									fontSize: 36,
									fontFamily: 'Playfair Display',
								}}>
								Series A
							</span>
							<BodyText textStyle={{ fontSize: 24, marginTop: 10 }}>
								Eye Dream is raising $5 million in capital to laucnh in United
								Kingdom while it is gearing to get an FDA approval in the next
								year for its medical algorithms.
							</BodyText>
							<Box
								mt={'10px'}
								style={{
									padding: '16px 32px',
									border: '1px solid #060606',
									borderRadius: 12,
									width: '30%',
									textAlign: 'center',
									marginBottom: 40,
								}}>
								<BodyText>Read More</BodyText>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
			{/* <Grid
				container
				style={{ paddingLeft: 83, paddingRight: 83, width: '100%' }}>
				<Box>
					<TitleText>Robotics and Manufacturing</TitleText>
				</Box>
			</Grid> */}
			<Grid
				container
				style={{ paddingLeft: 83, paddingRight: 83, width: '100%' }}>
				<Box>
					<TitleText textStyle={{ fontSize: 36 }}>
						Robotics and Manufacturing
					</TitleText>
				</Box>
			</Grid>
			<Grid
				container
				style={{
					paddingLeft: 83,
					paddingRight: 83,
					width: '100%',
					marginTop: 57,
				}}
				spacing={6}>
				<Grid item xs={12} md={6} lg={4}>
					<Box
						padding='28px 26px'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						style={{
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: 12,
						}}>
						<Box>
							<TitleText two>Frames Manufacturing</TitleText>
							<BodyText one>Fashion and customisation for your brand</BodyText>
						</Box>
						<img src={Robot} style={{ marginLeft: 10 }}></img>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Box
						padding='28px 26px'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						style={{
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: 12,
						}}>
						<Box>
							<TitleText two>Lenses Manufacturing</TitleText>
							<BodyText one>Providing the best in market lenses</BodyText>
						</Box>
						<img src={Robot} style={{ marginLeft: 10 }}></img>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Box
						padding='28px 26px'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						style={{
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: 12,
						}}>
						<Box>
							<TitleText two>Contracted 3d Printing</TitleText>
							<BodyText one>Providing refined 3D prints locally</BodyText>
						</Box>
						<img src={Robot} style={{ marginLeft: 10 }}></img>
					</Box>
				</Grid>
			</Grid>
			<Blog />
			<Grid
				container
				style={{
					background: `url(${Robotics})`,
					justifyContent: 'center',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: 800,
					marginTop: 70,
				}}>
				<Box textAlign='center' mt={'60px'}>
					<TitleText
						textStyle={{ fontSize: 64, fontFamily: 'Playfair Display' }}>
						Robotics and manufacturing
					</TitleText>
					<BodyText textStyle={{ fontSize: 24, fontWeight: 600 }}>
						How Eye dream uses robotics to create custom eye wear.
					</BodyText>
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
										background: 'white',
									}}>
									<BodyText>Read More</BodyText>
								</Box>
							</Grid>
							<Grid item xs={4}></Grid>
						</Grid>
					</Grid>
				</Box>
			</Grid>
		</>
	);
};

export default Main;
