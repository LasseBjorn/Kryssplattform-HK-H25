import Post from '@/components/Post';
import { PostData } from '@/types/post';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Modal } from 'react-native';


export default function HomeScreen() {
  //State to store list of posts
  const [posts, setPosts] = useState<PostData[]> ([
    {
      title: "Mitt første innlegg",
      description: "Sensasjonelt",
    },
    {title: "Mitt andre innlegg",
      description: "Supert"
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState (false);

  //Function to add a new post to the list
  const addPosts = (newPost: PostData) => {
    setPosts((prevPost) => [newPost, ...prevPost])//Add new post to the top

  };

  return (

  <View style={styles.mainContainer}>
    <Stack.Screen 
    options={{
      headerRight: () => (
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text>Knapp?</Text>
        </Pressable>
      ),
    }}
    />
  
    <Modal visible={isModalVisible} animationType="slide" style={styles.mainContainer}>
      <View style={styles.modalContainer}>
        <Pressable onPress={() => setIsModalVisible(false)} style={styles.modalButton}>
          <Text>Knapp?</Text>
        </Pressable>
      </View>
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
    paddingTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
  },
  post: {
    backgroundColor: "white", 
    borderRadius: 10,
    paddingHorizontal:12,
    paddingVertical: 8,
  },
});
