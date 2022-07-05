import { View, Text, Image } from 'react-native';
import { EthPrice } from './SubInfo';
import { SIZES, FONTS, COLORS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.small - 2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <View
        style={{
          marginLeft: SIZES.small,
        }}
      >
        <EthPrice price={bid.price} />
      </View>
    </View>
  );
};

export default DetailsBid;
