import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import Constants from "expo-constants";

import { AntDesign } from "@expo/vector-icons";

import logo from "./assets/logo-imdb.png";
import film from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.img} />
      </View>
      <ScrollView style={styles.scrollViewVertical}>
        <Text style={styles.txt}>Interstellar</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>2014</Text>
          <Text style={styles.description}>PG-13</Text>
          <Text style={styles.description}>2h49min</Text>
          <Text style={styles.description}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.abstract}>
            <Image source={film} style={styles.imgFilm} />
            <Text style={styles.abstractTxt}>
              A team of explorers travel through a{"\n"}wormhole in space in an
              attempt to{"\n"}ensure humanity's survival.
            </Text>
          </View>
          <View style={styles.buttonAdd}>
            <Pressable
              onPress={() => {
                alert("Added");
              }}
            >
              <Text style={styles.button}> + ADD TO WATCHLIST </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.containerNotation}>
          <View style={styles.vote}>
            <AntDesign name="star" size={24} color="yellow" />
            <View style={styles.meanContainer}>
              <Text style={styles.mean}>8.6</Text>
              <Text style={styles.note}>/10</Text>
            </View>
            <Text style={styles.view}>1.1M</Text>
          </View>

          <View style={styles.like}>
            <AntDesign name="staro" size={24} color="white" />
            <Text style={styles.mean}>RATE THIS </Text>
          </View>

          <View style={styles.score}>
            <Text style={styles.scoreNote}>74</Text>
            <Text style={styles.mean}>Metascore</Text>
            <Text style={styles.view}>46 critic reviews</Text>
          </View>
        </View>

        <View style={styles.picturesContainers}>
          <View style={styles.actors}>
            <Text style={styles.actorsTitle}>Top Billed Cast</Text>
            <Pressable>
              <Text style={styles.actorsMoreView}>SEE ALL</Text>
            </Pressable>
          </View>

          <ScrollView horizontal={true} style={styles.scrollViewHorizontal}>
            <View style={styles.pictures}>
              <View stye={styles.names}>
                <Image source={matthew} style={styles.imgActor} />
                <View style={{ width: 130 }}>
                  <Text style={styles.actorName} numberOfLines={1}>
                    Matthew McConaughey
                  </Text>
                </View>
                <Text style={styles.role}>Cooper</Text>
              </View>

              <View stye={styles.names}>
                <Image source={anne} style={styles.imgActor} />
                <Text style={styles.actorName}>Anne Hathaway</Text>
                <Text style={styles.role}>Brand</Text>
              </View>

              <View stye={styles.names}>
                <Image source={jessica} style={styles.imgActor} />
                <Text style={styles.actorName}>Jessica Chastain</Text>
                <Text style={styles.role}>Murph</Text>
              </View>

              <View stye={styles.names}>
                <Image source={mackenzie} style={styles.imgActor} />
                <Text style={styles.actorName}>Mackenzie Foy</Text>
                <Text style={styles.role}>Murph</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.titleFooter}>Director</Text>
            <Text style={styles.nameFooter}>Christopher Nolan</Text>

            <View style={styles.footerBis}>
              <Text style={styles.titleFooter}>Writers</Text>
              <Text style={styles.nameFooter}>
                Jonathan Nolan (written by) and Chastain Nolan (written by)
              </Text>
            </View>
          </View>

          <StatusBar style="light" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },

  header: {
    backgroundColor: "#393939",
    height: 50,
    marginTop: Constants.statusBarHeight,
    alignContent: "center",
    justifyContent: "center",
  },

  img: {
    width: 42,
    height: 20,
    marginLeft: 12,
    marginTop: 8,
  },

  scrollViewHorizontal: {
    // backgroundColor: "pink",
    marginHorizontal: 3,
  },

  scrollViewVertical: {
    // backgroundColor: "pink",
    marginHorizontal: 3,
  },

  txt: {
    color: "white",
    fontSize: 50,
    padding: 5,
  },

  containerDescription: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 10,
  },

  description: {
    color: "#B4B4B4",
    marginBottom: 20,
    fontSize: 14,
  },

  imgFilm: {
    marginLeft: 10,
    height: 200,
    width: 140,
  },

  abstract: {
    // borderBlockColor: "salmon",

    flexDirection: "row",
  },

  abstractTxt: {
    color: "white",
    fontSize: 13,
    flexWrap: "wrap",
    marginTop: 10,
    marginLeft: 10,
  },

  buttonAdd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 2,
  },

  button: {
    backgroundColor: "#0277BD",
    color: "white",
    height: 30,
    width: 200,
    textAlign: "center",
    padding: 8,
    position: "relative",
    top: -120,
    marginRight: 20,
  },

  containerNotation: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginBottom: 20,
  },

  vote: {
    width: 100,
    alignItems: "center",
  },

  meanContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  mean: {
    fontSize: 15,
    color: "white",
  },

  note: {
    fontSize: 13,
    color: "white",
  },

  view: {
    color: "lightgrey",
    fontSize: 12,
  },

  like: {
    width: 100,
    alignItems: "center",
  },

  score: {
    width: 100,
    alignItems: "center",
    textAlign: "center",
  },

  scoreNote: {
    backgroundColor: "#62C750",
    height: 30,
    width: 30,
    color: "white",
    fontSize: 17,
    textAlign: "center",
    padding: 5,
  },

  picturesContainers: {
    backgroundColor: "#212121",
  },

  actors: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  actorsTitle: {
    color: "white",
    fontSize: 22,
  },

  actorsMoreView: {
    color: "#0277BD",
    fontSize: 14,
  },

  pictures: {
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    // borderColor: "red",
    // borderWidth: 1,
    width: 600,
    gap: 10,
  },

  imgActor: {
    // marginLeft: 10,
    height: 200,
    width: 140,
  },

  actorName: {
    color: "white",
    fontSize: 13,
    marginLeft: 15,
    marginTop: 15,
  },

  role: {
    color: "grey",
    fontSize: 13,
    marginLeft: 15,
    marginBottom: 15,
  },

  footer: {
    marginTop: 15,
    padding: 10,
  },

  footerBis: {
    marginTop: 15,
    marginBottom: 40,
  },

  titleFooter: {
    color: "white",
    fontSize: 16,
  },

  nameFooter: {
    color: "lightgrey",
    fontSize: 13,
  },
});
