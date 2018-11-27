 function terimainput(){
       var x=document.forms['biodata']['nama'].value;
       var y=document.forms['biodata']['alamat'].value;
       var z=document.forms['biodata']['gender'].value;
       var a=document.forms['biodata']['tglLahir'].value;
       var b=document.forms['biodata']['tlp'].value;
       var c=document.forms['biodata']['email'].value;
       var d=document.forms['biodata']['Pekerjaan'].value;
       var e=document.forms['biodata']['NIK'].value;
                                            
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       var cell8 = row.insertCell(7);
       

            
       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = z;
       cell4.innerHTML = a;
       cell5.innerHTML = b;
       cell6.innerHTML = c;
       cell7.innerHTML = d;
       cell8.innerHTML = e;
       
window.alert("Data berhasil di entry");
}