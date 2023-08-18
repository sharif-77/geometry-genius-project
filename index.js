function getInputNumberValue(id) {
    let inputValue=document.getElementById(id).value;
    return parseFloat(inputValue)
    
}
// value converter end

function setInnerText(id,value) {
    document.getElementById(id).innerText=value
}

// inner text setter end

let count=1;
document.getElementById('triangle-btn').addEventListener('click',()=>{
  let result=0.5*  getInputNumberValue('triangle-base')*getInputNumberValue('triangle-height');
  if (isNaN(result))return ;
  setInnerText('triangle-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of Triangle: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})


document.getElementById('rectangle-btn').addEventListener('click',()=>{
  let result=getInputNumberValue('rectangle-base')*getInputNumberValue('rectangle-height');
  if (isNaN(result))return ;
  setInnerText('rectangle-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of rectangle: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})


document.getElementById('Parallelogram-btn').addEventListener('click',()=>{
  let result=getInputNumberValue('Parallelogram-base')*getInputNumberValue('Parallelogram-height');
  if (isNaN(result))return ;
  setInnerText('Parallelogram-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of Parallelogram: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})


document.getElementById('rhombus-btn').addEventListener('click',()=>{
  let result=0.5*getInputNumberValue('rhombus-base')*getInputNumberValue('rhombus-height');
  if (isNaN(result))return ;
  setInnerText('rhombus-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of rhombus: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})


document.getElementById('pentagon-btn').addEventListener('click',()=>{
  let result=0.5*getInputNumberValue('pentagon-base')*getInputNumberValue('pentagon-height');
  if (isNaN(result))return ;
  setInnerText('pentagon-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of pentagon: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})


document.getElementById('ellipse-btn').addEventListener('click',()=>{
  let result=3.14*getInputNumberValue('ellipse-base')*getInputNumberValue('ellipse-height');
  if (isNaN(result))return ;
  setInnerText('ellipse-result',result);
  let emptyParentBox=document.getElementById('empty-box');
  let p=document.createElement('p')
  p.innerHTML=`${count++}: Area of ellipse: ${result} <button class="btn bg-info">convert</button>`
  if (emptyParentBox.childElementCount!==11) {
    emptyParentBox.appendChild(p)
    
  }
setTimeout(()=>{
  setInnerText('triangle-result','')

},1000)
    
})
