import Post from '@/components/Post';
import { PostData } from '@/types/post';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Modal } from 'react-native';

export default function HomeScreen() {

  const posts: PostData[ ] = [
    {
      title: "Mitt første innlegg",
      description: "Sensasjonelt",
    },
    {title: "Mitt andre innlegg",
      description: "Supert"
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState (false);

  return (
  <View style={styles.mainContainer}>
    <Stack.Screen 
    options={{
      headerRight: () => (
        <Pressable onPress={() => console.log("Kna")}>
          <Text>Knapp?</Text>
        </Pressable>
      ),
    }}
    />
    
    <Modal>
    visible
    </Modal>
    
    <FlatList
    data={posts}
    ItemSeparatorComponent={() => <View style={{height: 12}}></View>}
    renderItem={(posts) => <Post postData={posts.item}/>}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,

  },
  post: {
    backgroundColor: "white", 
    borderRadius: 10,
    paddingHorizontal:12,
    paddingVertical: 8,
  },
});
