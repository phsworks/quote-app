import { View, Text, StyleSheet } from 'react-native';

function QuoteScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
  },
});

export default QuoteScreen;