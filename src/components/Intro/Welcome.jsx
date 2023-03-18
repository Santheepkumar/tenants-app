import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "../../lib/tailwind";

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          style={styles.introImage}
          source={require("../../../assets/welcome.png")}></Image>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          Register to enjoy AwanWorks Property Management App
        </Text>
        <View style={tw`mt-14`}>
          <TouchableOpacity
            style={tw`w-[200px] shadow-sm bg-primary-100 py-3 rounded-md`}>
            <Text style={tw`text-white text-center`}>First Time Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-[200px] mt-3 py-3 rounded-md shadow-sm bg-primary-200`}>
            <Text style={tw`text-black text-center `}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`mt-4`}>
          <Text style={tw`text-[12px] text-center`}>
            By Logging in Or Registering, You Have Agreed To {""}
            <Text style={tw`text-[#5fc689]`}>
              The Terms And Conditions {""}
            </Text>
            And <Text style={tw`text-[#5fc689] ml-[5px]`}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introImage: {
    width: "100%",
    height: 250,
  },
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    width: "75%",
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
  },
  description: {
    width: "75%",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
});
export default Welcome;
