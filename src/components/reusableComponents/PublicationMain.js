import React from 'react';
import {
	Grid,
	makeStyles,
	Typography,
	Hidden,
	Box,
	Button,
} from '@material-ui/core';
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
