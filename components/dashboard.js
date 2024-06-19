import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const featuredJobs = [
  {
    id: "1",
    src: require("../assets/Vector.png"),
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#4267B2", "#C3D9FF"],
  },
  {
    id: "2",
    src: require("../assets/flat-color-icons_google.png"),
    title: "Data Scientist",
    company: "Google",
    salary: "$160,000",
    location: "California, US",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "3",
    src: require("../assets/yy.png"),
    title: "Software Engineer",
    company: "Youtube",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "3",
    src: require("../assets/tt.png"),
    title: "Data Analyst ",
    company: "Twitter",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "4",
    src: require("../assets/off.jpeg"),
    title: "Cybersecurity Engineer",
    company: "Offensive Security",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "5",
    src: require("../assets/ai.png"),
    title: "Prompt Engineer",
    company: "OpenAI",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "6",
    src: require("../assets/fig.png"),
    title: " UI/UX developer",
    company: " Figma",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "7",
    src: require("../assets/off.jpeg"),
    title: "Incident Responder",
    company: "Offensive Security",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
  {
    id: "8",
    src: require("../assets/cib_apple.png"),
    title: "Network Governance",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    backgroundColor: "#FF69B4",
    colors: ["#6E8DFF", "#C3D9FF"],
  },
];

const popularJobs = [
  {
    id: "1",
    title: "Jr Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, US",
    src: require("../assets/burger-king-4 1.png"),
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
    src: require("../assets/image 8.png"),
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
    src: require("../assets/Vector.png"),
  },
];
const renderFeaturedJob = ({ item }) => (
  <LinearGradient
    colors={item.colors}
    style={[styles.featuredJobCard, { backgroundColor: item.backgroundColor }]}
  >
    <View style={styles.sbs}>
      <Image
        source={item.src}
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      />
      <View>
        <Text style={styles.featuredJobTitle}>{item.title}</Text>
        <Text style={styles.featuredJobCompany}>{item.company}</Text>
      </View>
    </View>

    <View style={styles.svs}>
      <Text style={styles.featuredJobSalary}>{item.salary}</Text>
      <Text style={styles.featuredJobLocation}>{item.location}</Text>
    </View>
  </LinearGradient>
);
const renderPopularJob = ({ item }) => (
  <View style={styles.popularJobCard}>
    <View style={{}}>
      <Image
        source={item.src}
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.popularJobTitle}>{item.title}</Text>
        <Text style={styles.popularJobSalary}>{item.salary}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.popularJobLocation}>{item.location}</Text>
        <Text style={styles.popularJobCompany}>{item.company}</Text>
      </View>
    </View>
  </View>
);
const Dashboard = ({ route }) => {
  const { name, email } = route.params;
  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        <View styles={styles.posy}>
          <View>
            <View style={styles.usrinf}>
              <View>
                <Text style={styles.nnmm}> {name}</Text>
                <Text style={styles.eemm}> {email}</Text>
              </View>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  marginRight: 10,
                }}
                source={require("../assets/usr.jpg")}
              />
            </View>
          </View>
        </View>

        <View style={styles.syard}>
          <View
            style={{
              marginLeft: 17,
              marginTop: 20,
              borderBlockColor: "#b0b0b0",
            }}
          >
            <TextInput
              style={{
                height: 49,
                width: 270,
                borderColor: "#fff",
                backgroundColor: "#b0b0b0",

                borderWidth: 2,
                borderRadius: 12,
              }}
              placeholder="  🔍  search"
            />
          </View>
          <View style={styles.tsyar}>
            <TouchableOpacity>
              <Image
                source={require("../assets/mega-creator(2).png")}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 16,
                  backgroundColor: "#888888",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headr}>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Featured Jobs
          </Text>
          <Text style={{ marginRight: 10, color: "#888888" }}>see all</Text>
        </View>
        <View>
          <ScrollView>
            <View>
              <View>
                <FlatList
                  horizontal
                  data={featuredJobs}
                  renderItem={renderFeaturedJob}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={styles.horizontalList}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.headr}>
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
              Popular Jobs
            </Text>
            <Text style={{ marginRight: 10, color: "#888888" }}>see all</Text>
          </View>
          <ScrollView>
            <View>
              <FlatList
                data={popularJobs}
                renderItem={renderPopularJob}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  usrinf: {
    marginTop: 35,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nnmm: {
    fontWeight: "bold",
    fontSize: 25,
  },
  eemm: {
    color: "#888888",
  },
  syard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tsyar: {},
  headr: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
  },
  featuredJobCard: {
    width: 240,
    height: 160,
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  featuredJobCompany: {
    fontSize: 14,
    color: "#fff",
  },
  featuredJobSalary: {
    fontSize: 14,
    color: "#fff",
  },
  featuredJobLocation: {
    fontSize: 14,
    color: "#fff",
  },
  sbs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  svs: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popularJobCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  popularJobCompany: {
    fontSize: 14,
    color: "#666",
  },
  popularJobSalary: {
    fontSize: 14,
    color: "#333",
  },
  popularJobLocation: {
    fontSize: 14,
    color: "#666",
  },
});

export default Dashboard;
