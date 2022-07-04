import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

import { COLORS, NFTData } from '../constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
