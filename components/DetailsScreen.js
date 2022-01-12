import * as React from 'react';
import { Button, Card, Text, Image, Linking, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { List } from 'react-native-paper';


export default function DetailsScreen ({navigation, route}) {
  const {image, title, description, content, url, author} = route.params;

  return (
    <View>
      <Text style = {{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 10}}> {JSON.stringify(title)} </Text> 
      <Image 
          style={styles.image}
          source={{uri: image}}
      />
      <Text style ={styles.paragraph}>Description: {JSON.stringify(description)}</Text>
      <Text style ={styles.paragraph}>Content: {JSON.stringify(content)}</Text>
      <Text style ={styles.paragraph}>Author: {JSON.stringify(author)}</Text>
      <Text style ={styles.paragraph}>URL: {JSON.stringify(url)}</Text>
      <Button
        title= 'Open the full article'
        onPress={() => Linking.openURL(url) }>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 8,
    width: 300,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'cover',
    
  },
 
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: 'justify',
  }
});
