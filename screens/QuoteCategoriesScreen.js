import { View, Text, StyleSheet } from 'react-native';

function QuoteCategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Your Text Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default QuoteCategoriesScreen;