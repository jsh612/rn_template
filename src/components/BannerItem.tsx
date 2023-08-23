import React from 'react';

import { Text, View } from 'react-native';

export interface IBannerItem {
  title: string;
}

export default function BannerItem(props: { item: IBannerItem }) {
  const {
    item: { title },
  } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
