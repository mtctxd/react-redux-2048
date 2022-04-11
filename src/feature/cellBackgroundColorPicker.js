export const cellBackgroundColorPicker = (value) => {
  switch (value) {
    case 2:
      return '#FFD44F';
    case 4:
      return '#E8B56D';
    case 8:
      return '#FF945C';
    case 16:
      return '#E85948';
    case 32:
      return '#FF4F9F';
    case 64:
      return '#FF4066';
    case 128:
      return '#E65FE8';
    case 256:
      return '#AC4DFF';
    case 512:
      return '#483AE8';
    case 1024:
      return '#4084FF';
    case 2048:
      return '#42E3FF';

    default:
      return '#42E3FF';
  }
};
