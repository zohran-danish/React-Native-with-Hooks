import React, { Component } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

class ListScreen extends Component {
	render() {
		const friends = [
			{ name: 'Friend 1 ' },
			{ name: 'Friend 2 ' },
			{ name: 'Friend 3 ' },
			{ name: 'Friend 4 ' },
			{ name: 'Friend 5 ' },
			{ name: 'Friend 6 ' },
			{ name: 'Friend 7 ' },
			{ name: 'Friend 8 ' }
		];
		return (
			<FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
				data={friends}
				keyExtractor={friend => friend.name}
				renderItem={({ item }) => (
					<Text style={styles.textStyle}>{item.name}</Text>
				)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
		fontSize: 30
	}
});

export default ListScreen;
