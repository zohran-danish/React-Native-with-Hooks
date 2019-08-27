import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
	return (
		<View>
			<Image source={props.imageSource} />
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
