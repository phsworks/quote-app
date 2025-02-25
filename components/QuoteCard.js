import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function QuoteCard({ item, index }) {
  const getGradientColors = (index) => {
    const gradients = [
      ["#ff583346", "#ffc4004f"],
      ["#33ff5824", "#00c5cc4b"],
      ["#fc466a2b", "#3f5efb3b"],
      ["#1f40373b", "#99f2c83b"],
      ["#d9a7c73f", "#fffcdc43"],
      ["#ff99663d", "#ff5e6137"],
      ["#d9a7c739", "#fffcdc30"],
    ];
    return gradients[index % gradients.length];
  };

  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={getGradientColors(index)}
        style={styles.quoteContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardTop}>
          {item.author_imageURL && (
            <Image
              source={{ uri: item.author_imageURL }}
              style={styles.image}
            />
          )}
          <View style={styles.quoteInfo}>
            <Text style={{ fontWeight: 700, fontSize: 18 }}>
              {item.quote_category}
            </Text>
            <Text style={{fontStyle: "italic"}}>{item.author_name}</Text>
            <View style={styles.origins}>
              <Text>{item.author_nationality}</Text>
              <Text>{item.author_occupation}</Text>
            </View>
          </View>
        </View>
        <View style={styles.quoteSection}>
          <Text style={styles.quoteText}>{item.quote}</Text>
        </View>
        <View style={styles.cardBottom}>
          <Text>share</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    height: 450,
    width: 350,
    marginLeft: 3,
    marginRight: 20,
  },
  quoteContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 50,
    borderRadius: 20,
    elevation: 4,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  quoteInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 120,
    gap: 5,
  },
  quoteSection: {
    width: 300,
  },
  quoteText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
    opacity: 0.8,
  },
  cardTop: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 40,
  },
  origins: {
    flexDirection: 'row',
    gap: 5,
  }
});

export default QuoteCard;
