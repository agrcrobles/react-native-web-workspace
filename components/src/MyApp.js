/**
 * @flow
 */

import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import utils from "utils";

import { TabNavigator } from "react-navigation";

class SetupScreen extends PureComponent {
	static navigationOptions = {
		tabBarLabel: "Utils",
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					{utils.SampleText}
				</Text>
				<Button title="Go to my app" onPress={() => navigate("MyApp")} />
			</View>
		);
	}
}

class MyApp extends PureComponent {
	static navigationOptions = {
		tabBarLabel: "App",
	};
	render() {
		const { navigate, goBack } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to My App!
				</Text>
				<Button title="Go Back" onPress={() => goBack(null)} />
			</View>
		);
	}
}

export default TabNavigator({
	MyApp: { screen: MyApp },
	Setup: { screen: SetupScreen }
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
});
