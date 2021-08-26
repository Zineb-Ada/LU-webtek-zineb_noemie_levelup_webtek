document.addEventListener('DOMContentLoaded', ()=> {
    var checkbox = document.querySelector('input[type="checkbox"]');
     checkbox.addEventListener('change', ()=> {
      let basic = document.getElementById("forswitchbox")
      let pro = document.getElementById("forswitchbox2")
      let master = document.getElementById("forswitchbox3")
      if (checkbox.checked) {
        basic.textContent =  "$199.99"
        pro.textContent =  "$249.99"
        master.textContent =  "$399.99"
        console.log(xyz=false)
      }else{
        basic.textContent =  "$19.99"
        pro.textContent =  "$24.99"
        master.textContent =  "$39.99"
    }
   });
  });
