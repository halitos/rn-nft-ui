import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import { COLORS, SIZES, assets, SHADOWS } from '../constants';
import {
  SubInfo,
  RectButton,
  CircleButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';

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
    </SafeAreaView>
  );
}
