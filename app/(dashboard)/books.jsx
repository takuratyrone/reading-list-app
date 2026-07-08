import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Books = () => {
    return (
        <ThemedView style={styles.container}>
          
            <Spacer />
            <ThemedText style={styles.heading} title={true}>
                Your Reading List
            </ThemedText>

        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    heading: {
        textAlign: 'center',
        fontSize: 18,   
        fontWeight: 'bold',
    }
})