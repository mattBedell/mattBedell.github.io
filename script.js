console.log('Script Loaded.');
aCard = document.getElementsByClassName('leftCard')[0];
aCardWidth = aCard.offsetWidth;
aCardHeight = aCard.offsetHeight;
aCard.style.backgroundColor = 'rgba(250, 255, 255, .99)';

const aniLib = {
  getOpacity: (element) => {
    let getBackgroundColor = element.style.backgroundColor;
    let splitRgba = getBackgroundColor.split(',');
    let extractOpacity = splitRgba[3];
    let holdExtractedNumbers = '';
    for(let i = 0; i < extractOpacity.length; i++) {
      if(parseInt(extractOpacity[i])) {
        holdExtractedNumbers += extractOpacity[i];
      }else if(extractOpacity[i] === '.') {
        holdExtractedNumbers += extractOpacity[i];
      }
    }
    let opacity = parseFloat(holdExtractedNumbers);
    return opacity;
  },
  getRgbSnip: (element) => {
    let getBackgroundColor = element.style.backgroundColor;
    let splitVals = getBackgroundColor.split(',');
    splitVals = splitVals.slice(0, -1);
    let rgbArr = [];
    splitVals.forEach( (rgbStr) => {
      for(let i = 0; i < rgbStr.length; i++) {
        if(parseInt(rgbStr[i])){
          let grabbedNum = `${rgbStr[i]}${rgbStr[i+1]}${rgbStr[i+2]}`;
          let convertToNumber = parseInt(grabbedNum);
          rgbArr.push(convertToNumber);
          break;
        }
      }
    })
    return rgbArr;
  },
  fade: (element, opacityTarget) => {
    let rgbValues = aniLib.getRgbSnip(element);
    let currentOpacity = aniLib.getOpacity(element);
    let direction = '';
    if(opacityTarget < currentOpacity) {
      direction = 'down';
    } else if(opacityTarget > currentOpacity) {
      direction = 'up';
    }
    const intervalId = setInterval(() => {
      switch(direction) {
        case 'down':
          if(opacityTarget < currentOpacity) {
            currentOpacity -= 0.01;
          } else {
            clearInterval(intervalId);
          }
        break;

        case 'up':
          if(opacityTarget > currentOpacity) {
            currentOpacity += 0.01;
          } else {
            clearInterval(intervalId);
          }
        break;
        }
      element.style.backgroundColor = `rgba(${rgbValues[0]}, ${rgbValues[0]}, ${rgbValues[0]}, ${currentOpacity})`;
    }, 10)
  }
}
//aniLib.fade(aCard, 0);
aCard.style.opacity = 0;
