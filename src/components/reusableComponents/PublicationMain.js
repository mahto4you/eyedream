import React from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
} from '@material-ui/core';
import vector from '../../assets/images/Vector.svg';
import vector2 from '../../assets/images/Vector2.svg';
import TitleText from '../../components/TitleText';
import BlogProductCard from './BlogProductCard';
const PublicationMain = () => {
	return (
		<>
			<Grid
				container
				spacing={2}
				style={{
					paddingLeft: 83,
					paddingRight: 83,
					marginTop: 25,
					width: '100%',
				}}>
				<Grid item xs={6}>
					<img src={vector} class='img1'></img>
					<input
						type='search'
						placeholder='Search'
						style={{
							width: '100%',
							height: '48px',
							borderRadius: 12,
							paddingLeft: '40px',
							border: '1px solid #C4C4C4',
						}}></input>
				</Grid>
				<Grid item xs={3}>
					<select
						name='cars'
						id='cars'
						placeholder='Search'
						style={{
							width: '100%',
							height: '48px',
							borderRadius: 12,
							paddingLeft: '20px',
							paddingRight: '20px',
							border: '1px solid #C4C4C4',
						}}>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='opel'>Opel</option>
						<option value='audi'>Audi</option>
					</select>
				</Grid>
				<Grid item xs={3}>
					<select
						name='cars'
						id='cars'
						style={{
							width: '100%',
							height: '48px',
							borderRadius: 12,
							paddingLeft: '20px',
							paddingRight: '20px',
							border: '1px solid #C4C4C4',
						}}>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='opel'>Opel</option>
						<option value='audi'>Audi</option>
					</select>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{
					paddingLeft: 83,
					paddingRight: 83,
					width: '100%',
					marginTop: 60,
					marginBottom: 40,
				}}>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
					return <BlogProductCard index={index} />;
				})}
			</Grid>
		</>
	);
};

export default PublicationMain;
