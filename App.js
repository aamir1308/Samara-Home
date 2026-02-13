import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [started, setStarted] = useState(false);
  return (
    <SafeAreaView style={s.wrap}>
      <StatusBar style='light' />
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.title}>Samara-Home</Text>
        <Text style={s.sub}>Built with AI Factory v3.3</Text>
        <View style={s.card}>
          <Text style={s.cardTitle}>Requirements</Text>
      <Text style={s.item}>• PRODUCT REQUIREMENTS DOCUMENT (PRD)</Text>
      <Text style={s.item}>• SECTION 1: PROJECT IDENTIFICATION</Text>
      <Text style={s.item}>• PROJECT: Samara Creations</Text>
      <Text style={s.item}>• VERSION: 1.0.0</Text>
      <Text style={s.item}>• LAST UPDATED: 12 February 2026</Text>
      <Text style={s.item}>• SECTION 2: EXECUTIVE SUMMARY</Text>
        </View>
        <TouchableOpacity style={s.btn} onPress={() => setStarted(!started)}>
          <Text style={s.btnT}>{started ? 'Getting started...' : 'Get Started'}</Text>
        </TouchableOpacity>
        <Text style={s.hint}>Use the Edit tab to add real features with AI</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap:      { flex: 1, backgroundColor: '#0f172a' },
  scroll:    { alignItems: 'center', padding: 24, paddingTop: 60 },
  title:     { fontSize: 32, fontWeight: 'bold', color: '#f8fafc', marginBottom: 6, textAlign: 'center' },
  sub:       { fontSize: 13, color: '#94a3b8', marginBottom: 28 },
  card:      { backgroundColor: '#1e293b', borderRadius: 16, padding: 20, width: '100%', marginBottom: 24 },
  cardTitle: { color: '#818cf8', fontWeight: '700', marginBottom: 10, fontSize: 13, textTransform: 'uppercase' },
  item:      { color: '#cbd5e1', fontSize: 14, marginBottom: 8 },
  btn:       { backgroundColor: '#6366f1', paddingVertical: 16, paddingHorizontal: 40, borderRadius: 14, marginBottom: 16 },
  btnT:      { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  hint:      { color: '#475569', fontSize: 12, textAlign: 'center' },
});
