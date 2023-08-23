import React from 'react';

import Modal from 'react-native-modal';

import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconBase from 'components/common/icons';

import { IconKindType } from 'components/common/icons/icon.interface';
import { IModalProps } from 'components/common/modal/modalBase.interface';
import { ColorCodes } from 'constants/colors';

interface IFullScreenModalProps extends IModalProps {
  hasHeader?: boolean;
  headerIconName?: IconKindType;
}

export default function FullScreenModal(props: IFullScreenModalProps) {
  const { top } = useSafeAreaInsets();
  const {
    children,
    onToggleModalIsVisible,
    isModalVisible,
    hasHeader = true,
    headerIconName = 'bell',
  } = props;

  const styles = modalStyles(hasHeader ? top : 0);

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.container}
      onBackButtonPress={onToggleModalIsVisible}
    >
      <View style={styles.contentsContainer}>
        {hasHeader && (
          <View style={styles.header}>
            <Pressable onPress={onToggleModalIsVisible} hitSlop={16}>
              <IconBase icon={headerIconName} />
            </Pressable>
          </View>
        )}
        {children}
      </View>
    </Modal>
  );
}

const modalStyles = (top: number) =>
  StyleSheet.create({
    container: { margin: 0 },
    contentsContainer: { backgroundColor: ColorCodes.white, flex: 1, paddingTop: top },
    header: {
      height: 64,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
