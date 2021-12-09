import React from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
} from '@material-ui/core';
import BodyText from '../BodyText';
import PublicationPic from '../../assets/images/PublicationPic.svg';
import Pub from '../../assets/images/Pub.svg';
import fbp from '../../assets/images/fbp.svg';
import TwitterP from '../../assets/images/TwitterP.svg';
import Instp from '../../assets/images/Instp.svg';
import linP from '../../assets/images/linP.svg';
import CirclePic from '../../assets/images/CirclePic.svg';
import TitleText from '../../components/TitleText';
import BlogProductCard from './BlogProductCard';
const PubDetailMain = () => {
	return (
		<>
			<Box
				// container
				// spacing={2}
				style={{
					paddingLeft: 185,
					paddingRight: 185,
					width: '100%',
					marginTop: 60,
					marginBottom: 40,
				}}>
				<Box>
					<TitleText textStyle={{ fontSize: 36 }}>
						Lorem Ipsum Dolor sit amet, lorem imspfuns sum Dolor
					</TitleText>
				</Box>
				<Box display='flex' justifyContent='space-between' mt={'10px'}>
					<Box display='flex'>
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
					<BodyText> 04 Aug, 2021</BodyText>
				</Box>
				<img
					src={PublicationPic}
					style={{ width: '100%', marginTop: 20 }}></img>
				<Box>
					<BodyText textStyle={{ marginTop: 20 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</BodyText>
					<BodyText textStyle={{ marginTop: 20 }}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</BodyText>
					<BodyText textStyle={{ marginTop: 20 }}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</BodyText>
				</Box>
				<img src={Pub} style={{ width: '100%', marginTop: 20 }}></img>
				<Box>
					<BodyText textStyle={{ marginTop: 20 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</BodyText>
					<BodyText textStyle={{ marginTop: 20 }}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</BodyText>
					<BodyText textStyle={{ marginTop: 20 }}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</BodyText>
				</Box>
				<Box
					display='flex'
					mt={'20px'}
					justifyContent='space-between'
					alignItems='center'>
					<Box display='flex' alignItems='center'>
						<TitleText>Share This: </TitleText>
						<Box display='flex' ml={'20px'}>
							<Box
								style={{
									width: '35px',
									height: '35px',
									borderRadius: '20px',
									padding: '10px',
									background: '#EDEDFF',
								}}>
								<img src={TwitterP}></img>
							</Box>
							<Box
								style={{
									width: '35px',
									height: '35px',
									borderRadius: '20px',
									padding: '10px',
									background: '#EDEDFF',
									marginLeft: 5,
								}}>
								<img src={linP}></img>
							</Box>
							<Box
								style={{
									width: '35px',
									height: '35px',
									borderRadius: '20px',
									padding: '10px',
									background: '#EDEDFF',
									marginLeft: 5,
								}}>
								<img src={fbp}></img>
							</Box>
							<Box
								style={{
									width: '35px',
									height: '35px',
									borderRadius: '20px',
									padding: '10px',
									background: '#EDEDFF',
									marginLeft: 5,
								}}>
								<img src={Instp}></img>
							</Box>
						</Box>
					</Box>
					<Box display='flex' alignItems='center'>
						<img src={CirclePic}></img>
						<Box ml={'5px'}>
							<TitleText two textStyle={{ lineHeight: 0.8 }}>
								Cameron
							</TitleText>
							<TitleText two>Williamson</TitleText>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default PubDetailMain;
