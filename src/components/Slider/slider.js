function slider () {

  console.log('slider invoked');

  const obj = { a: 'alpha', b: 'bravo' }
  const newObj = { ...obj, c: 'charlie' }

  console.log('newObj =', newObj);

}

export default slider
