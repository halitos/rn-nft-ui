import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import {
  SubInfo,
  RectButton,
  CircleButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 375 }}>
    <Image
      source={data.image}
      resizeMode='cover'
      style={{
        width: '100%',
        height: '100%',
      }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={10}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={10}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

export default function DetailsScreen({ route, navigation }) {
  const { data } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(2.55, 2.55, 2.55, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(data) => {
          return <DetailsBid bid={data.item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  {data.bids.length > 1 ? 'Current Bids' : 'Current Bid'}
                </Text>
              )}
            </View>
          </>
        }
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
      />
    </SafeAreaView>
  );
}
