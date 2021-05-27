import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const Article = ({ article, navigation }) => {
  return (
    <TouchableOpacity
      testID={`article-${article.id}`}
      onPress={() => {
        navigation.navigate('Second Screen', { article: article });
      }}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text testID='title' style={styles.title}>
          {article.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: Dimensions.get('window').width,
    padding: 7,
    paddingTop: 2,
  },
  title: {
    fontSize: '12px',
    paddingBottom: '10px',
  },
  image: {
    height: 300,
    width: Dimensions.get('window').width,
    marginTop: 40,
  },
});
