import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const CATEGORIES = ['All', 'Indoor', 'Outdoor', 'Succulents', 'Office'];

interface Plant {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

const PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Indoor',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: '$15.50',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Indoor',
  },
  {
    id: '3',
    name: 'Aloe Vera',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1596547609652-9fc5d8d428ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Succulents',
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    price: '$35.00',
    image: 'https://images.unsplash.com/photo-1597055974415-373b57f866bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Office',
  },
];

interface CategoryButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const CategoryButton = ({ title, isActive, onPress }: CategoryButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={[styles.categoryContainer, isActive && styles.activeCategoryContainer]}
    onPress={onPress}
  >
    <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>{title}</Text>
  </TouchableOpacity>
);

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => (
  <View style={styles.card}>
    <Image source={{ uri: plant.image }} style={styles.cardImage} />
    <View style={styles.cardInfoContainer}>
      <Text style={styles.cardName} numberOfLines={1}>
        {plant.name}
      </Text>
      <View style={styles.cardBottomRow}>
        <Text style={styles.cardPrice}>{plant.price}</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const DiscoveryScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning, 🪴</Text>
        <Text style={styles.title}>Let's find your{'\n'}favorite plants</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search plants..."
          placeholderTextColor="#a4b0be"
        />
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category}
              title={category}
              isActive={activeCategory === category}
              onPress={() => setActiveCategory(category)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={PLANTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.plantListWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.plantListContainer}
        renderItem={({ item }) => <PlantCard plant={item} />}
      />
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F9F9" />
      <DiscoveryScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F7F9F9',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#F7F9F9',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 8,
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2d3436',
    lineHeight: 34,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2d3436',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesList: {
    paddingRight: 16,
  },
  plantListContainer: {
    paddingBottom: 40,
  },
  plantListWrapper: {
    justifyContent: 'space-between',
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCategoryContainer: {
    backgroundColor: '#2D6A4F',
  },
  categoryText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  activeCategoryText: {
    color: '#fff',
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    backgroundColor: '#f1f2f6',
    marginBottom: 10,
  },
  cardInfoContainer: {
    flex: 1,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 8,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D6A4F',
  },
  addButton: {
    backgroundColor: '#000',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
  },
});