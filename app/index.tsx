import { Text, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
  <View>
    <View style={styles.post}>
    <Text>Mitt første innlegg</Text>
    <View>
      <Text>Helt vanvitting bra</Text>
    </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "white", 
    borderRadius: 10,
    paddingHorizontal:12,
    paddingVertical: 8,
  },
});
