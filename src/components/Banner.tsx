import BannerItem, { IBannerItem } from 'components/BannerItem';
import React, { useCallback, useRef, useState } from 'react';

import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const DEMO_CAROUSEL_LIST: IBannerItem[] = [
  { title: '아이템1' },
  { title: '아이템2' },
  { title: '아이템3' },
  { title: '아이템4' },
];

export default function Banner() {
  const carouselRef = useRef<Carousel<IBannerItem>>(null);
  const [isLast, setIsLast] = useState(false);

  const handleOnScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log('스크롤 다루기');
  }, []);

  return (
    <View>
      <Carousel
        contentContainerCustomStyle={carouselStyles.carouselCustomContainer}
        layout="default"
        ref={carouselRef}
        data={DEMO_CAROUSEL_LIST}
        renderItem={BannerItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        keyExtractor={(item) => item.title}
        // enableSnap={false}
        pagingEnabled={true}
        activeSlideOffset={100}
        swipeThreshold={100}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onScroll={handleOnScroll}
        scrollEventThrottle={16}
        // scrollEnabled={!isLast}
        onEndReached={() => setIsLast(true)}
        autoplay
        loop
      />
    </View>
  );
}
const carouselStyles = StyleSheet.create({
  container: { flex: 1 },
  carouselCustomContainer: {
    marginTop: 10,
  },
  carouselContentsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  skipButton: {
    zIndex: 1,
    position: 'absolute',
    height: 64,
    paddingHorizontal: 16,
    justifyContent: 'center',
    width: '100%',
  },
});
