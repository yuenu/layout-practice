/**
 *
 * @param {number} maxLength
 * @param {HTMLInputElement} changedElement
 * @param {Events} evt
 */
export function interactive(maxLength, changedElement, evt) {
  const inputValue = evt.target.value;
  const inputLen = inputValue.length;
  changedElement.textContent =
    inputLen <= maxLength ? inputValue : inputValue.slice(0, maxLength);
}

export function isNumeric(num) {
  num = "" + num; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
}
