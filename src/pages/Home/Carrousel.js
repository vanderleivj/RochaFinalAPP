import React from 'react';
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarrouselStyle, CarrouselText, Style} from './styles';

import moment from 'moment';

const date = moment();

console.log(date);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {title: 'Jan - 2020', mes: 1, ano: 2020},
        {title: 'Fev - 2020', mes: 2, ano: 2020},
        {title: 'Mar - 2020', mes: 3, ano: 2020},
        {title: 'Abr - 2020', mes: 4, ano: 2020},
        {title: 'Mai - 2020', mes: 5, ano: 2020},
        {title: 'Jun - 2020', mes: 6, ano: 2020},
        {title: 'Jul - 2020', mes: 7, ano: 2020},
        {title: 'Ago - 2020', mes: 8, ano: 2020},
        {title: 'Set - 2020', mes: 9, ano: 2020},
        {title: 'Out - 2020', mes: 10, ano: 2020},
        {title: 'Nov - 2020', mes: 11, ano: 2020},
        {title: 'Dez - 2020', mes: 12, ano: 2020},
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <CarrouselStyle>
        <CarrouselText>{item.title}</CarrouselText>
      </CarrouselStyle>
    );
  }

  onSnapToItem(index) {
    this.props.onChangeMonth(this.state.entries[index]);
  }
  render() {
    return (
      <Carousel
        layout={'default'}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={360}
        itemWidth={200}
        firstItem={2+1}
        onSnapToItem={index => this.onSnapToItem(index)}
        activeSlideAlignment="center"
        containerCustomStyle={Style}
      />
    );
  }
}
