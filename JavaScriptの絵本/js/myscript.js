document.write("myscriptの呼び出しを確認", "<br>"); 　//window.は省略可能
// alert("thank you!"); // こちらも省略可能なので省略済み
document.fgColor = "blue";
document.bgColor = "pink";

a = typeof(123);
b = typeof("hallo world");
c = typeof(true);
d = typeof(window);
e = typeof(null);
f = typeof(undefined);
document.write(a,"<br>",b,"<br>",c,"<br>",d,"<br>",e,"<br>",f,"<br>");


z = 16;
(z < 10) || (document.write("zは１０以上である","<br>"));
(z < 10) && (document.write("zは１０未満である","<br>"));

document.write("2x8+3÷(5-2)x3=", (2*8+3/(5-2)*3),"<br>");