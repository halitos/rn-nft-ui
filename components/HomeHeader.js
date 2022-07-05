import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person04}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            source={assets.badge}
            resizeMode='contain'
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hola, damas y caballeros 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base,
          }}
        >
          Vamos a encontrar una obra maestra
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderRadius: SIZES.small,
            backgroundColor: COLORS.gray,
            padding: SIZES.base,
          }}
        >
          <Image
            source={assets.search}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.small,
            }}
          />
          <TextInput
            placeholder='Search for NFTs'
            onChangeText={onSearch}
            defaultValue=''
            style={{
              flex: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
