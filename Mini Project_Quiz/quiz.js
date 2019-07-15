const answers=['A','D','C','C','D'];
const form=document.querySelector('.quiz-form');
const output=document.querySelector('.result');
form.addEventListener('submit',e=>{
   e.preventDefault();
   let score=0;
   //console.log(form.q1.value);
   const user=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

   //check answers
   user.forEach((answer,index)=>{
      if(answer===answers[index]){
         score+=4;
      }else{
          
      }
      scrollTo(0,0);
      output.classList.remove('d-none');
      //output.querySelector('span').textContent=`${score}`; 
      let flag=0;
      const anim=setInterval(()=>{
         output.querySelector('span').textContent=`${flag}`;
         if(flag===score){
            clearInterval(anim);
         }else{
            flag++;
         }
      },10);
   });
   // console.log(score); 
}); 