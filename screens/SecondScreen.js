import React from 'react'
import { StyleSheet, Image,Text, View, Dimensions} from 'react-native'

const SecondScreen = (props) => {
  const article = props.route.params.article;
  return (
    <View style={styles.container}>
    <Image 
    source={{ uri: props.route.params.article.image }} 
    style={styles.image} 
    />
      <Text style= {styles.header}>{props.route.params.article.title}</Text>
      <Text style = {styles.teaser}>{props.route.params.article.teaser}</Text>
    </View>
  );
}

export default SecondScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#892b2f',
    paddingHorizontal: 10
  },
  header:{
    fontSize:25,
  },
  teaser:{
    fontSize:20,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  }
});