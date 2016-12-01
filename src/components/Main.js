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
      <section className="stage">
          <section className="img-sec">
          </section>
          <nav className="controller-nav">
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
