import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

export const useScroll = () => {
  const ref = useRef<FlatList>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 100 && !isVisible) {
      setIsVisible(true);
    } else if (offsetY <= 100 && isVisible) {
      setIsVisible(false);
    }
  };

  return {
    ref,
    isVisible,
    handleScroll,
  };
};
