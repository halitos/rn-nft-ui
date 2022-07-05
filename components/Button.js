import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode='cover'
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <Pressable onPress={handlePress}>
      {({ pressed }) => (
        <View
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            padding: SIZES.base,
            opacity: pressed ? 0.5 : 1,
            ...props,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: fontSize,
              color: COLORS.white,
              textAlign: 'center',
            }}
          >
            Place a bid
          </Text>
        </View>
      )}
    </Pressable>
  );
};
