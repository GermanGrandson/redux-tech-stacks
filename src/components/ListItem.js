import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, TouchableOpacity, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription(){
    const {libraryItem, expanded} = this.props;

    // If expanded is True it will return the libraryItem we touched
    if(expanded){
      return(
        <CardSection>
          <Text style={{flex: 1}}>{libraryItem.description}</Text>
        </CardSection>
      )
    }
  }

  render(){
    const {titleStyle} = styles;
    const {id, title} = this.props.libraryItem;

    return(
      <TouchableOpacity
        onPress ={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state,ownProps) => {
  //ownProps are props that are passed into ListItem down in the export line.
  //Because ListItem was passed a ListItem we can access that with ownProps
  const expanded = state.selectedLibraryId === ownProps.libraryItem.id; // Equals to true

  return { expanded: expanded};
};

export default connect(mapStateToProps, actions)(ListItem); // When connecting JUST actions, we first put "null, action"
