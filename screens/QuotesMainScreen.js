import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { supabase } from "../supabase/config";
import { useState, useEffect } from "react";

function QuoteScreen() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getQuotes() {
      let { data, error } = await supabase.from("famous-quotes").select("*");

      if (error) {
        setError(error.message);
        console.log("There was an error", error);
      } else {
        setQuotes(data);
      }
    }
    getQuotes();
  }, []);

  if (error) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{item.quote}</Text>
            {item.author_imageURL && (
              <Image source={{ uri: item.author_imageURL }} style={styles.image} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  quoteContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  quoteText: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 100,
  },
});

export default QuoteScreen;
