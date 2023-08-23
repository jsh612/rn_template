import React, { ReactNode } from 'react';

import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { ColorCodes } from 'constants/colors';

export interface IPopUpModalStyle {
  modalContainer: ViewStyle;
  closeButton: ViewStyle;
  modalViewContainer: ViewStyle;
}

export interface IPopUpModalProps {
  isModalVisible: boolean;
  onToggleModalIsVisible: () => void;
  onModalHide?: () => void;
  showCloseButton?: boolean;
  backdropDismiss?: boolean;
  children: ReactNode;
}

export default function PopUpModal(props: IPopUpModalProps) {
  const {
    onToggleModalIsVisible,
    onModalHide,
    isModalVisible,
    children,
    backdropDismiss = true,
  } = props;

  const onBackdropPress = () => {
    if (backdropDismiss) {
      onToggleModalIsVisible();
    }
  };

  return (
    <Modal
      style={styles.modalContainer}
      onBackdropPress={onBackdropPress}
      onModalHide={onModalHide}
      isVisible={isModalVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropColor={ColorCodes.black}
      backdropOpacity={0.6}
      useNativeDriverForBackdrop={true}
    >
      <View style={styles.modalViewContainer}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create<IPopUpModalStyle>({
  modalContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  closeButton: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  modalViewContainer: {
    backgroundColor: ColorCodes.white,
    borderRadius: 10,
    width: '100%',
    maxHeight: Dimensions.get('window').height - 48,
    minHeight: 100,
  },
});
