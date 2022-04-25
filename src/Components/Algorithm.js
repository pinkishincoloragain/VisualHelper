const configureFilter = (data) => {
  let colorTestData = data.slice(0, 6);
  let readingTestData = data.slice(6, 12);
  let profTestData = data[12];
  let timeStandardColor = 20; // 10 sec
  let timeStandardReading = 40; // 20 sec
  let i = 0;
  let fiterIndicator = 0; // 0: not filter, 1: filter
  let filterData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  // Protanopia, Deuteranopia, Tritanopia,
  // darkMode, contentModification, margin-pading preset
  // screenreader,

  /* COLOR TEST */
  // Too much time case
  for (i = 0; i < colorTestData.length; i++) {
    if (colorTestData[i][1] > 20) {
      colorTestData[i][0] = false;
    }
  }

  // X red (Protanopia) case
  if (colorTestData[0][0] === false || colorTestData[1][0] === false) {
    filterData[0] = 1;
    // Severe Protanopia

    if (colorTestData[0][0] === false && colorTestData[1][0] === false) {
      filterData[0] = 2;
    }
  }

  // X green X red (Deuteranopia) case
  else if (colorTestData[2][0] === false || colorTestData[3][0] === false) {
    // Severe Deuteranopia
    filterData[1] = 1;

    if (colorTestData[2][0] === false && colorTestData[3][0] === false) {
      filterData[1] = 2;
    }
  }

  // changed colour (Tritanopia) case
  else if (colorTestData[4][0] === false || colorTestData[5][0] === false) {
    // Severe Deuteranopia
    filterData[2] = 1;

    if (colorTestData[2][0] === false && colorTestData[3][0] === false) {
      filterData[2] = 2;
    }
  }

  //   blindness
  if (filterData[0] * filterData[1] * filterData[2] > 0) {
  }

  /* READING TEST */
  // Too much time case
  for (i = 0; i < readingTestData.length; i++) {
    if (readingTestData[i][1] > 20) {
      readingTestData[i][0] = false;
    }
  }

  //   prefer dark Mode
  if (readingTestData[0][1] > readingTestData[1][1]) {
    filterData[3] = 1;
  }

  //   prefer less letterspacing
  if (readingTestData[2][1] > readingTestData[3][1]) {
    filterData[4] = 1;
  }

  //   prefer margin, padding preset 1
  if (readingTestData[4][1] > readingTestData[5][1]) {
    filterData[5] = 1;
  }

  console.log(colorTestData);
  console.log(readingTestData);
  console.log(profTestData);
};

export { configureFilter };
