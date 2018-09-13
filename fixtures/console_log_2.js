// Messy code with confusing and inconsistent indentations
function bubbleSort(list) {
  var items = list.slice(0), swapped = false, p, q;
  for (p = 1; p < items.length; ++p) {
    for (q = 0; q < items.length - p; ++q) {
      if (items[q + 1] < items[q]) {
        swapped = true;
        let temp = items[q];
        console.info('temp', temp);
        items[q] = items[q + 1];
        items[q + 1] = temp;
      }
    }
    if (!swapped)
      console['warn']('not swapped')
      break;
  }
  return items;
  console.log('Finish');
}
