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
import Background from '../../assets/images/Background.svg';
import LooperGroup from '../../assets/images/LooperGroup.svg';
import People from '../../assets/images/People.svg';
import EyeDreamApp from '../../assets/images/EyeDreamApp.svg';
import LineBlack from '../../assets/images/LineBlack.svg';
import Hospital from '../../assets/images/Hospital.svg';
import EyeWear from '../../assets/images/EyeWear.svg';
import Data from '../../assets/images/Data.svg';
import Blog from '../Blog';
import BlogProduct from './BlogProduct';
const AboutUsMain = () => {
	const [card1, setCard1] = useState('true');
	const [card2, setCard2] = useState(null);
	const [card3, setCard3] = useState(null);
	const [card4, setCard4] = useState(null);

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
					height: 814,
				}}>
				<Grid
					item
					xs={7}
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
				</Grid>
				<Grid
					item
					xs={5}
					style={{
						background: `url(${People})`,
						justifyContent: 'center',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: 787,
					}}></Grid>
			</Grid>
		</>
	);
};

export default AboutUsMain;
