import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';

export default function HomeScreen(
  {navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const renderTheFlatListItem = ({item}) => (
  <List.Item
      style = {styles.box}
      title = <Text style={styles.paragraph}>{item.title}</Text>
      onPress={() => {navigation.navigate ("DetailsScreen", 
                                           {image: item.urlToImage,
                                            title: item.title, 
                                            description: item.description, 
                                            content: item.content, 
                                            url: item.url, author: 
                                            item.author})} }
  />
);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY')
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f8ff", padding:10}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ url }, index) => url}
          renderItem={renderTheFlatListItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16, 
    fontWeight: "bold", 
    padding: 14,
    flex: 1, 
    flexWrap: 'wrap'
  },

  box: {
    width: '95%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    margin: 8
  }
});
