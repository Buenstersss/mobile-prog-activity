import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

interface Idea {
  id: string;
  text: string;
  isFinished: boolean;
}

export default function App() {
  const [ideaText, setIdeaText] = useState('');
  const [ideas, setIdeas] = useState<Idea[]>([]);

  const handleAddIdea = () => {
    if (ideaText.trim().length === 0) return;
    
    const newIdea: Idea = {
      id: Date.now().toString(),
      text: ideaText,
      isFinished: false,
    };
    
    setIdeas([newIdea, ...ideas]);
    setIdeaText('');
  };

  const toggleIdea = (id: string) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, isFinished: !idea.isFinished } : idea
      )
    );
  };

  const deleteIdea = (id: string) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const renderItem = ({ item }: { item: Idea }) => (
    <View style={styles.ideaRow}>
      <TouchableOpacity 
        style={styles.ideaTextContainer} 
        onPress={() => toggleIdea(item.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, item.isFinished && styles.checkboxChecked]}>
          {item.isFinished && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.ideaText, item.isFinished && styles.ideaTextFinished]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => deleteIdea(item.id)}
      >
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Songwriting Notebook</Text>
        <Text style={styles.headerSubtitle}>Track lyrics, chords, and melodies</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., C - G - Am - F (Chorus idea)"
            placeholderTextColor="#888"
            value={ideaText}
            onChangeText={setIdeaText}
            onSubmitEditing={handleAddIdea}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddIdea}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ideas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Studio is empty. Jot down a chord progression or lyric idea!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 54,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  addButton: {
    backgroundColor: '#4facfe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginLeft: 12,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  listContainer: {
    paddingBottom: 40,
  },
  ideaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  ideaTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4facfe',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4facfe',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ideaText: {
    fontSize: 16,
    color: '#e0e0e0',
    flexShrink: 1,
  },
  ideaTextFinished: {
    color: '#777777',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },
  deleteButtonText: {
    color: '#ff4757',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#777777',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});

https://github.com/Buenstersss/Activity.git