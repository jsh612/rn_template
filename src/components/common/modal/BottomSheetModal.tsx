import React, { useCallback, useMemo } from 'react';

import { Dimensions, KeyboardAvoidingView, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { IModalProps } from 'components/common/modal/modalBase.interface';

import { ColorCodes } from 'constants/colors';

export default function BottomSheetModal(props: IModalProps) {
  const {
    backgroundColor = ColorCodes.white,
    backdropDismiss = false,
    onToggleModalIsVisible,
    isModalVisible,
    children,
    isAwareKeyboard = false,
    paddingTop,
    onModalHide,
  } = props;

  const modalClose = useCallback(() => {
    if (!backdropDismiss) {
      return;
    }

    onToggleModalIsVisible();
  }, [backdropDismiss, onToggleModalIsVisible]);

  const modalStyles = useMemo(() => styles(paddingTop), [paddingTop]);

  return (
    <View style={{ zIndex: 100 }}>
      {isAwareKeyboard ? (
        <KeyboardAvoidingView>
          <Modal
            onBackdropPress={modalClose}
            onModalHide={onModalHide}
            isVisible={isModalVisible}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            hideModalContentWhileAnimating={true}
            useNativeDriverForBackdrop={true}
            style={{ margin: 0 }}
            backdropOpacity={0.6}
            avoidKeyboard={true}
          >
            <View style={modalStyles.modalViewContainer}>{children}</View>
          </Modal>
        </KeyboardAvoidingView>
      ) : (
        <Modal
          onBackdropPress={modalClose}
          onModalHide={onModalHide}
          isVisible={isModalVisible}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          hideModalContentWhileAnimating={true}
          useNativeDriverForBackdrop={true}
          style={{ margin: 0 }}
          backdropOpacity={0.6}
          avoidKeyboard={true}
        >
          <View style={[modalStyles.modalViewContainer, { backgroundColor }]}>{children}</View>
        </Modal>
      )}
    </View>
  );
}

interface IStyles {
  modalContainer: ViewStyle;
  modalViewContainer: ViewStyle;
}

const styles = (paddingTop?: number) =>
  StyleSheet.create<IStyles>({
    modalContainer: {
      height: '100%',
    },
    modalViewContainer: {
      paddingTop: paddingTop ?? 16,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      position: 'absolute',
      bottom: 0,
      maxHeight: Dimensions.get('window').height * 0.8,
      minHeight: 168,
      width: '100%',
      backgroundColor: ColorCodes.white,
    },
  });
