export const itemizedChangeToString = (itemizedChange) => {
  let stringChange = '';
  if (itemizedChange !== undefined && itemizedChange.length > 0) {
    itemizedChange.forEach(element => {
      stringChange += element.quantity + ' monedas de ' + element.type + '\n';
    });
  }
  return stringChange;
}