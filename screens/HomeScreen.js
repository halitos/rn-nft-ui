import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

import { COLORS, NFTData } from '../constants';

const HomeScreen = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (enteredText) => {
    if (enteredText.length === 0) {
      setNftData(NFTData);
    }

    const filtered = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(enteredText.toLowerCase());
    });

    if (filtered.length === 0) {
      setNftData([]);
    } else {
      setNftData(filtered);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          {nftData.length === 0 && (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>No results found</Text>
            </View>
          )}
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
