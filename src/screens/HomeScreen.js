import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Button
				onPress={() => navigation.navigate('Components')}
				title="Go to Components"
			/>
			<Button
				onPress={() => navigation.navigate('List')}
				title="Go to Lists"
			/>
      <Button
				onPress={() => navigation.navigate('ImageScreen')}
				title="Go to Image Screen"
			/>
			<Button
				onPress={() => navigation.navigate('Counter')}
				title="Go to Counter Demo"
			/>
			<Button
				onPress={() => navigation.navigate('Colors')}
				title="Go to Colors Demo"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
