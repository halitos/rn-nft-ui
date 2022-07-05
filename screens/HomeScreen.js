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
            renderItem={(itemData) => <NFTCard data={itemData.item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View // acting like backgroundColor behind the cards
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
