import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));

  const handleTextSize = () => {
    if (text.length < data.description.length) {
      setText(data.description);
    } else {
      setText(data.description.slice(0, 100));
    }
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: SIZES.font * 1.5,
          }}
        >
          <Text>
            {text}

            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.primary,
              }}
              onPress={handleTextSize}
            >
              {text.length > 101 ? ' Show less' : ' ...Read more'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
