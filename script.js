let img = [
  'https://images.unsplash.com/photo-1775214593099-322805de2958?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1775251801951-ccb61c5bb914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1775119223367-03c12e0cbf27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D']

let img1 = document.getElementById('img1') 
let img2 = document.getElementById('img2') 
let img3 = document.getElementById('img3')

let prev = 0
let main = 1
let next = 2

function change(){
  img1.src = img[prev]
  img2.src = img[main]
  img3.src = img[next]
}

function handlePrev() {
  prev = (prev + 1) % img.length  // 1 (0 + 1) % 3 => 1
  main = (main + 1) % img.length  // 2 (1 + 1) % 3 => 2
  next = (next + 1) % img.length  // 0 (2 + 1) % 3 => 0
  change()
}

function handleNext() {
  prev = (prev - 1 + img.length) % img.length   // 2 (0 - 1 + 3) % 3 => 2
  main = (main - 1 + img.length) % img.length   // 1 (2 - 1 + 3) % 3 => 1
  next = (next - 1 + img.length) % img.length   // 0 (1 - 1 + 3) % 3 => 0
  change()
}
