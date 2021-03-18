export function addFrame(pictureId, scale, size) {
  let imgWidth = parseInt(size.split("x")[0]) * scale;
  let imgHeight = parseInt(size.split("x")[1]) * scale;
  let leftWite = `c_fill,h_${imgHeight + 10},l_white_xeach0,w_10,x_-${parseInt(
    imgWidth / 2
  )}`;
  let rightWhite = `c_fill,h_${imgHeight + 10},l_white_xeach0,w_10,x_${parseInt(
    imgWidth / 2
  )}`;
  let topWhite = `c_fill,h_10,l_white_xeach0,w_${imgWidth + 10},y_-${parseInt(
    imgHeight / 2
  )}`;
  let bottomWhite = `c_fill,h_10,l_white_xeach0,w_${imgWidth + 10},y_${parseInt(
    imgHeight / 2
  )}`;
  let leftBlack = `c_fill,h_${imgHeight + 30},l_black_xcxxhv,w_10,x_-${
    parseInt(imgWidth / 2) + 10
  }`;
  let rightBlack = `c_fill,h_${imgHeight + 30},l_black_xcxxhv,w_10,x_${
    parseInt(imgWidth / 2) + 15
  }`;
  let topBlack = `c_fill,h_10,l_black_xcxxhv,w_${imgWidth + 20},y_-${parseInt(
    imgHeight / 2 + 10
  )}`;
  let bottomBlack = `c_fill,h_10,l_black_xcxxhv,w_${imgWidth + 20},y_${parseInt(
    imgHeight / 2 + 10
  )}`;

  return `https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_${imgHeight},w_${imgWidth}/c_fill,h_${imgHeight},w_${imgWidth}/${leftWite}/${rightWhite}/${topWhite}/${bottomWhite}/${leftBlack}/${rightBlack}/${topBlack}/${bottomBlack}/v1615990196/${pictureId}`;
}

//scale should be how much a 1cm is in pixels
// for example the first picture 1cm = 1.7pixels

//size is the output desired ex. 50x40
