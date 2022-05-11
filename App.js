import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.view1Image} source={require("./rover.jpg")} />
      </View>
      <View style={styles.view2}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.view2Text}>
            Mars Exploration Rover (MER) est une mission double de la NASA
            lancée en 2003 et composée de deux robots mobiles ayant pour
            objectif d'étudier la géologie de la planète Mars et en particulier
            le rôle joué par l'eau dans l'histoire de la planète. Les deux
            robots ont été lancés au début de l'été 2003 et se sont posés en
            janvier 2004 sur deux sites martiens susceptibles d'avoir conservé
            des traces de l'action de l'eau dans leur sol. Chaque rover ou
            astromobile, piloté par un opérateur depuis la Terre, a alors entamé
            un périple en LA MANU est une marque de NOVEI Formation NOVEI
            Formation – Campus Inovia Bâtiment 12 – 1435 boulevard Cambronne –
            60400 Noyon SIRET N° 752 434 605 00024 – Code activité : 8559A –
            Déclaration d’activité N° 32 60 03047 60 2 utilisant une batterie
            d'instruments embarqués pour analyser les roches les plus
            intéressantes : Chaque rover pèse environ 185 kg et se déplace sur
            six roues mues par l'énergie électrique fournie par des panneaux
            solaires. Il est équipé de trois paires de caméras utilisées pour la
            navigation et de plusieurs instruments scientifiques : une caméra
            panoramique située sur un mât à 1,5 mètre de hauteur, un outil pour
            abraser la surface des roches porté par un bras articulé sur lequel
            se trouvent également un spectromètre à rayons X, un spectromètre
            Mössbauer et une caméra microscope. Enfin, un spectromètre
            infrarouge est utilisé pour l'analyse des roches et de l'atmosphère.
            La mission MER fait partie du programme d'exploration de Mars de la
            NASA et prend la suite de deux missions américaines sur le sol
            martien aux capacités scientifiques beaucoup plus limitées : le
            programme Viking de 1976 et Mars Pathfinder de 1997. Les objectifs
            scientifiques du programme
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  view2Text: {
    fontSize: 15,
    flexWrap: "wrap",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  view1Image: {
    marginTop: 30,
    width: "100%",
    height: 300,
    resizeMode: "center",
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 5,
  },
});
