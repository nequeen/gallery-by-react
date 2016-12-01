require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片的数据
var imagesDataArr = require('../data/imageDatas.json'); 
//获取图片URL等相关数据
imagesDataArr = (function genImageURL(imagesDataArr){
  for(var i = 0; i < imagesDataArr.length; i++){
    var singleImg = imagesDataArr[i];
    singleImg.imgURL = require('../images/' + singleImg.fileName);
    imagesDataArr[i] = singleImg;
  };
  return imagesDataArr;
})(imagesDataArr);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
